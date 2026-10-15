'use client'

import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/utils/cn'

type DropdownProps = {
  label: string
  options: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}

/** Select-style dropdown whose option list opens inline, pushing the content below down */
export const Dropdown = ({ label, options, value, onChange }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const listId = useId()
  const selected = options.find((o) => o.id === value) ?? options[0]

  return (
    <div className="flex w-full flex-col gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${selected?.label}`}
        className={cn(
          'flex h-12 w-full cursor-pointer items-center justify-between gap-2 overflow-clip rounded-lg border bg-white px-4 py-2',
          open ? 'border-red-500' : 'border-line',
        )}
      >
        <span className="min-w-0 flex-1 truncate text-left font-thai text-base leading-[1.4] text-ink">
          {selected?.label}
        </span>
        {open ? (
          <ChevronUp aria-hidden size={24} className="block shrink-0 text-red-700" />
        ) : (
          <ChevronDown aria-hidden size={24} className="block shrink-0 text-red-700" />
        )}
      </button>

      {open && (
        <ul
          id={listId}
          aria-label={label}
          className="flex w-full flex-col overflow-clip rounded-lg border border-line motion-safe:animate-fade-in"
        >
          {options.map((option) => {
            const isSelected = option.id === selected?.id
            return (
              <li key={option.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    onChange(option.id)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex min-h-12 w-full cursor-pointer items-center justify-between gap-2 px-4 py-2 text-left',
                    isSelected ? 'bg-red-500 text-white' : 'bg-white text-ink hover:bg-blue-100/50',
                  )}
                >
                  <span className="min-w-0 flex-1 font-thai text-base leading-[1.4]">
                    {option.label}
                  </span>
                  {isSelected && (
                    <Check aria-hidden size={24} className="block shrink-0 text-white" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
