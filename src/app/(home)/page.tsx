import { SectionHeader } from '@/components/section-header'
import { BoothMap } from '@/features/booth/components/booth-map'
import { CompanyCard } from '@/features/company/components/company-card'
import { mockCompanies } from '@/features/company/mock'
import { EventTicket } from '@/features/home/components/event-ticket'
import { FeaturedSection } from '@/features/home/components/featured-section'
import { HomeSearch } from '@/features/home/components/home-search'
import { JobCard } from '@/features/job/components/job-card'
import { mockJobs } from '@/features/job/mock'

const FEATURED_COUNT = 4

// TODO: replace mock slices with curated "featured" data from the API
const featuredCompanies = mockCompanies.slice(0, FEATURED_COUNT)
const featuredJobs = mockJobs.slice(0, FEATURED_COUNT)

export default function HomePage() {
  return (
    <>
      <EventTicket />
      <HomeSearch />
      <BoothMap
        header={
          <SectionHeader title="แผนผังบูธบริษัท" link={{ href: '/booths', label: 'บูธทั้งหมด' }} />
        }
      />
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
      <FeaturedSection
        title="ตำแหน่งงานที่น่าสนใจ"
        href="/jobs"
        linkLabel="ตำแหน่งงานทั้งหมด"
        buttonLabel="ดูตำแหน่งงานทั้งหมด"
      >
        {featuredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </FeaturedSection>
    </>
  )
}
