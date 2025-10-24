import Link from 'next/link'
import BackHome from '../components/BackHome'
import PageHeader from '../components/PageHeader'
import { projects } from './projects'

export default function Creations() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-3xl">
        <PageHeader
          title="Portfolio"
          subtitle="Here are some things I've made"
        />

        <div className="mt-16 grid gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <Link
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </main>

      <BackHome />
    </div>
  )
}
