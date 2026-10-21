'use client'

import { X } from 'lucide-react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/button-link'
import { Dropdown } from '@/components/dropdown'
import { cn } from '@/utils/cn'
import { type CompanyFilters, DAY_OPTIONS, EMPTY_FILTERS, WORK_TYPE_OPTIONS } from '../filters'

const ALL_CATEGORIES = ''

type CompanyFilterSheetProps = {
  /** Filters currently applied; the sheet edits a copy until saved */
  initial: CompanyFilters
  categories: string[]
  onApply: (filters: CompanyFilters) => void
  onClose: () => void
}

const toggle = <T,>(list: T[], item: T) =>
  list.includes(item) ? list.filter((i) => i !== item) : [...list, item]

/**
 * Bottom sheet (centered dialog on larger screens) for filtering companies.
 * Mount it only while open; it opens itself on mount.
 */
export const CompanyFilterSheet = ({
  initial,
  categories,
  onApply,
  onClose,
}: CompanyFilterSheetProps) => {
  const ref = useRef<HTMLDialogElement>(null)
  const [draft, setDraft] = useState(initial)

  useEffect(() => {
    ref.current?.showModal()
  }, [])

  return (
    <dialog
      ref={ref}
      aria-labelledby="filter-sheet-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="mx-auto mt-auto mb-0 max-h-[calc(100dvh-24px)] w-full max-w-none flex-col overflow-clip rounded-t-3xl border-0 bg-white p-0 backdrop:bg-black/20 open:flex md:m-auto md:max-h-[calc(100dvh-48px)] md:max-w-120 md:rounded-3xl motion-safe:transition-[opacity,translate] motion-safe:duration-300 motion-safe:ease-out motion-safe:backdrop:transition-opacity motion-safe:backdrop:duration-300 motion-safe:starting:open:translate-y-8 motion-safe:starting:open:opacity-0 motion-safe:starting:open:backdrop:opacity-0"
    >
      <div className="flex w-full shrink-0 items-center justify-between px-6 pt-6 pb-3">
        <button type="button" onClick={onClose} aria-label="ปิด" className="cursor-pointer">
          <X aria-hidden size={32} strokeWidth={2} absoluteStrokeWidth className="block text-ink" />
        </button>
        <h2
          id="filter-sheet-title"
          className="text-trim font-display text-[32px] leading-[1.2] font-bold whitespace-nowrap text-ink"
        >
          Filter
        </h2>
        <button
          type="button"
          onClick={() => setDraft(EMPTY_FILTERS)}
          className="text-trim cursor-pointer font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-red-500"
        >
          รีเซต
        </button>
      </div>

      <div className="flex min-h-0 flex-auto flex-col gap-8 overflow-y-auto py-6">
        <FilterGroup label="วันที่เข้าร่วมงาน">
          <div className="grid w-full grid-cols-2 gap-4">
            {DAY_OPTIONS.map((day) => (
              <Chip
                key={day.id}
                selected={draft.days.includes(day.id)}
                onClick={() => setDraft((d) => ({ ...d, days: toggle(d.days, day.id) }))}
              >
                {day.label}
              </Chip>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup label="รูปแบบการทำงาน">
          <div className="flex w-full flex-wrap items-center gap-2">
            {WORK_TYPE_OPTIONS.map((type) => (
              <Chip
                key={type.id}
                selected={draft.workTypes.includes(type.id)}
                onClick={() => setDraft((d) => ({ ...d, workTypes: toggle(d.workTypes, type.id) }))}
                // Phones keep the design's content-width chips; wider sheets stretch them to fill the row
                className="md:grow"
              >
                {type.label}
              </Chip>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup label="สายงานของตำแหน่ง">
          <Dropdown
            label="สายงานของตำแหน่ง"
            options={[
              { id: ALL_CATEGORIES, label: 'ทั้งหมด' },
              ...categories.map((c) => ({ id: c, label: c })),
            ]}
            value={draft.category ?? ALL_CATEGORIES}
            onChange={(id) => setDraft((d) => ({ ...d, category: id || null }))}
          />
        </FilterGroup>
      </div>

      <div className="w-full shrink-0 bg-white px-6 py-10">
        <Button
          variant="primary-lg"
          className="w-full"
          onClick={() => {
            onApply(draft)
            onClose()
          }}
        >
          บันทึกการตั้งค่า
        </Button>
      </div>
    </dialog>
  )
}

const FilterGroup = ({ label, children }: { label: string; children: ReactNode }) => (
  <fieldset className="flex w-full flex-col gap-4 px-6">
    <legend className="text-trim mb-4 font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-ink">
      {label}
    </legend>
    {children}
  </fieldset>
)

const Chip = ({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean
  onClick: () => void
  children: ReactNode
  className?: string
}) => (
  <button
    type="button"
    aria-pressed={selected}
    onClick={onClick}
    className={cn(
      'flex h-10 cursor-pointer items-center justify-center overflow-clip rounded-full border border-red-500 px-4 py-2 transition-colors',
      selected ? 'bg-red-500 text-white' : 'bg-white text-red-500 hover:bg-red-500/5',
      className,
    )}
  >
    <span className="text-trim font-thai text-lg leading-[1.4] whitespace-nowrap">{children}</span>
  </button>
)
