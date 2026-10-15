import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CloseButton } from '@/features/contact/components/close-button'
import { ContactInfo } from '@/features/contact/components/contact-info'

export const metadata: Metadata = {
  title: 'ติดต่อเรา | Intania Job Fair 2026',
}

// The page is sized to fit one screen (minus the fixed 120px navbar) so nothing needs scrolling:
// everything scales with the viewport height as well as the width.
export default function ContactPage() {
  return (
    <main className="flex h-dvh min-h-[480px] w-full flex-col overflow-x-clip bg-red-700 pt-[2dvh] pb-[120px] text-white">
      {/* Full width on every screen: logo and close button hug the edges of the screen, like the plane */}
      <div className="w-full shrink-0">
        <header className="relative z-10 flex items-center justify-between px-6 lg:px-10">
          <Link href="/" className="relative size-[clamp(56px,9dvh,80px)] shrink-0">
            <Image
              src="/images/home/job-fair-logo.png"
              alt="Intania Job Fair 2026"
              fill
              sizes="80px"
              priority
              className="object-cover"
            />
          </Link>
          <CloseButton />
        </header>
      </div>

      {/* Phone: scales with the screen like the design. Notebook: flush against the left edge of the screen */}
      <Image
        src="/images/contact/contact-plane.svg"
        alt="Contact Us"
        width={402}
        height={198}
        priority
        className="pointer-events-none -mt-[2dvh] h-auto max-h-[26dvh] w-full shrink-0 self-start object-contain object-left md:w-[480px] lg:w-[560px]"
      />

      <div className="mx-auto flex min-h-0 w-full flex-1 md:max-w-3xl lg:max-w-6xl">
        <ContactInfo />
      </div>
    </main>
  )
}
