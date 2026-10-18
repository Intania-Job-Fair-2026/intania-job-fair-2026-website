import { LoadingScreen, Skeleton } from '@/components/skeleton'

/** Loading UI for `/companies/[id]`: back button, logo + names, dates, about text and contacts */
export const CompanyDetailSkeleton = () => (
  // Same flat background as the loaded page, so the colour doesn't flip when it arrives
  <div data-page-bg="flat" className="mx-auto w-full max-w-3xl pb-4">
    <LoadingScreen>
      <div className="flex w-full flex-col gap-4">
        <div className="px-6">
          <div className="size-12 rounded-full border-[1.2px] border-red-500/40 bg-white" />
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center gap-4 px-6">
            <Skeleton tone="card" className="size-18 shrink-0 rounded-lg" />
            <div className="flex flex-1 flex-col gap-4">
              <Skeleton tone="card" className="h-6 w-4/5" />
              <Skeleton tone="card" className="h-5 w-3/5" />
            </div>
          </div>
          <Skeleton tone="card" className="h-6 w-64 rounded-3xl" />
        </div>
      </div>

      <div className="flex w-full items-center gap-6 px-6">
        <div className="flex h-22 w-36 shrink-0 flex-col overflow-clip rounded-lg bg-white">
          <div className="h-10 w-full bg-red-500/40" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Skeleton tone="card" className="h-4 w-32" />
          <Skeleton tone="card" className="h-4 w-28" />
          <Skeleton tone="card" className="h-4 w-24" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 px-6">
        <Skeleton tone="card" className="h-5 w-32" />
        <div className="flex flex-col gap-3">
          <Skeleton tone="card" className="h-4 w-full" />
          <Skeleton tone="card" className="h-4 w-full" />
          <Skeleton tone="card" className="h-4 w-full" />
          <Skeleton tone="card" className="h-4 w-2/3" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 px-6">
        <Skeleton tone="card" className="h-5 w-32" />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton tone="card" className="size-6 shrink-0 rounded-full" />
              <Skeleton tone="card" className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </LoadingScreen>
  </div>
)
