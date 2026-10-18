'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type SortDropdownProps = {
  options: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}

/** "เรียงตาม …" select; the option list floats over the content below */
export const SortDropdown = ({ options, value, onChange }: SortDropdownProps) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const selected = options.find((o) => o.id === value) ?? options[0]

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const Chevron = open ? ChevronUp : ChevronDown

  return (
    <div ref={rootRef} className="relative w-[210px] shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className={`flex h-10 w-full cursor-pointer items-center gap-2 rounded-lg border bg-white p-2 text-ink ${
          open ? 'border-red-500' : 'border-line'
        }`}
      >
        <SortLabel label={selected.label} />
        <Chevron aria-hidden size={20} strokeWidth={2} className="shrink-0 text-red-700" />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="เรียงตาม"
          className="absolute inset-x-0 top-full z-20 mt-2 flex flex-col overflow-clip rounded-lg border border-line bg-white"
        >
          {options.map((option) => {
            const isSelected = option.id === selected.id
            return (
              <li key={option.id} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.id)
                    setOpen(false)
                  }}
                  className={`flex h-10 w-full cursor-pointer items-center p-2 transition-colors ${
                    isSelected ? 'bg-red-500 text-white' : 'bg-white text-ink hover:bg-blue-100'
                  }`}
                >
                  <SortLabel label={option.label} />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

const SortLabel = ({ label }: { label: string }) => (
  <span className="text-trim flex min-w-0 flex-1 items-center gap-1 text-left font-thai text-base leading-[1.4] whitespace-nowrap">
    <span>เรียงตาม</span>
    <span>{label}</span>
  </span>
)
