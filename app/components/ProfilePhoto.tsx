import Image from 'next/image'

type ProfilePhotoProps = { size?: 'sm' | 'md' }

export default function ProfilePhoto({ size = 'md' }: ProfilePhotoProps) {
  const sizeClasses = { sm: 'w-32 h-32', md: 'w-48 h-48' }

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-full overflow-hidden`}
    >
      <Image
        src="/david_400x400.jpg"
        alt="David Ernst"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
