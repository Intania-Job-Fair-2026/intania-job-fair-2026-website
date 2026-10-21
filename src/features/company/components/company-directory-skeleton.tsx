import { Skeleton } from '@/components/skeleton'
import { CompanyCardSkeleton } from './company-card-skeleton'

/** Matches the shared company and booth directory while its data loads. */
export const CompanyDirectorySkeleton = () => (
  <div className="flex w-full flex-col gap-10 pb-4">
    <div className="mx-auto flex w-full max-w-2xl items-center gap-2 px-6 py-4">
      <Skeleton className="h-12 min-w-0 flex-1 rounded-3xl" />
      <Skeleton className="size-12 shrink-0 bg-red-500/40" />
    </div>

    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full items-center justify-between px-6">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-10 w-[210px] shrink-0" />
      </div>
      <div className="grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }, (_, i) => (
          <CompanyCardSkeleton key={i} />
        ))}
      </div>
    </div>

    <div
      aria-hidden
      className="mx-auto flex w-full max-w-lg justify-center gap-1 px-2 min-[375px]:gap-2 min-[375px]:px-4"
    >
      <Skeleton className="size-10 shrink-0 rounded-full min-[375px]:size-12" />
      <div className="flex min-w-0 flex-1 justify-between">
        {Array.from({ length: 7 }, (_, i) => (
          <Skeleton
            key={i}
            className={`size-10 shrink-0 rounded-full min-[375px]:size-12 ${i === 3 || i === 4 ? 'hidden md:block' : ''}`}
          />
        ))}
      </div>
      <Skeleton className="size-10 shrink-0 rounded-full min-[375px]:size-12" />
    </div>
  </div>
)
