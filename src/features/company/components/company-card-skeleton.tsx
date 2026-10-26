import { ListingCard } from '@/components/listing-card'
import { Skeleton } from '@/components/skeleton'
import { CompanyCardContent } from './company-card-content'

/** Uses the same padding, header, gaps, and info-row sizing as a loaded card. */
export const CompanyCardSkeleton = () => (
  <ListingCard className="shadow-card">
    <CompanyCardContent
      header={
        <>
          <Skeleton tone="card" className="size-12 shrink-0 rounded-lg" />
          <Skeleton tone="card" className="h-6 w-2/3" />
        </>
      }
      tags={
        <div className="flex flex-wrap gap-1">
          <Skeleton tone="card" className="h-8 w-20 rounded-3xl" />
          <Skeleton tone="card" className="h-8 w-28 rounded-3xl" />
        </div>
      }
      info={Array.from({ length: 2 }, (_, i) => (
        <div key={i} className="flex min-h-7 items-center gap-1 border-b border-card-line/20 pb-1">
          <Skeleton tone="card" className="size-4 shrink-0" />
          <Skeleton tone="card" className="h-[1.4rem] flex-1" />
        </div>
      ))}
      booths={
        <>
          <div
            aria-hidden
            className="min-h-[136px] w-[3px] shrink-0 self-stretch bg-card-line/20"
          />
          <div className="min-w-16 p-1">
            <Skeleton tone="card" className="h-8 w-10" />
          </div>
        </>
      }
    />
  </ListingCard>
)
