import { LoadingScreen } from '@/components/skeleton'
import { CompanyCardSkeleton } from '@/features/company/components/company-card-skeleton'
import { FeaturedSection } from './featured-section'

export const FeaturedCompaniesSkeleton = () => (
  <LoadingScreen>
    <FeaturedSection
      title="บริษัทที่น่าสนใจ"
      href="/companies"
      linkLabel="บริษัททั้งหมด"
      buttonLabel="ดูบริษัททั้งหมด"
    >
      {Array.from({ length: 4 }, (_, i) => (
        <CompanyCardSkeleton key={i} />
      ))}
    </FeaturedSection>
  </LoadingScreen>
)
