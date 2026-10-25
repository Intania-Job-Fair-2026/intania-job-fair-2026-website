import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CompanyDirectory } from '@/features/company/components/company-directory'
import { CompaniesSkeleton } from '@/features/company/components/companies-skeleton'
import { getCompanies, getCompanyCategories } from '@/features/company/api/company-service'

export const metadata: Metadata = {
  title: 'บริษัท | Intania Job Fair 2026',
}

export default function HomeCompaniesPage() {
  // Keep this fallback local: an ancestor loading.tsx also replaces company details.
  return (
    <Suspense fallback={<CompaniesSkeleton />}>
      <CompanyResults />
    </Suspense>
  )
}

async function CompanyResults() {
  const [companies, categories] = await Promise.all([getCompanies(), getCompanyCategories()])

  return <CompanyDirectory companies={companies} categories={categories} />
}
