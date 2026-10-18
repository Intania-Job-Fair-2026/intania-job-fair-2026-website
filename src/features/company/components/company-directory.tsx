'use client'

import { useMemo, useState } from 'react'
import { Directory } from '@/components/directory/directory'
import { type SortOption, useDirectory } from '@/components/directory/use-directory'
import { type CompanyFilters, EMPTY_FILTERS, matchesFilters } from '../filters'
import { sortByBooth, sortByCategory, sortByName } from '../sort-options'
import type { Company } from '../types'
import { CompanyCard } from './company-card'
import { CompanyFilterSheet } from './company-filter-sheet'

const getSearchFields = (c: Company) => [
  c.name,
  ...c.altNames,
  ...c.booths.map((b) => b.code),
  c.category,
  ...c.tags,
]

const defaultSortOptions = [sortByName, sortByCategory, sortByBooth]

type CompanyDirectoryProps = {
  companies: Company[]
  initialQuery?: string
  heading?: string
  /** Noun in the result count, e.g. "บริษัท" -> "พบ 61 บริษัท" */
  countNoun?: string
  sortOptions?: SortOption<Company>[]
}

/** Searchable, filterable, sortable company list; also used for the booth list */
export const CompanyDirectory = ({
  companies,
  initialQuery,
  heading = 'บริษัททั้งหมด',
  countNoun = 'บริษัท',
  sortOptions = defaultSortOptions,
}: CompanyDirectoryProps) => {
  const [filters, setFilters] = useState<CompanyFilters>(EMPTY_FILTERS)
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(
    () => companies.filter((c) => matchesFilters(c, filters)),
    [companies, filters],
  )
  const categories = useMemo(
    () => [...new Set(companies.map((c) => c.category))].sort((a, b) => a.localeCompare(b)),
    [companies],
  )

  const directory = useDirectory(filtered, { getSearchFields, sortOptions, initialQuery })

  return (
    <>
      <Directory
        heading={heading}
        countLabel={`พบ ${directory.total} ${countNoun}`}
        query={directory.query}
        onQueryChange={directory.setQuery}
        onFilterClick={() => setFilterOpen(true)}
        sortOptions={directory.sortOptions}
        sortBy={directory.sortBy}
        onSortChange={directory.setSortBy}
        page={directory.page}
        totalPages={directory.totalPages}
        onPageChange={directory.setPage}
      >
        {directory.visible.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </Directory>

      {filterOpen && (
        <CompanyFilterSheet
          initial={filters}
          categories={categories}
          onApply={(next) => {
            setFilters(next)
            directory.setPage(1)
          }}
          onClose={() => setFilterOpen(false)}
        />
      )}
    </>
  )
}
