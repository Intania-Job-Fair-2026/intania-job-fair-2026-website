'use client'

import { Circle, CircleDot, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

type SortDialogProps = {
  open: boolean
  onClose: () => void
  options: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}

export const SortDialog = ({ open, onClose, options, value, onChange }: SortDialogProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby="sort-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto w-[calc(100%-48px)] max-w-[354px] overflow-clip rounded-2xl border-0 bg-white p-0 shadow-card backdrop:bg-black/20 motion-safe:transition-[opacity,scale] motion-safe:duration-200 motion-safe:ease-out motion-safe:backdrop:transition-opacity motion-safe:backdrop:duration-200 motion-safe:starting:open:scale-95 motion-safe:starting:open:opacity-0 motion-safe:starting:open:backdrop:opacity-0"
    >
      <div className="flex flex-col gap-8 pt-6 pb-8">
        <div className="flex w-full items-center justify-between px-6">
          <h2
            id="sort-dialog-title"
            className="text-trim font-thai-display text-[32px] leading-[1.2] font-bold whitespace-nowrap text-ink"
          >
            จัดเรียง
          </h2>
          <button type="button" onClick={onClose} aria-label="ปิด" className="cursor-pointer">
            <X
              aria-hidden
              size={32}
              strokeWidth={2}
              absoluteStrokeWidth
              className="block text-ink"
            />
          </button>
        </div>

        <fieldset className="flex w-full flex-col gap-6 px-6">
          <legend className="sr-only">จัดเรียงตาม</legend>
          {options.map((option) => {
            const selected = option.id === value
            return (
              <label
                key={option.id}
                className="flex w-full cursor-pointer items-center justify-between has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-blue-700"
              >
                <span className="text-trim font-thai text-xl leading-[1.2] font-medium whitespace-nowrap text-black">
                  {option.label}
                </span>
                <input
                  type="radio"
                  name="sort"
                  value={option.id}
                  checked={selected}
                  onChange={() => {
                    onChange(option.id)
                    onClose()
                  }}
                  className="sr-only"
                />
                {selected ? (
                  <CircleDot
                    aria-hidden
                    size={20}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className="block shrink-0 text-blue-700"
                  />
                ) : (
                  <Circle
                    aria-hidden
                    size={20}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className="block shrink-0 text-blue-500"
                  />
                )}
              </label>
            )
          })}
        </fieldset>
      </div>
    </dialog>
  )
}
