import { Suspense } from 'react'
import { SectionHeader } from '@/components/section-header'
import { BoothMap } from '@/features/booth/components/booth-map'
import { CompanyCard } from '@/features/company/components/company-card'
import { getCompanies } from '@/features/company/api/company-service'
import { EventTicket } from '@/features/home/components/event-ticket'
import { FeaturedSection } from '@/features/home/components/featured-section'
import { FeaturedCompaniesSkeleton } from '@/features/home/components/home-skeleton'

const FEATURED_COUNT = 4

export default function HomePage() {
  return (
    <>
      <EventTicket />
      <BoothMap
        header={
          <SectionHeader title="แผนผังบูธบริษัท" link={{ href: '/booths', label: 'บูธทั้งหมด' }} />
        }
      />

      <Suspense fallback={<FeaturedCompaniesSkeleton />}>
        <FeaturedCompanies />
      </Suspense>
    </>
  )
}

async function FeaturedCompanies() {
  const featuredCompanies = (await getCompanies()).slice(0, FEATURED_COUNT)

  return (
    <FeaturedSection
      title="บริษัทที่น่าสนใจ"
      href="/companies"
      linkLabel="บริษัททั้งหมด"
      buttonLabel="ดูบริษัททั้งหมด"
    >
      {featuredCompanies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </FeaturedSection>
  )
}
