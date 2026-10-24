import type { Metadata } from 'next'
import { Suspense } from 'react'
import { BoothDirectory } from '@/features/booth/components/booth-directory'
import { BoothMap } from '@/features/booth/components/booth-map'
import { BoothMapHeading } from '@/features/booth/components/booth-map-heading'
import { CompaniesSkeleton } from '@/features/company/components/companies-skeleton'
import { getCompanies, getCompanyCategories } from '@/features/company/api/company-service'

export const metadata: Metadata = {
  title: 'บูธ | Intania Job Fair 2026',
}

export default function HomeBoothsPage(props: PageProps<'/booths'>) {
  return (
    <>
      <BoothMap header={<BoothMapHeading />} />
      <Suspense fallback={<CompaniesSkeleton />}>
        <BoothResults searchParams={props.searchParams} />
      </Suspense>
    </>
  )
}

async function BoothResults({ searchParams }: Pick<PageProps<'/booths'>, 'searchParams'>) {
  const [{ q }, companies, categories] = await Promise.all([
    searchParams,
    getCompanies(),
    getCompanyCategories(),
  ])

  return (
    <BoothDirectory
      companies={companies}
      categories={categories}
      initialQuery={typeof q === 'string' ? q : undefined}
    />
  )
}
