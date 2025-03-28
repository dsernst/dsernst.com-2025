import BackHome from '../components/BackHome'
import PageHeader from '../components/PageHeader'

export default function Creations() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-3xl">
        <PageHeader
          title="Creations"
          subtitle="A collection of my projects and work"
        />

        <div className="mt-16 grid gap-8">
          {/* Project cards will go here */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-2">Project Name</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Brief description of the project and its key features.
            </p>
            <div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </main>

      <BackHome />
    </div>
  )
}
