'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Booths', href: '/booths', icon: 'booths' },
  { label: 'Companies', href: '/companies', icon: 'companies' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const activeItem = items.find(
    (item) => pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)),
  )

  return (
    <nav aria-label="Main navigation" className="fixed bottom-0 z-50 w-full max-w-screen md:hidden">
      <div className="relative h-[var(--navbar-height)] w-full md:hidden">
        <Image
          src="/images/navigation/paper.png"
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="pointer-events-none object-fill"
        />
        <ul className="relative flex h-full items-center justify-center gap-10 px-3 py-4">
          {items.map((item) => (
            <li key={item.href} className="size-22 shrink-0">
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={activeItem === item ? 'page' : undefined}
                className="relative block size-full rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                <Image
                  src={`/images/navigation/${item.icon}.png`}
                  alt=""
                  width={88}
                  height={88}
                  className="size-22 object-contain"
                />
                {activeItem === item && (
                  <Image
                    src="/images/navigation/active.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="pointer-events-none absolute top-3 left-3"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
