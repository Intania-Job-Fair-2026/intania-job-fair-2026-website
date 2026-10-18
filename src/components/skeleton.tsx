import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

/** Pulsing placeholder block; `tone` picks a fill that reads on the blue page or on a white card */
export const Skeleton = ({
  className,
  tone = 'page',
}: {
  className?: string
  tone?: 'page' | 'card'
}) => (
  <div
    aria-hidden
    className={cn(
      'motion-safe:animate-pulse',
      tone === 'page' ? 'rounded-lg bg-white/40' : 'rounded bg-blue-100',
      className,
    )}
  />
)

/** Wraps a route's loading UI so screen readers announce it once */
export const LoadingScreen = ({ children }: { children: ReactNode }) => (
  <div role="status" aria-live="polite" className="flex w-full flex-col gap-10">
    <span className="sr-only">กำลังโหลด…</span>
    {children}
  </div>
)
