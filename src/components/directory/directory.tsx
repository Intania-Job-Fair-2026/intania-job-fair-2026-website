'use client'

import { Children, type ReactNode, useLayoutEffect, useRef } from 'react'
import { ListItemReveal } from '@/components/list-item-reveal'
import { Pagination } from '@/components/pagination'
import { SearchBar } from '@/components/search-bar'
import { SortDropdown } from './sort-dropdown'

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
  const directoryRef = useRef<HTMLDivElement>(null)
  const requestedPage = useRef<number | null>(null)

  useLayoutEffect(() => {
    if (requestedPage.current !== page) return
    requestedPage.current = null

    const directory = directoryRef.current
    if (!directory) return

    // Release the bottom button before scrolling, without moving the viewport yet.
    directory.focus({ preventScroll: true })

    // Start after React commits the new list and the browser settles its scroll range.
    const frame = requestAnimationFrame(() => {
      window.scrollTo({
        top: Math.max(0, window.scrollY + directory.getBoundingClientRect().top),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [page])

  return (
    <div
      ref={directoryRef}
      role="region"
      aria-label={heading}
      tabIndex={-1}
      className="flex w-full flex-col gap-10 pb-4 [overflow-anchor:none] focus:outline-none"
    >
      <SearchBar value={query} onChange={onQueryChange} onFilterClick={onFilterClick} />

      <section className="flex w-full flex-col gap-8">
        <h2 className="sr-only">{heading}</h2>
        <div className="flex w-full items-center justify-between px-6">
          <p className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-white">
            {countLabel}
          </p>
          <SortDropdown options={sortOptions} value={sortBy} onChange={onSortChange} />
        </div>

        <div className="grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {Children.map(children, (child, index) => (
            <ListItemReveal index={index}>{child}</ListItemReveal>
          ))}
        </div>
      </section>

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={(next) => {
          if (next === page) return
          requestedPage.current = next
          onPageChange(next)
        }}
      />
    </div>
  )
}
