import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function ContactButton() {
  return (
    <Link
      href="/contact"
      className="absolute top-8 left-[26px] flex w-[159px] cursor-pointer items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
    >
      <span className="text-trim bg-linear-to-b from-red-500 to-red-700 bg-clip-text font-display text-xl leading-[1.2] font-bold tracking-[1.6px] whitespace-nowrap text-transparent">
        Contact Us
      </span>
      <span className="relative size-6 shrink-0 bg-linear-to-b from-red-500 to-red-700">
        <ArrowUpRight aria-hidden size={24} className="text-white" />
      </span>
    </Link>
  )
}
