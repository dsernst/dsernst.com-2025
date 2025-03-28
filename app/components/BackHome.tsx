import Link from 'next/link'

export default function BackHome() {
  return (
    <div className="mt-16 flex justify-center">
      <Link
        href="/"
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1"
      >
        ← Back home
      </Link>
    </div>
  )
}
