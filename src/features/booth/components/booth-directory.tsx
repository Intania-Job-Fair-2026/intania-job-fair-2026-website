'use client'

import { CompanyDirectory } from '@/features/company/components/company-directory'
import type { Company } from '@/features/company/types'

export const BoothDirectory = ({
  companies,
  categories,
  initialQuery,
}: {
  companies: Company[]
  categories: string[]
  initialQuery?: string
}) => {
  return (
    <CompanyDirectory
      companies={companies}
      categories={categories}
      initialQuery={initialQuery}
      heading="บูธทั้งหมด"
      countNoun="บูธ"
    />
  )
}
