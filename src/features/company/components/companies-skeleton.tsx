import { LoadingScreen, Skeleton } from '@/components/skeleton'
import { CompanyCardSkeleton } from './company-card-skeleton'

/** Loading UI for `/companies`: search bar, count + sort, and a grid of company cards */
export const CompaniesSkeleton = () => (
  <LoadingScreen>
    <div className="flex w-full flex-col gap-10 pb-4">
      <div className="mx-auto flex w-full max-w-2xl items-center gap-2 px-6 py-4">
        <Skeleton className="h-12 flex-1 rounded-3xl" />
        <Skeleton className="size-12 shrink-0 bg-red-500/40" />
      </div>

      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full items-center justify-between px-6">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-[210px]" />
        </div>
        <div className="grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <CompanyCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  </LoadingScreen>
)
