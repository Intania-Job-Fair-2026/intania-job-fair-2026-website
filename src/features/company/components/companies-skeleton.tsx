import { LoadingScreen } from '@/components/skeleton'
import { CompanyDirectorySkeleton } from './company-directory-skeleton'

/** Loading UI for `/companies`: search bar, count + sort, and a grid of company cards */
export const CompaniesSkeleton = () => (
  <LoadingScreen>
    <CompanyDirectorySkeleton />
  </LoadingScreen>
)
