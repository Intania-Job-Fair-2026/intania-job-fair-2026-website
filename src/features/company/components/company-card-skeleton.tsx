import { Skeleton } from '@/components/skeleton'

/** Mirrors CompanyCard: logo + name, tags, two info rows, divider and booth code */
export const CompanyCardSkeleton = () => (
  <div className="flex w-full drop-shadow-card">
    <div className="flex min-h-34 w-full items-start gap-4 bg-white p-4 shadow-card">
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex w-full items-center gap-2">
          <Skeleton tone="card" className="size-12 shrink-0 rounded-lg" />
          <Skeleton tone="card" className="h-5 w-2/3" />
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex gap-1">
            <Skeleton tone="card" className="h-8 w-20 rounded-3xl" />
            <Skeleton tone="card" className="h-8 w-28 rounded-3xl" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Skeleton tone="card" className="h-4 w-full" />
            <Skeleton tone="card" className="h-4 w-3/4" />
          </div>
        </div>
      </div>
      <div aria-hidden className="min-h-[136px] w-px shrink-0 self-stretch bg-blue-900/20" />
      <Skeleton tone="card" className="mt-1 h-8 w-10 shrink-0" />
    </div>
  </div>
)
