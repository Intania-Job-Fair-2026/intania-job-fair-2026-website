'use client'

import { CompanyDirectory } from '@/features/company/components/company-directory'
import { sortByBooth, sortByName } from '@/features/company/sort-options'
import type { Company } from '@/features/company/types'

const sortOptions = [sortByBooth, sortByName]

export const BoothDirectory = ({
  companies,
  initialQuery,
}: {
  companies: Company[]
  initialQuery?: string
}) => {
  return (
    <CompanyDirectory
      companies={companies}
      initialQuery={initialQuery}
      heading="บูธทั้งหมด"
      countNoun="บูธ"
      sortOptions={sortOptions}
    />
  )
}
