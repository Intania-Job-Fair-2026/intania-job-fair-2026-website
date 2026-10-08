import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type SectionHeaderProps = {
  title: string
  /** "See all" link on the right */
  link?: { href: string; label: string }
}

export const SectionHeader = ({ title, link }: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between px-6">
      <h2 className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-blue-900">
        {title}
      </h2>
      {link && (
        <Link href={link.href} className="flex items-center gap-1 hover:underline">
          <span className="text-trim text-center font-thai text-base leading-[1.4] whitespace-nowrap text-blue-800">
            {link.label}
          </span>
          <ArrowRight
            aria-hidden
            size={20}
            strokeWidth={1.18}
            absoluteStrokeWidth
            className="text-blue-800"
          />
        </Link>
      )}
    </div>
  )
}
