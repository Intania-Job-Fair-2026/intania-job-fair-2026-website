import { LoadingScreen, Skeleton } from '@/components/skeleton'

const GRID = 6

/** Loading UI for `/booths`: a floor plan whose booths light up in a wave, then booth rows */
export const BoothsSkeleton = () => (
  <LoadingScreen>
    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
      <div className="flex w-full justify-center px-6 pt-4">
        <Skeleton className="h-7 w-44" />
      </div>

      <div className="w-full px-6">
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
      </div>
    </section>

    <div className="flex w-full flex-col gap-4 px-6 pb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex w-full items-center gap-4 bg-white p-4 shadow-card">
          <Skeleton className="h-12 w-14 shrink-0 bg-red-500/30" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton tone="card" className="h-5 w-2/3" />
            <Skeleton tone="card" className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  </LoadingScreen>
)
