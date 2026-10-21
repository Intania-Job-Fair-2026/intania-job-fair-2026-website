import { LoadingScreen, Skeleton } from '@/components/skeleton'
import { CompanyDirectorySkeleton } from '@/features/company/components/company-directory-skeleton'

const GRID = 6

/** Loading UI for `/booths`: map, carousel controls, download and the shared directory. */
export const BoothsSkeleton = () => (
  <LoadingScreen>
    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
      <div className="flex w-full justify-center px-6 pt-4">
        <Skeleton className="h-7 w-44" />
      </div>

      <div className="relative w-full px-6">
        <div className="grid aspect-square w-full grid-cols-6 gap-2 bg-white/20 p-4">
          {Array.from({ length: GRID * GRID }, (_, i) => (
            <div
              key={i}
              aria-hidden
              // Delay by diagonal so the pulse sweeps across the hall
              style={{ animationDelay: `${(Math.floor(i / GRID) + (i % GRID)) * 90}ms` }}
              className="rounded bg-white/50 motion-safe:animate-pulse"
            />
          ))}
        </div>
        <Skeleton className="absolute top-1/2 left-9 size-12 -translate-y-1/2 rounded-full bg-red-500/40 sm:size-16" />
        <Skeleton className="absolute top-1/2 right-9 size-12 -translate-y-1/2 rounded-full bg-red-500/40 sm:size-16" />
      </div>
      <Skeleton className="h-10 w-60 bg-red-500/40" />
    </section>

    <CompanyDirectorySkeleton />
  </LoadingScreen>
)
