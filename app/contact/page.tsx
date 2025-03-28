import ProfilePhoto from '../components/ProfilePhoto'
import BackHome from '../components/BackHome'
import { MdEmail } from 'react-icons/md'
import { FaSignal } from 'react-icons/fa'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <main className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 gap-4">
          <ProfilePhoto size="sm" />
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-xl font-semibold mb-6">Get in touch</h2>
            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                <a
                  href="mailto:hi@dsernst.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  hi@dsernst.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaSignal className="text-xl" />
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

          {/* Places I post */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Other places I post</h2>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/dsernst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  GitHub
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaTwitter className="text-xl" />
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

        {/* Back home link */}
        <BackHome />
      </main>
    </div>
  )
}
