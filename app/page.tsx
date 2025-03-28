import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col sm:flex-row items-center gap-8 sm:gap-0 sm:justify-between w-full max-w-5xl">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="text-xl text-gray-600 dark:text-gray-300">
            Hi, I&apos;m
          </span>
          <h1 className="text-5xl font-bold">David Ernst</h1>
        </div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/david_400x400.jpg"
            alt="David Ernst"
            fill
            className="object-cover"
            priority
          />
        </div>
      </main>
    </div>
  )
}
