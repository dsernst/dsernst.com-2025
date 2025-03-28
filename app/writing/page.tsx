import Link from 'next/link'
import ProfilePhoto from '../components/ProfilePhoto'
import BackHome from '../components/BackHome'
import { getAllPosts } from './markdown'

export default async function Writing() {
  const posts = await getAllPosts()

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<number, typeof posts>)

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 gap-4">
          <ProfilePhoto size="sm" />
          <h1 className="text-4xl font-bold">Writing</h1>
        </div>

        {/* Posts by year */}
        <div className="space-y-12">
          {Object.entries(postsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearPosts]) => (
              <section key={year}>
                <h2 className="text-2xl font-semibold mb-6">{year}</h2>
                <div className="space-y-8">
                  {yearPosts.map((post) => (
                    <article key={post.slug} className="group">
                      <Link href={`/writing/${year}/${post.slug}`}>
                        <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {post.title}
                        </h3>
                        <time className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {post.excerpt}
                        </p>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
        </div>

        {/* Back home link */}
        <BackHome />
      </main>
    </div>
  )
}
