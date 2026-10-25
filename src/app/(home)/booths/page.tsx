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

export default function HomeBoothsPage() {
  return (
    <>
      <BoothMap header={<BoothMapHeading />} />
      <Suspense fallback={<CompaniesSkeleton />}>
        <BoothResults />
      </Suspense>
    </>
  )
}

async function BoothResults() {
  const [companies, categories] = await Promise.all([getCompanies(), getCompanyCategories()])

  return <BoothDirectory companies={companies} categories={categories} />
}
