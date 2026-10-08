import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

/** Shared building blocks for the booth-directory cards (companies, jobs) */

export const ListingCard = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <article className="flex w-full items-center drop-shadow-card">
      <div className={cn('flex min-w-0 flex-1 flex-col overflow-clip bg-white p-4', className)}>
        {children}
      </div>
    </article>
  )
}

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex w-full items-center gap-1">
      {tags.map((tag) => (
        <li
          key={tag}
          className="flex items-center justify-center rounded-3xl bg-blue-100 px-3 py-2"
        >
          <span className="text-trim font-display text-sm leading-[1.4] tracking-[0.28px] whitespace-nowrap text-blue-900">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}

export const InfoRow = ({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) => {
  return (
    <div className="flex w-full items-center gap-1 border-b border-blue-900">
      <Icon aria-hidden size={16} className="shrink-0 text-ink" />
      <p className="text-trim min-w-0 flex-1 font-thai text-sm leading-[1.4] tracking-[0.28px] text-ink">
        {children}
      </p>
    </div>
  )
}

/** Vertical divider followed by the booth code, on the right edge of a card */
export const BoothCode = ({ booth }: { booth: string }) => {
  return (
    <>
      <div className="flex h-[136px] w-0 shrink-0 items-center justify-center">
        <div className="flex-none rotate-90">
          <Image
            src="/icons/divider-vertical.svg"
            alt=""
            width={136}
            height={1}
            className="block max-w-none"
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-1">
        <p className="text-trim font-display text-2xl leading-[1.2] font-bold tracking-[3.84px] whitespace-nowrap text-red-900">
          {booth}
        </p>
      </div>
    </>
  )
}
