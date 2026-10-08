import { Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import { BoothCode, InfoRow, ListingCard, TagList } from '@/components/listing-card'
import type { Job } from '../types'

// e.g. "1 ม.ค. 69"
const thaiShortDate = new Intl.DateTimeFormat('th-TH', {
  day: 'numeric',
  month: 'short',
  year: '2-digit',
  timeZone: 'Asia/Bangkok',
})

const formatDateRange = (start: string, end: string) =>
  `${thaiShortDate.format(new Date(start))} - ${thaiShortDate.format(new Date(end))}`

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <ListingCard>
      <div className="flex w-full items-start gap-4">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex w-full items-start gap-2">
            <div className="relative size-12 shrink-0">
              <Image src={job.logo} alt="" fill sizes="48px" className="object-cover" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 self-stretch">
              <h3 className="text-trim -my-[0.2em] w-full truncate py-[0.2em] font-display text-xl leading-[1.2] font-bold tracking-[1.6px] text-ink">
                {job.title}
              </h3>
              <p className="text-trim w-full font-display text-base leading-[1.4] text-ink-muted">
                {job.company}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3">
            <TagList tags={job.tags} />
            <div className="flex w-full flex-col gap-2">
              <InfoRow icon={Calendar}>{formatDateRange(job.startDate, job.endDate)}</InfoRow>
              <InfoRow icon={MapPin}>{job.location}</InfoRow>
            </div>
          </div>
        </div>

        <BoothCode booth={job.booth} />
      </div>
    </ListingCard>
  )
}
