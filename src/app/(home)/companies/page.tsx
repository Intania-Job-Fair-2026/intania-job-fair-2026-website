import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CompanyDirectory } from '@/features/company/components/company-directory'
import { CompaniesSkeleton } from '@/features/company/components/companies-skeleton'
import { getCompanies, getCompanyCategories } from '@/features/company/api/company-service'

export const metadata: Metadata = {
  title: 'บริษัท | Intania Job Fair 2026',
}

export default function HomeCompaniesPage(props: PageProps<'/companies'>) {
  // Keep this fallback local: an ancestor loading.tsx also replaces company details.
  return (
    <Suspense fallback={<CompaniesSkeleton />}>
      <CompanyResults searchParams={props.searchParams} />
    </Suspense>
  )
}

async function CompanyResults({ searchParams }: Pick<PageProps<'/companies'>, 'searchParams'>) {
  const [{ q }, companies, categories] = await Promise.all([
    searchParams,
    getCompanies(),
    getCompanyCategories(),
  ])

  return (
    <CompanyDirectory
      companies={companies}
      categories={categories}
      initialQuery={typeof q === 'string' ? q : undefined}
    />
  )
}
