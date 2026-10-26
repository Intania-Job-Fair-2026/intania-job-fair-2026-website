'use client'

import { CompanyDirectory } from '@/features/company/components/company-directory'
import { sortByBooth, sortByCategory, sortByName } from '@/features/company/sort-options'
import type { Company } from '@/features/company/types'

const sortOptions = [sortByBooth, sortByName, sortByCategory]

export const BoothDirectory = ({
  companies,
  categories,
}: {
  companies: Company[]
  categories: string[]
}) => {
  return (
    <CompanyDirectory
      companies={companies}
      categories={categories}
      heading="บูธทั้งหมด"
      countNoun="บูธ"
      sortOptions={sortOptions}
    />
  )
}
