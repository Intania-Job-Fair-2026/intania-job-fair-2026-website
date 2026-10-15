'use client'

import { ArrowRightLeft } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Pagination } from '@/components/pagination'
import { SearchBar } from '@/components/search-bar'
import { SortDialog } from './sort-dialog'

type DirectoryProps = {
  heading: string
  /** e.g. "พบ 67 บริษัท" */
  countLabel: string
  query: string
  onQueryChange: (value: string) => void
  /** Opens the filter UI from the search bar's filter button */
  onFilterClick?: () => void
  sortOptions: { id: string; label: string }[]
  sortBy: string
  onSortChange: (id: string) => void
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
  onFilterClick,
  sortOptions,
  sortBy,
  onSortChange,
  page,
  totalPages,
  onPageChange,
  children,
}: DirectoryProps) => {
  const [sortOpen, setSortOpen] = useState(false)
  const sortLabel = sortOptions.find((o) => o.id === sortBy)?.label

  return (
    <div className="flex w-full flex-col gap-10 pb-4">
      <SearchBar value={query} onChange={onQueryChange} onFilterClick={onFilterClick} />

      <section className="flex w-full flex-col gap-8">
        <h2 className="sr-only">{heading}</h2>
        <div className="flex w-full items-center justify-between px-6">
          <p className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-white">
            {countLabel}
          </p>
          <button
            type="button"
            onClick={() => setSortOpen(true)}
            aria-haspopup="dialog"
            aria-label={`จัดเรียง (ตาม${sortLabel})`}
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

        <div className="grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </section>

      <SortDialog
        open={sortOpen}
        onClose={() => setSortOpen(false)}
        options={sortOptions}
        value={sortBy}
        onChange={onSortChange}
      />

      <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
    </div>
  )
}
