export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-12">Contact</h1>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-xl font-semibold mb-6">Get in touch</h2>
            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
              <p>
                Feel free to reach out at{' '}
                <a
                  href="mailto:hi@dsernst.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  hi@dsernst.com
                </a>
              </p>
              <p>
                Or message me on{' '}
                <a
                  href="https://signal.me/#eu/BoJi_hXAgZij8SBK2mGyEoemAKKgZ7_RYOjAOnkgVYCu8IjJAH5EjblXfQ0U3Cbc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Signal
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-6">Follow me</h2>
            <div className="flex flex-col gap-4">
              <p>
                <a
                  href="https://github.com/dsernst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/dsernst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Twitter
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
