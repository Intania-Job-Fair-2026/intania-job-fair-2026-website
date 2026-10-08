'use client'

import { useMemo, useState } from 'react'

const PAGE_SIZE = 12

export type SortOrder = 'asc' | 'desc'

type UseDirectoryOptions<T> = {
  /** Fields matched (case-insensitively) against the search query */
  getSearchFields: (item: T) => string[]
  /** Value the list is sorted by */
  getSortKey: (item: T) => string
  /** Pre-filled search query, e.g. from the `?q=` URL param */
  initialQuery?: string
}

/** Client-side search, sort and pagination for a booth-directory list */
export function useDirectory<T>(
  items: T[],
  { getSearchFields, getSortKey, initialQuery = '' }: UseDirectoryOptions<T>,
) {
  const [query, setQuery] = useState(initialQuery)
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = q
      ? items.filter((item) => getSearchFields(item).some((f) => f.toLowerCase().includes(q)))
      : items
    const direction = sortOrder === 'asc' ? 1 : -1
    return [...matches].sort(
      (a, b) => getSortKey(a).localeCompare(getSortKey(b), 'th', { numeric: true }) * direction,
    )
  }, [items, query, sortOrder, getSearchFields, getSortKey])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  return {
    query,
    setQuery: (value: string) => {
      setQuery(value)
      setPage(1)
    },
    sortOrder,
    toggleSortOrder: () => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc')),
    total: filtered.length,
    visible: filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    page: currentPage,
    totalPages,
    setPage: (next: number) => {
      setPage(next)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  }
}
