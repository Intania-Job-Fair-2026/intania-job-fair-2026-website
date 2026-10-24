import { CompanyDirectorySkeleton } from '@/features/company/components/company-directory-skeleton'
import { LoadingScreen } from '@/components/skeleton'
import { BoothMap } from './booth-map'
import { BoothMapHeading } from './booth-map-heading'

/** Render the real, static map so its size and controls don't change on data arrival. */
export const BoothsSkeleton = () => (
  <>
    <BoothMap header={<BoothMapHeading />} />
    <LoadingScreen>
      <CompanyDirectorySkeleton />
    </LoadingScreen>
  </>
)
