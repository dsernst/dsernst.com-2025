import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'David Ernst',
  description: 'Hi, welcome to my personal site.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative min-h-screen">
        {/* Gradient background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
        </div>
        {children}
      </body>
    </html>
  )
}
