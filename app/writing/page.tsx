import Link from 'next/link'
import BackHome from '../components/BackHome'
import PageHeader from '../components/PageHeader'
import { getAllPosts } from './markdown'

export default async function Writing() {
  const posts = await getAllPosts()

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date.getUTCFullYear()
    if (!acc[year]) acc[year] = []

    acc[year].push(post)
    return acc
  }, {} as Record<number, typeof posts>)

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-2xl">
        <PageHeader title="Writing" />

        {/* Posts by year */}
        <div className="space-y-12">
          {Object.entries(postsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearPosts]) => (
              <section key={year}>
                <h2 className="text-2xl font-semibold mb-6 pl-4 opacity-60">
                  {year}
                </h2>
                <div className="space-y-8">
                  {yearPosts.map((post) => (
                    <article key={post.slug} className="group">
                      <Link href={`/writing/${year}/${post.slug}`}>
                        <div className="p-4 rounded-lg border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900/50 transition-all">
                          <h3 className="text-xl font-semibold">
                            {post.title}
                          </h3>
                          <time className="text-sm text-gray-500 dark:text-gray-400">
                            {post.date.toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              timeZone: 'UTC',
                            })}
                          </time>
                          <div className="mt-2">
                            <p className="text-gray-600 dark:text-gray-300">
                              {post.excerpt}
                            </p>
                            <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                              Read more...
                            </p>
                          </div>
                        </div>
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
