import Image from 'next/image'

export default function ProfilePhoto() {
  return (
    <div className="relative w-48 h-48 rounded-full overflow-hidden">
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
