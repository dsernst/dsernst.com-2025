import ProfilePhoto from './ProfilePhoto'

interface PageHeaderProps {
  title: string
  subtitle?: string
  subtitleClassName?: string
}

export default function PageHeader({
  title,
  subtitle,
  subtitleClassName = 'text-xl text-gray-600 dark:text-gray-300',
}: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-12 gap-4 relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/90 via-indigo-100/90 to-violet-100/90 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-violet-900/40 blur-2xl rounded-full" />
      <div className="relative flex flex-col items-center">
        <ProfilePhoto size="sm" />
        <h1 className="text-4xl font-bold mt-4 text-center">{title}</h1>
        {subtitle && (
          <p className={`mt-2 text-center ${subtitleClassName}`}>{subtitle}</p>
        )}
      </div>
    </div>
  )
}
