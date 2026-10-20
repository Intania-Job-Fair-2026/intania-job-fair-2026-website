import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { getCompanies, getCompany } from '@/features/company/api/company-service'
import { CompanyContact } from '@/features/company/components/company-contact'
import { CompanyLogo } from '@/features/company/components/company-logo'
import { EventDateBadge } from '@/features/company/components/event-date-badge'
import { WorkTypeChecklist } from '@/features/company/components/work-type-checklist'
import { getCompanyLogoUrlByDriveUrl } from '@/lib/image'

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

  return (
    // data-page-bg tells the layout to swap its gradient for this page's flat background
    <div data-page-bg="flat" className="mx-auto flex w-full max-w-3xl flex-col gap-10 pb-4">
      <div className="flex w-full flex-col gap-4">
        <div className="px-6">
          <BackButton fallbackHref="/companies" />
        </div>

        <header className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center gap-4 px-6">
            <div className="shrink-0">
              <CompanyLogo img={company.logo} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
              <h1 className="text-trim font-thai text-2xl leading-[1.2] font-medium text-ink">
                {company.nameTh || company.name}
              </h1>
              {company.nameEn && (
                <p className="text-trim font-display text-lg leading-[1.4] tracking-[0.36px] text-ink-secondary">
                  {company.nameEn}
                </p>
              )}
            </div>
          </div>

          {categoryEn && (
            <p className="mx-6 flex h-6 max-w-[calc(100%-48px)] items-center rounded-3xl bg-blue-100 px-3">
              <span className="text-trim truncate text-sm leading-[1.4] tracking-[0.28px] text-blue-900">
                <span className="font-display">{categoryEn}</span>
                {categoryTh && <span className="font-thai"> - {categoryTh}</span>}
              </span>
            </p>
          )}
        </header>
      </div>

      <div className="flex w-full items-center gap-6 px-6">
        <EventDateBadge days={company.eventDays} />
        <WorkTypeChecklist workTypes={company.workTypes} />
      </div>

      <section className="flex w-full flex-col gap-6 px-6">
        <h2 className="text-trim font-thai text-xl leading-[1.2] font-medium text-ink">
          เกี่ยวกับบริษัท
        </h2>
        {/* Helvetica World for English copy; Thai text falls through to IBM Plex Sans Thai */}
        <p className="font-[family-name:var(--font-helvetica-world),var(--font-ibm-plex-thai)] text-base leading-[1.6] whitespace-pre-line text-ink-secondary">
          {company.description || 'ยังไม่มีข้อมูลเกี่ยวกับบริษัท'}
        </p>
      </section>

      <CompanyContact contact={company.contact} />
    </div>
  )
}
