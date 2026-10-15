import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCompanies, getCompany } from '@/features/company/api/company-service'
import { CompanyCard } from '@/features/company/components/company-card'
import { CompanyContact } from '@/features/company/components/company-contact'

export const generateStaticParams = async () => (await getCompanies()).map((c) => ({ id: c.id }))

export async function generateMetadata(props: PageProps<'/companies/[id]'>): Promise<Metadata> {
  const { id } = await props.params
  const company = await getCompany(id)
  return { title: `${company?.name ?? 'บริษัท'} | Intania Job Fair 2026` }
}

export default async function CompanyDetailPage(props: PageProps<'/companies/[id]'>) {
  const { id } = await props.params
  const company = await getCompany(id)
  if (!company) notFound()

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-[54px] px-6 pt-7 pb-4">
      <CompanyCard company={company} linked={false} />

      <section className="flex w-full flex-col gap-7 px-1.5 text-black">
        <h2 className="text-trim font-thai text-xl leading-[1.2] font-medium">เกี่ยวกับบริษัท</h2>
        {/* Real descriptions run to several lines, so this uses a looser line height than the mock */}
        <p className="font-thai text-xl leading-[1.6] font-medium whitespace-pre-line">
          {company.description || 'ยังไม่มีข้อมูลเกี่ยวกับบริษัท'}
        </p>
      </section>

      <CompanyContact contact={company.contact} />
    </div>
  )
}
