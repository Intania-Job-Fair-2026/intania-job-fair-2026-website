'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ContactButton } from '@/features/contact/components/contact-button'

export const TopBar = () => {
  const pathname = usePathname()
  const companyDetails = pathname.startsWith('/companies/')

  return (
    <header className="relative flex w-full items-center justify-between md:gap-6 md:px-6 lg:px-[120px]">
      {/* Phone spacing stays compact; wider screens use the desktop header gutters. */}
      <div className="flex w-full items-center px-6 md:w-auto md:shrink-0 md:px-0">
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
      <nav
        aria-label="Main navigation"
        className="mx-auto hidden min-w-0 md:block md:w-full md:max-w-[438px]"
      >
        <ul className="grid grid-cols-3 items-center text-center">
          {[
            { label: 'Home', href: '/' },
            { label: 'Booths', href: '/booths' },
            { label: 'Companies', href: '/companies' },
          ].map(({ label, href }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
            return (
              <li key={href} className="min-w-0">
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-trim rounded-sm font-heading text-base leading-[1.6] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 ${companyDetails ? 'text-blue-900' : 'text-white'} ${active ? 'font-bold' : 'font-normal'}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* The cloud bleeds off the phone edge and sits inside the header on wider screens. */}
      <div className="absolute top-0 -right-7.75 h-20 w-54 md:relative md:top-auto md:right-auto md:shrink-0">
        <Image
          src="/icons/navbar-cloud.svg"
          alt=""
          width={216}
          height={80}
          className="absolute inset-0 block max-w-none md:hidden"
        />
        <Image
          src="/images/navigation/topbar-cloud.svg"
          alt=""
          width={216}
          height={80}
          className="absolute inset-0 hidden max-w-none md:block"
        />
        <ContactButton />
      </div>
    </header>
  )
}
