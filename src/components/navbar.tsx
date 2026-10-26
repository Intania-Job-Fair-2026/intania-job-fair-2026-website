'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Booths', href: '/booths', icon: 'booths' },
  { label: 'Companies', href: '/companies', icon: 'companies' },
] as const

type NavItem = (typeof items)[number]

function NavIcon({ icon }: { icon: NavItem['icon'] }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 2.1,
  }

  if (icon !== 'companies') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="m3.5 10 8.5-7 8.5 7v10.5H3.5V10Z" />
        <path d="M9 20.5v-7h6v7" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" {...common}>
      <path d="M3 20.5V9l9-6 9 6v11.5" />
      <path d="M2.5 20.5h19M8 20.5v-6h8v6" />
    </svg>
  )
}

function NavStamp({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <li className="relative isolate flex h-[90px] max-w-[90px] flex-1 overflow-hidden bg-[#f7e7e7] ">
      <Link
        href={item.href}
        aria-current={active ? 'page' : undefined}
        className="relative z-0 flex w-full flex-col items-center justify-center gap-[2px] px-1 pt-1 text-[#355264] outline-none transition-colors hover:bg-[#f2e5e6] focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8e55d8]"
      >
        <span className="flex h-7 items-center justify-center">
          <NavIcon icon={item.icon} />
        </span>
        <span className="font-benguiat text-sm leading-5">{item.label}</span>
      </Link>

      {/* Perforation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -inset-x-1.5 top-0 flex -translate-y-1/2 justify-between color">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-3 w-3 shrink-0 rounded-full bg-white" />
          ))}
        </div>

        <div className="absolute -inset-x-1.5 bottom-0 flex translate-y-1/2 justify-between">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-3 w-3 shrink-0 rounded-full bg-white " />
          ))}
        </div>

        <div className="absolute -inset-y-1.5 left-0 flex -translate-x-1/2 flex-col justify-between">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-3 w-3 shrink-0 rounded-full bg-white" />
          ))}
        </div>

        <div className="absolute -inset-y-1.5 right-0 flex translate-x-1/2 flex-col justify-between">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-3 w-3 shrink-0 rounded-full bg-white" />
          ))}
        </div>
      </div>

      {active ? (
        <Image
          src="/Check-Approved-Circle-Doodle.png"
          alt=""
          aria-hidden="true"
          width={250}
          height={250}
          loading="eager"
          className="pointer-events-none absolute left-1/2 top-[35px] z-20 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      ) : null}
    </li>
  )
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main navigation" className="w-full fixed bottom-0 max-w-screen">
      <ul className="flex h-[var(--navbar-height)] w-full gap-6 justify-center items-center bg-white">
        {items.map((item) => (
          <NavStamp key={item.href} item={item} active={pathname === item.href} />
        ))}
      </ul>
    </nav>
  )
}
