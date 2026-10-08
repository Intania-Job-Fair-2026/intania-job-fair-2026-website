'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

type PaginationProps = {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

/** Pages to show: first, current ±1, last — with `null` marking an ellipsis gap */
function getPageItems(page: number, totalPages: number): (number | null)[] {
  const pages = new Set([1, page - 1, page, page + 1, totalPages])
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b)

  const items: (number | null)[] = []
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) items.push(null)
    items.push(p)
  })
  return items
}

const pageTextClass =
  'text-trim w-full text-center font-display text-lg leading-[1.4] font-bold tracking-[0.36px]'

export const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="Pagination" className="flex w-full items-center justify-center gap-2 px-4">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="หน้าก่อนหน้า"
        className="flex size-12 shrink-0 cursor-pointer items-center justify-center disabled:cursor-default disabled:opacity-40"
      >
        <ChevronLeft
          aria-hidden
          size={48}
          strokeWidth={3}
          absoluteStrokeWidth
          className="text-red-500"
        />
      </button>

      <div className="flex min-w-0 flex-1 items-center justify-between">
        {getPageItems(page, totalPages).map((item, i) =>
          item === null ? (
            <span
              key={`gap-${i}`}
              className="flex size-12 shrink-0 items-center justify-center p-2"
            >
              <span className={cn(pageTextClass, 'text-red-700')}>...</span>
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              aria-current={item === page ? 'page' : undefined}
              className={cn(
                'flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full p-2 transition-colors',
                item === page ? 'bg-red-500 text-white' : 'text-red-700 hover:bg-white/40',
              )}
            >
              <span className={pageTextClass}>{item}</span>
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="หน้าถัดไป"
        className="flex size-12 shrink-0 cursor-pointer items-center justify-center disabled:cursor-default disabled:opacity-40"
      >
        <ChevronRight
          aria-hidden
          size={48}
          strokeWidth={3}
          absoluteStrokeWidth
          className="text-red-500"
        />
      </button>
    </nav>
  )
}
