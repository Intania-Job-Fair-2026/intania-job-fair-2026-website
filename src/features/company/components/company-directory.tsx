'use client'

import { Directory } from '@/components/directory/directory'
import { useDirectory } from '@/components/directory/use-directory'
import type { Company } from '../types'
import { CompanyCard } from './company-card'

const getSearchFields = (c: Company) => [c.name, c.booth, c.location, ...c.tags]
const getSortKey = (c: Company) => c.name

export const CompanyDirectory = ({
  companies,
  initialQuery,
}: {
  companies: Company[]
  initialQuery?: string
}) => {
  const directory = useDirectory(companies, {
    getSearchFields,
    getSortKey,
    initialQuery,
  })

  return (
    <Directory
      heading="บริษัททั้งหมด"
      countLabel={`พบ ${directory.total} บริษัท`}
      query={directory.query}
      onQueryChange={directory.setQuery}
      sortOrder={directory.sortOrder}
      onToggleSort={directory.toggleSortOrder}
      page={directory.page}
      totalPages={directory.totalPages}
      onPageChange={directory.setPage}
    >
      {directory.visible.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </Directory>
  )
}
