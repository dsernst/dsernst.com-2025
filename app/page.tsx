import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/david_400x400.jpg"
            alt="David Ernst"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold">Hi, I&apos;m David Ernst</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to my personal website
        </p>
      </main>
    </div>
  )
}
