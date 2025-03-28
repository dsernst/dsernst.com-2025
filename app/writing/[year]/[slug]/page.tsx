import { getPostBySlug } from '../../markdown'
import ProfilePhoto from '@/app/components/ProfilePhoto'
import Link from 'next/link'

export default async function Post({
  params,
}: {
  params: Promise<{ year: string; slug: string }>
}) {
  const post = await getPostBySlug((await params).slug)

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 gap-4">
          <ProfilePhoto size="sm" />
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <time className="text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
        </div>

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
