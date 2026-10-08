import type { Metadata } from 'next'
import { Banner } from '@/components/banner'
import { CompanyDirectory } from '@/features/company/components/company-directory'
import { mockCompanies } from '@/features/company/mock'

export const metadata: Metadata = {
  title: 'บริษัท | Intania Job Fair 2026',
}

export default async function HomeCompaniesPage(props: PageProps<'/companies'>) {
  const { q } = await props.searchParams

  return (
    <>
      <Banner />
      <CompanyDirectory
        companies={mockCompanies}
        initialQuery={typeof q === 'string' ? q : undefined}
      />
    </>
  )
}
