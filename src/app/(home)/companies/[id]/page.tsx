import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CompanyCard } from '@/features/company/components/company-card'
import { mockCompanies } from '@/features/company/mock'

// TODO: fetch the company from the API once available
const getCompany = (id: string) => mockCompanies.find((c) => c.id === id)

export const generateStaticParams = () => mockCompanies.map((c) => ({ id: c.id }))

export async function generateMetadata(props: PageProps<'/companies/[id]'>): Promise<Metadata> {
  const { id } = await props.params
  const company = getCompany(id)
  return { title: `${company?.name ?? 'บริษัท'} | Intania Job Fair 2026` }
}

export default async function CompanyDetailPage(props: PageProps<'/companies/[id]'>) {
  const { id } = await props.params
  const company = getCompany(id)
  if (!company) notFound()

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-[54px] px-6 pt-7 pb-4">
      <CompanyCard company={company} linked={false} />

      <section className="flex w-full flex-col gap-7 px-1.5 text-black">
        <h2 className="text-trim font-thai text-xl leading-[1.2] font-medium">เกี่ยวกับบริษัท</h2>
        <p className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-pre-line">
          {company.description}
        </p>
      </section>
    </div>
  )
}
