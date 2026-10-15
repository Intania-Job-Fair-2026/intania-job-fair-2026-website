import type { Metadata } from 'next'
import { Banner } from '@/components/banner'
import { CompanyDirectory } from '@/features/company/components/company-directory'
import { getCompanies } from '@/features/company/api/company-service'

export const metadata: Metadata = {
  title: 'บริษัท | Intania Job Fair 2026',
}

export default async function HomeCompaniesPage(props: PageProps<'/companies'>) {
  const [{ q }, companies] = await Promise.all([props.searchParams, getCompanies()])

  return (
    <>
      <Banner />
      <CompanyDirectory
        companies={companies}
        initialQuery={typeof q === 'string' ? q : undefined}
      />
    </>
  )
}
