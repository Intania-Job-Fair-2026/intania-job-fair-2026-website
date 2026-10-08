'use client'

import { ArrowRightLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Pagination } from '@/components/pagination'
import { SearchBar } from '@/components/search-bar'
import type { SortOrder } from './use-directory'

type DirectoryProps = {
  heading: string
  /** e.g. "พบ 67 บริษัท" */
  countLabel: string
  query: string
  onQueryChange: (value: string) => void
  sortOrder: SortOrder
  onToggleSort: () => void
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  children: ReactNode
}

/** Search bar, result count + sort control, card list and pagination */
export const Directory = ({
  heading,
  countLabel,
  query,
  onQueryChange,
  sortOrder,
  onToggleSort,
  page,
  totalPages,
  onPageChange,
  children,
}: DirectoryProps) => {
  return (
    <div className="flex w-full flex-col gap-10 pb-4">
      <SearchBar value={query} onChange={onQueryChange} />

      <section className="flex w-full flex-col gap-8">
        <h2 className="sr-only">{heading}</h2>
        <div className="flex w-full items-center justify-between px-6">
          <p className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-white">
            {countLabel}
          </p>
          <button
            type="button"
            onClick={onToggleSort}
            aria-label={`จัดเรียง (${sortOrder === 'asc' ? 'น้อยไปมาก' : 'มากไปน้อย'})`}
            className="flex cursor-pointer items-center gap-1"
          >
            <span className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-red-700">
              จัดเรียง
            </span>
            <ArrowRightLeft
              aria-hidden
              size={24}
              strokeWidth={1.18}
              absoluteStrokeWidth
              className="text-red-700"
            />
          </button>
        </div>

        <div className="flex w-full flex-col gap-6 px-6">{children}</div>
      </section>

      <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
    </div>
  )
}
