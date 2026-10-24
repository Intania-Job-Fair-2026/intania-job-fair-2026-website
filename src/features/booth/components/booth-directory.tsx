'use client'

import { CompanyDirectory } from '@/features/company/components/company-directory'
import type { Company } from '@/features/company/types'

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
    />
  )
}
