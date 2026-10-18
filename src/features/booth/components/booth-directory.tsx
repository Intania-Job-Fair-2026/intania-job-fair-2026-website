'use client'

import { CompanyDirectory } from '@/features/company/components/company-directory'
import type { Company } from '@/features/company/types'

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
    />
  )
}
