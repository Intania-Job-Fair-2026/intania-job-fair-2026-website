'use client'

import { Directory } from '@/components/directory/directory'
import { useDirectory } from '@/components/directory/use-directory'
import { CompanyCard } from '@/features/company/components/company-card'
import type { Company } from '@/features/company/types'

const getSearchFields = (c: Company) => [c.booth, c.name, c.location, ...c.tags]
const getSortKey = (c: Company) => c.booth

export const BoothDirectory = ({
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
      heading="บูธทั้งหมด"
      countLabel={`พบ ${directory.total} บูธ`}
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
