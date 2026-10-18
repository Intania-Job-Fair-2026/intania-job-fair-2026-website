import { LoadingScreen, Skeleton } from '@/components/skeleton'
import { CompanyCardSkeleton } from '@/features/company/components/company-card-skeleton'

const sectionHeader = (
  <div className="flex w-full items-center justify-between px-6">
    <Skeleton className="h-6 w-36" />
    <Skeleton className="h-5 w-24" />
  </div>
)

/** Loading UI for `/`: event ticket, booth map and featured companies */
export const HomeSkeleton = () => (
  <LoadingScreen>
    {/* Event ticket: red title strip, details panel, then the buttons panel */}
    <div className="mx-auto flex w-full max-w-[480px] flex-col gap-1 px-6">
      <div className="flex w-full flex-col items-center gap-6 overflow-clip rounded-2xl bg-white pb-8">
        <div className="h-12 w-full bg-red-700" />
        <Skeleton tone="card" className="h-12 w-4/5" />
        <Skeleton tone="card" className="h-24 w-3/5" />
        <div className="flex w-full flex-col gap-4 px-6">
          <div className="flex w-full justify-between">
            <Skeleton tone="card" className="h-14 w-20" />
            <Skeleton tone="card" className="h-14 w-20" />
          </div>
          <Skeleton tone="card" className="h-14 w-48" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 rounded-2xl bg-white px-6 py-8">
        <Skeleton tone="card" className="h-14 w-full rounded-lg bg-red-500/30" />
        <Skeleton tone="card" className="h-12 w-full rounded-lg" />
      </div>
    </div>

    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
      {sectionHeader}
      <div className="w-full px-6">
        <Skeleton className="aspect-square w-full rounded-none" />
      </div>
      <Skeleton className="h-12 w-52 bg-red-500/40" />
    </section>

    <section className="flex w-full flex-col items-center gap-6">
      {sectionHeader}
      <div className="grid w-full grid-cols-1 gap-4 px-6 md:grid-cols-2">
        {Array.from({ length: 4 }, (_, i) => (
          <CompanyCardSkeleton key={i} />
        ))}
      </div>
    </section>
  </LoadingScreen>
)
