import BackHome from '../components/BackHome'
import PageHeader from '../components/PageHeader'
import { projects, type Project } from './projects'

function ProjectCard({
  project,
  linked,
}: {
  project: Project
  linked: boolean
}) {
  return (
    <div
      className={`p-6 rounded-lg border bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all ${
        linked
          ? 'border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900/50 group-active:scale-[0.99] group-active:bg-gray-100 dark:group-active:bg-gray-800/60'
          : 'border-gray-200 dark:border-gray-800'
      }`}
    >
      <h2 className="sm:text-2xl font-semibold">{project.title}</h2>
    </div>
  )
}

export default function Creations() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-3xl">
        <PageHeader
          title="Portfolio"
          subtitle="Here are some things I've made:"
        />

        <div className="mt-16 grid gap-8">
          {projects.map((project) =>
            project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <ProjectCard project={project} linked />
              </a>
            ) : (
              <div key={project.title}>
                <ProjectCard project={project} linked={false} />
              </div>
            ),
          )}
        </div>
      </main>

      <BackHome />
    </div>
  )
}
