import { getPostBySlug } from '../../markdown'
import ProfilePhoto from '../../../components/ProfilePhoto'
import BackHome from '../../../components/BackHome'

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
            })}
          </time>
        </div>

        {/* Content */}
        <article
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back home link */}
        <BackHome />
      </main>
    </div>
  )
}
