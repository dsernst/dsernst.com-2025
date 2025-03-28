import Link from 'next/link'
import ProfilePhoto from './components/ProfilePhoto'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col sm:flex-row items-center gap-8 sm:gap-0 sm:justify-between w-full max-w-3xl">
        <div className="flex flex-col items-center sm:items-start gap-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/90 via-indigo-100/90 to-violet-100/90 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-violet-900/40 blur-2xl rounded-full" />
          <div className="relative">
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Hi, I&apos;m
            </span>
            <h1 className="text-5xl font-bold">David Ernst</h1>
          </div>
        </div>
        <ProfilePhoto />
      </main>
      <nav className="sm:mt-32 mt-16 flex sm:gap-16 gap-8 text-lg">
        <Link href="/writing" className="hover:underline underline-offset-2">
          Writing
        </Link>
        <Link href="/creations" className="hover:underline underline-offset-2">
          Creations
        </Link>
        <Link href="/contact" className="hover:underline underline-offset-2">
          Contact
        </Link>
      </nav>
    </div>
  )
}
