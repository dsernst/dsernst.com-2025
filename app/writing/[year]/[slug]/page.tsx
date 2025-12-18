import { getPostBySlug } from '../../markdown'
import PageHeader from '@/app/components/PageHeader'
import Link from 'next/link'
import type { Metadata } from 'next'
import { headers } from 'next/headers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string; slug: string }>
}): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug)
  const headersList = await headers()
  const host = headersList.get('host') || 'dsernst.com'
  const protocol = headersList.get('x-forwarded-proto') || 'https'
  const baseUrl = `${protocol}://${host}`

  const metadata: Metadata = {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date.toISOString(),
      ...(post.image && {
        images: [
          {
            url: post.image.startsWith('http')
              ? post.image
              : `${baseUrl}${post.image}`,
            alt: post.title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(post.image && {
        images: [
          post.image.startsWith('http')
            ? post.image
            : `${baseUrl}${post.image}`,
        ],
      }),
    },
  }

  return metadata
}

export default async function Post({
  params,
}: {
  params: Promise<{ year: string; slug: string }>
}) {
  const post = await getPostBySlug((await params).slug)
  const dateString = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-2xl">
        <PageHeader
          title={post.title}
          subtitle={dateString}
          subtitleClassName="text-sm text-gray-500 dark:text-gray-400"
        />

        {/* Content */}
        <article
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Link to writings home */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/writing"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            ← Back to writings
          </Link>
        </div>
      </main>
    </div>
  )
}
