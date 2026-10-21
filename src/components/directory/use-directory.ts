'use client'

import { useMemo, useState } from 'react'

const PAGE_SIZE = 12

export type SortOption<T> = {
  id: string
  label: string
  getKey: (item: T) => string
}

type UseDirectoryOptions<T> = {
  getSearchFields: (item: T) => string[]
  sortOptions: SortOption<T>[]
  initialQuery?: string
}

export function useDirectory<T>(
  items: T[],
  { getSearchFields, sortOptions, initialQuery = '' }: UseDirectoryOptions<T>,
) {
  const [query, setQuery] = useState(initialQuery)
  const [sortBy, setSortBy] = useState(sortOptions[0].id)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = q
      ? items.filter((item) => getSearchFields(item).some((f) => f.toLowerCase().includes(q)))
      : items
    const getKey = (sortOptions.find((o) => o.id === sortBy) ?? sortOptions[0]).getKey
    return [...matches].sort((a, b) => getKey(a).localeCompare(getKey(b), 'th', { numeric: true }))
  }, [items, query, sortBy, getSearchFields, sortOptions])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  return {
    query,
    setQuery: (value: string) => {
      setQuery(value)
      setPage(1)
    },
    sortOptions,
    sortBy,
    setSortBy: (id: string) => {
      setSortBy(id)
      setPage(1)
    },
    total: filtered.length,
    visible: filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    page: currentPage,
    totalPages,
    setPage,
  }
}
