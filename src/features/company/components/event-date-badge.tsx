import { cn } from '@/utils/cn'
import type { EventDay } from '../types'

/** Calendar-page badge of the days a company attends: "OCT" strip over "28", "29" or "28 29" */
export const EventDateBadge = ({ days }: { days: EventDay[] }) => {
  if (days.length === 0) return null

  return (
    <div
      className={cn(
        'flex h-22 shrink-0 flex-col items-center overflow-clip rounded-lg border border-ink/10 bg-white pb-2',
        days.length > 1 ? 'w-36' : 'w-18',
      )}
    >
      <div className="flex h-10 w-full items-center justify-center bg-red-500">
        <span className="text-trim font-display text-sm leading-[1.4] tracking-[0.28px] text-white">
          OCT
        </span>
      </div>
      <p className="text-trim flex w-full flex-1 items-center justify-center font-heading text-[40px] leading-[1.2] font-bold tracking-[-0.8px] whitespace-nowrap text-red-500">
        {days.join(' ')}
      </p>
    </div>
  )
}
