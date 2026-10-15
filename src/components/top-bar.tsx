import Image from 'next/image'
import Link from 'next/link'
import { ContactButton } from '@/features/contact/components/contact-button'

export const TopBar = () => {
  return (
    <header className="relative w-full">
      {/* Logo hugs the left edge of the screen at every width, mirroring the cloud on the right */}
      <div className="flex w-full items-center px-6 lg:px-10">
        <Link href="/" className="relative size-20 shrink-0">
          <Image
            src="/images/home/job-fair-logo.png"
            alt="Intania Job Fair 2026"
            fill
            sizes="80px"
            priority
            className="object-cover"
          />
        </Link>
      </div>
      {/* Fixed-size cloud pinned to the right edge of the screen, bleeding 31px off it */}
      <div className="absolute top-0 -right-7.75 h-20 w-54">
        <Image
          src="/icons/navbar-cloud.svg"
          alt=""
          width={216}
          height={80}
          className="absolute inset-0 block max-w-none"
        />
        <ContactButton />
      </div>
    </header>
  )
}
