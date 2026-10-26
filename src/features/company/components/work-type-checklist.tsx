import Image from 'next/image'
import type { WorkType } from '../types'

const ITEMS: { type: WorkType; label: string }[] = [
  { type: 'intern12', label: 'ฝึกงานปี 1-2' },
  { type: 'intern3', label: 'ฝึกงานปี 3' },
  { type: 'fulltime', label: 'งานประจำ' },
]

/** ✓ / ✕ list of what the company hires, e.g. "รับฝึกงานปี 3", "ไม่รับฝึกงานปี 1-2" */
export const WorkTypeChecklist = ({ workTypes }: { workTypes: WorkType[] }) => (
  <ul className="flex min-w-0 flex-1 flex-col gap-3">
    {ITEMS.map(({ type, label }) => {
      const accepts = workTypes.includes(type)
      return (
        <li key={type} className="flex items-center gap-2">
          <Image
            aria-hidden
            src={`/images/company/${accepts ? 'accepts' : 'unavailable'}.svg`}
            alt=""
            width={16}
            height={16}
            className="shrink-0"
          />
          <span className="text-trim font-thai text-base leading-[1.4] whitespace-nowrap text-ink">
            {accepts ? 'รับ' : 'ไม่รับ'}
            {label}
          </span>
        </li>
      )
    })}
  </ul>
)
