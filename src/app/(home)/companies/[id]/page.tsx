import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { getCompanies, getCompany } from '@/features/company/api/company-service'
import { CompanyContact } from '@/features/company/components/company-contact'
import { CompanyLogo } from '@/features/company/components/company-logo'
import { EventDateBadge } from '@/features/company/components/event-date-badge'
import { WorkTypeChecklist } from '@/features/company/components/work-type-checklist'

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

  const [categoryEn, categoryTh] = company.categoryFull.split(' - ')
  const description = company.description || 'ยังไม่มีข้อมูลเกี่ยวกับบริษัท'
  const descriptionFont = /[\u0E00-\u0E7F]/.test(description) ? 'font-thai' : 'font-heading'

  return (
    <div data-page-bg="company" className="mx-auto flex w-full max-w-3xl flex-col px-6">
      <BackButton fallbackHref="/companies" />

      <div className="flex w-full flex-col gap-8">
        <header className="flex w-full flex-col items-center gap-6 py-6">
          <div className="flex w-full items-center gap-4">
            <div className="shrink-0">
              <CompanyLogo img={company.logo} size={72} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
              <h1 className="text-trim font-thai text-2xl leading-[1.2] font-medium text-ink">
                {company.nameTh || company.name}
              </h1>
              {company.nameEn && (
                <p className="text-trim font-display text-lg leading-[1.4] font-medium tracking-[0.36px] text-ink-secondary">
                  {company.nameEn}
                </p>
              )}
            </div>
          </div>

          {categoryEn ? (
            <p className="flex min-h-9 max-w-full items-center self-start rounded-3xl bg-blue-100 px-3 py-2">
              <span className="text-trim min-w-0 text-sm leading-[1.4] wrap-anywhere tracking-[0.28px] text-blue-900">
                <span className="font-display">{categoryEn}</span>
                {categoryTh && <span className="font-thai"> - {categoryTh}</span>}
              </span>
            </p>
          ) : (
            <div aria-hidden className="min-h-9" />
          )}

          <div className="flex w-full flex-col items-start gap-6 min-[380px]:flex-row min-[380px]:items-center">
            <EventDateBadge days={company.eventDays} />
            <WorkTypeChecklist workTypes={company.workTypes} />
          </div>
        </header>

        <section className="flex w-full flex-col gap-6">
          <h2 className="text-trim font-thai text-xl leading-[1.2] font-medium text-ink">
            เกี่ยวกับบริษัท
          </h2>
          <p
            className={`${descriptionFont} text-trim text-base leading-[1.6] whitespace-pre-line wrap-anywhere text-ink-secondary`}
          >
            {description}
          </p>
        </section>

        <CompanyContact contact={company.contact} />
      </div>
    </div>
  )
}
