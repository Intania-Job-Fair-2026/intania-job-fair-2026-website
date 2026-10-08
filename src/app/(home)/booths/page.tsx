import type { Metadata } from 'next'
import { BoothDirectory } from '@/features/booth/components/booth-directory'
import { BoothMap } from '@/features/booth/components/booth-map'
import { mockCompanies } from '@/features/company/mock'

export const metadata: Metadata = {
  title: 'บูธ | Intania Job Fair 2026',
}

export default async function HomeBoothsPage(props: PageProps<'/booths'>) {
  const { q } = await props.searchParams

  return (
    <>
      <BoothMap
        header={
          <div className="flex w-full items-center justify-center px-6 pt-4">
            <h1 className="text-trim font-thai text-2xl leading-[1.2] font-medium whitespace-nowrap text-ink">
              แผนผังบูธบริษัท
            </h1>
          </div>
        }
      />
      <BoothDirectory
        companies={mockCompanies}
        initialQuery={typeof q === 'string' ? q : undefined}
      />
    </>
  )
}
