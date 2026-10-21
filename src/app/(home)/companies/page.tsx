import type { Metadata } from 'next'
import { CompanyDirectory } from '@/features/company/components/company-directory'
import { getCompanies, getCompanyCategories } from '@/features/company/api/company-service'

export const metadata: Metadata = {
  title: 'บริษัท | Intania Job Fair 2026',
}

export default async function HomeCompaniesPage(props: PageProps<'/companies'>) {
  const [{ q }, companies, categories] = await Promise.all([
    props.searchParams,
    getCompanies(),
    getCompanyCategories(),
  ])

  return (
    <>
      <CompanyDirectory
        companies={companies}
        categories={categories}
        initialQuery={typeof q === 'string' ? q : undefined}
      />
    </>
  )
}
