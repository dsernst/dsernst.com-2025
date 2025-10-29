import BackHome from '../components/BackHome'
import PageHeader from '../components/PageHeader'
import { unsorted_list_of_projects } from './projects'

export default function Creations() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-3xl">
        <PageHeader
          title="Portfolio"
          subtitle="Here are some things I've made:"
        />

        <div className="mt-16 grid gap-8">
          {unsorted_list_of_projects.map((project) => (
            <div
              key={project}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <h2 className="sm:text-2xl font-semibold">{project}</h2>
            </div>
          ))}
        </div>
      </main>

      <BackHome />
    </div>
  )
}
