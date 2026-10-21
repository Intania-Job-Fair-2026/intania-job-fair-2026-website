import { BackButton } from '@/components/back-button'
import { LoadingScreen, Skeleton } from '@/components/skeleton'

/** Loading UI for `/companies/[id]`: back button, logo + names, dates, about text and contacts */
export const CompanyDetailSkeleton = () => (
  // Same flat background as the loaded page, so the colour doesn't flip when it arrives
  <div data-page-bg="flat" className="mx-auto w-full max-w-3xl pb-4">
    <LoadingScreen>
      <div className="flex w-full flex-col gap-4">
        <div className="px-6">
          <BackButton fallbackHref="/companies" />
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center gap-4 px-6">
            <Skeleton tone="card" className="size-[82px] shrink-0 rounded-lg" />
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
              <Skeleton tone="card" className="h-6 w-4/5" />
              <Skeleton tone="card" className="h-5 w-3/5" />
            </div>
          </div>
          <Skeleton
            tone="card"
            className="mx-6 h-9 w-64 max-w-[calc(100%-48px)] self-start rounded-3xl"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-6 px-6">
        <div className="flex h-22 w-36 shrink-0 flex-col items-center gap-2 overflow-clip rounded-lg bg-white pb-2">
          <Skeleton className="h-10 w-full shrink-0 rounded-none bg-red-500/40" />
          <Skeleton tone="card" className="h-8 w-24" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton tone="card" className="size-4 shrink-0 rounded-full" />
              <Skeleton tone="card" className="h-4 w-28 max-w-full min-w-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 px-6">
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
          <div className="flex items-center gap-4">
            <Skeleton tone="card" className="size-5 shrink-0 rounded-full" />
            <Skeleton tone="card" className="h-4 w-1/2" />
          </div>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 2 }, (_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton tone="card" className="size-5 shrink-0" />
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <Skeleton tone="card" className={i === 0 ? 'h-4 w-1/3' : 'h-4 w-2/3'} />
                  <Skeleton tone="card" className="size-4 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LoadingScreen>
  </div>
)
