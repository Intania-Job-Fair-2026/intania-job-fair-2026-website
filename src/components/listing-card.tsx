import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { LinkPendingIndicator } from './link-pending-indicator'

/** Shared building blocks for the booth-directory cards */

export const ListingCard = ({
  children,
  className,
  href,
}: {
  children: ReactNode
  className?: string
  /** Makes the whole card a link, e.g. to its detail page */
  href?: string
}) => {
  const body = cn('flex min-w-0 flex-1 flex-col overflow-clip bg-white p-4', className)

  return (
    <article className="flex w-full items-center drop-shadow-card">
      {href ? (
        <Link
          href={href}
          prefetch={true}
          className={cn(
            body,
            'relative transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700',
          )}
        >
          {children}
          <LinkPendingIndicator />
        </Link>
      ) : (
        <div className={body}>{children}</div>
      )}
    </article>
  )
}

export const TagList = ({ tags }: { tags: string[] }) => {
  if (tags.length === 0) return null

  return (
    <ul className="flex w-full flex-wrap items-center gap-1">
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
    <div className="flex min-h-7 w-full items-center gap-1 border-b border-card-line pb-1">
      <Icon aria-hidden size={16} className="shrink-0 text-ink" />
      <p className="text-trim min-w-0 flex-1 font-thai text-sm leading-[1.4] tracking-[0.28px] text-ink">
        {children}
      </p>
    </div>
  )
}

/**
 * Vertical divider followed by the booth code(s), on the right edge of a card.
 * A booth with a `day` is labelled with it, for companies that move between days.
 */
export const BoothCode = ({ booths }: { booths: { code: string; day?: string }[] }) => {
  return (
    <>
      {/* Stretch the divider with taller cards. */}
      <div aria-hidden className="min-h-[136px] w-[3px] shrink-0 self-stretch bg-card-line" />
      <ul className="flex shrink-0 flex-col items-center gap-3 p-1">
        {booths.map(({ code, day }) => (
          <li key={code} className="flex flex-col items-center gap-1.5">
            {day && (
              <span className="text-trim font-thai text-xs leading-[1.4] whitespace-nowrap text-ink">
                วันที่ {day}
              </span>
            )}
            <span className="text-trim font-display text-2xl leading-[1.2] font-bold tracking-[3.84px] whitespace-nowrap text-red-900">
              {code}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
