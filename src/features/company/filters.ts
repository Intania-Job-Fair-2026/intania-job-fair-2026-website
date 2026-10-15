import type { Company, EventDay, WorkType } from './types'

export type CompanyFilters = {
  days: EventDay[]
  workTypes: WorkType[]
  /** `null` means every category */
  category: string | null
}

export const EMPTY_FILTERS: CompanyFilters = { days: [], workTypes: [], category: null }

export const DAY_OPTIONS: { id: EventDay; label: string }[] = [
  { id: '28', label: 'พ 28 ต.ค. 69' },
  { id: '29', label: 'พฤ 29 ต.ค. 69' },
]

export const WORK_TYPE_OPTIONS: { id: WorkType; label: string }[] = [
  { id: 'intern12', label: 'ฝึกงานปี 1-2' },
  { id: 'intern3', label: 'ฝึกงานปี 3' },
  { id: 'fulltime', label: 'ฟูลไทม์' },
]

export const countActiveFilters = (f: CompanyFilters) =>
  f.days.length + f.workTypes.length + (f.category ? 1 : 0)

export const matchesFilters = (c: Company, f: CompanyFilters) =>
  (f.days.length === 0 || f.days.some((d) => c.eventDays.includes(d))) &&
  (f.workTypes.length === 0 || f.workTypes.some((t) => c.workTypes.includes(t))) &&
  (f.category === null || c.category === f.category)
