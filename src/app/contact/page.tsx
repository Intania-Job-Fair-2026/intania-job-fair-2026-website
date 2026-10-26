import type { Metadata } from 'next'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ContactInfo } from '@/features/contact/components/contact-info'

export const metadata: Metadata = {
  title: 'Contact Us | Intania Job Fair 2026',
}

export default function ContactPage() {
  return (
    <main className="mb-(--navbar-height) flex min-h-[calc(100dvh-var(--navbar-height))] w-full flex-1 flex-col bg-red-700 text-white">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-6 pb-8">
        <header className="flex items-center justify-between px-6 pt-6">
          <Link href="/">
            <Image
              src="/images/home/job-fair-logo.png"
              alt="Intania Job Fair 2026 — Home"
              width={64}
              height={64}
              className="size-16 object-contain"
            />
          </Link>
          <Link
            href="/"
            aria-label="ปิดและกลับหน้าหลัก — Close and return home"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-red-500 bg-white text-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <X aria-hidden size={24} />
          </Link>
        </header>

        <Image
          src="/images/contact/contact-plane.svg"
          alt=""
          aria-hidden="true"
          width={402}
          height={198}
          className="pointer-events-none -mt-6 h-auto max-h-48 w-full object-contain object-left"
        />

        <h1 className="px-6 font-thai text-3xl font-bold">ติดต่อเรา — Contact Us</h1>
        <ContactInfo />
      </div>
    </main>
  )
}
