import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <header className="relative flex items-center px-6">
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
      <div className="absolute top-0 right-[-31px] h-20 w-[216px]">
        <Image
          src="/icons/navbar-cloud.svg"
          alt=""
          width={216}
          height={80}
          className="absolute inset-0 block max-w-none"
        />
        {/* TODO: Contact to เสี่ยหนู */}
        <a href="#" className="absolute top-8 left-[26px] flex w-[159px] items-center gap-2">
          <span className="text-trim bg-linear-to-b from-red-500 to-red-700 bg-clip-text font-display text-xl leading-[1.2] font-bold tracking-[1.6px] whitespace-nowrap text-transparent">
            Contact Us
          </span>
          <span className="relative size-6 shrink-0 bg-linear-to-b from-red-500 to-red-700">
            <ArrowUpRight aria-hidden size={24} className="text-white" />
          </span>
        </a>
      </div>
    </header>
  )
}
