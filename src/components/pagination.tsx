'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

type PaginationProps = {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

/**
 * Pages to show: first, last and a window of `siblings` pages either side of the current one
 * (kept a constant size near the edges), with `null` marking an ellipsis gap.
 * siblings = 0 → at most 5 slots, e.g. "1 … 4 … 9"; siblings = 1 → at most 7 slots.
 */
function getPageItems(page: number, totalPages: number, siblings: number): (number | null)[] {
  const size = 2 * siblings + 1
  let start = Math.max(2, page - siblings)
  let end = Math.min(totalPages - 1, page + siblings)
  if (page - siblings < 2) end = Math.min(totalPages - 1, 1 + size)
  if (page + siblings > totalPages - 1) start = Math.max(2, totalPages - size)

  const pages = [1]
  for (let p = start; p <= end; p++) pages.push(p)
  if (totalPages > 1) pages.push(totalPages)

  const items: (number | null)[] = []
  pages.forEach((p, i) => {
    if (i > 0 && p - pages[i - 1] > 1) items.push(null)
    items.push(p)
  })
  return items
}

// 40px slots below 375px wide so the row fits 320px phones, 48px (design) above
const slotClass = 'flex size-10 shrink-0 items-center justify-center min-[375px]:size-12'

const pageTextClass =
  'text-trim w-full text-center font-display text-lg leading-[1.4] font-bold tracking-[0.36px]'

export const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
  if (totalPages <= 1) return null

  return (
    <nav
      aria-label="Pagination"
      className="mx-auto flex w-full max-w-lg items-center justify-center gap-1 px-2 min-[375px]:gap-2 min-[375px]:px-4"
    >
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="หน้าก่อนหน้า"
        className={cn(slotClass, 'cursor-pointer disabled:cursor-default disabled:opacity-40')}
      >
        <ChevronLeft
          aria-hidden
          size={48}
          strokeWidth={3}
          absoluteStrokeWidth
          className="size-full text-red-500"
        />
      </button>

      {/* Compact window on phones, one extra page either side from md up */}
      <PageList
        items={getPageItems(page, totalPages, 0)}
        page={page}
        onChange={onChange}
        className="md:hidden"
      />
      <PageList
        items={getPageItems(page, totalPages, 1)}
        page={page}
        onChange={onChange}
        className="hidden md:flex"
      />

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="หน้าถัดไป"
        className={cn(slotClass, 'cursor-pointer disabled:cursor-default disabled:opacity-40')}
      >
        <ChevronRight
          aria-hidden
          size={48}
          strokeWidth={3}
          absoluteStrokeWidth
          className="size-full text-red-500"
        />
      </button>
    </nav>
  )
}

type PageListProps = {
  items: (number | null)[]
  page: number
  onChange: (page: number) => void
  className?: string
}

const PageList = ({ items, page, onChange, className }: PageListProps) => {
  return (
    <div className={cn('flex min-w-0 flex-1 items-center justify-between', className)}>
      {items.map((item, i) =>
        item === null ? (
          <span key={`gap-${i}`} className={cn(slotClass, 'p-2')}>
            <span className={cn(pageTextClass, 'text-red-700')}>...</span>
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-current={item === page ? 'page' : undefined}
            className={cn(
              slotClass,
              'cursor-pointer rounded-full p-2 transition-colors',
              item === page ? 'bg-red-500 text-white' : 'text-red-700 hover:bg-white/40',
            )}
          >
            <span className={pageTextClass}>{item}</span>
          </button>
        ),
      )}
    </div>
  )
}
