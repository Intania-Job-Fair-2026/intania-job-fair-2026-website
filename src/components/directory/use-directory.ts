'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { updateSearchParams } from '@/utils/update-search-params'

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
  const searchParams = useSearchParams()
  const query = searchParams.get('q') ?? initialQuery
  const sortBy =
    sortOptions.find((option) => option.id === searchParams.get('sort'))?.id ?? sortOptions[0].id
  const requestedPage = Number(searchParams.get('page') ?? 1)
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1

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
      updateSearchParams({ q: value, page: null })
    },
    sortOptions,
    sortBy,
    setSortBy: (id: string) => {
      updateSearchParams({ sort: id, page: null })
    },
    total: filtered.length,
    visible: filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    page: currentPage,
    totalPages,
    setPage: (next: number) => {
      const target = Math.max(1, Math.min(next, totalPages))
      updateSearchParams({ page: target === 1 ? null : String(target) })
    },
  }
}
