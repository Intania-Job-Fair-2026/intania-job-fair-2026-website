'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Directory } from '@/components/directory/directory'
import { type SortOption, useDirectory } from '@/components/directory/use-directory'
import { updateSearchParams } from '@/utils/update-search-params'
import { type CompanyFilters, DAY_OPTIONS, WORK_TYPE_OPTIONS, matchesFilters } from '../filters'
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
  categories: string[]
  heading?: string
  /** Noun in the result count, e.g. "บริษัท" -> "พบ 61 บริษัท" */
  countNoun?: string
  sortOptions?: SortOption<Company>[]
}

/** Searchable, filterable, sortable company list; also used for the booth list */
export const CompanyDirectory = ({
  companies,
  categories,
  heading = 'บริษัททั้งหมด',
  countNoun = 'บริษัท',
  sortOptions = defaultSortOptions,
}: CompanyDirectoryProps) => {
  const searchParams = useSearchParams()
  const filters = useMemo<CompanyFilters>(
    () => ({
      days: DAY_OPTIONS.filter(({ id }) => searchParams.get('days')?.split(',').includes(id)).map(
        ({ id }) => id,
      ),
      workTypes: WORK_TYPE_OPTIONS.filter(({ id }) =>
        searchParams.get('workTypes')?.split(',').includes(id),
      ).map(({ id }) => id),
      category: searchParams.get('category') || null,
    }),
    [searchParams],
  )
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(
    () => companies.filter((c) => matchesFilters(c, filters)),
    [companies, filters],
  )

  const directory = useDirectory(filtered, { getSearchFields, sortOptions })

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
            updateSearchParams({
              days: next.days.join(',') || null,
              workTypes: next.workTypes.join(',') || null,
              category: next.category,
              page: null,
            })
          }}
          onClose={() => setFilterOpen(false)}
        />
      )}
    </>
  )
}
