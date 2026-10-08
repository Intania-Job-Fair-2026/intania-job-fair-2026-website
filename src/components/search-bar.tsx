'use client'

import { ListFilter, Search } from 'lucide-react'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  onFilterClick?: () => void
  placeholder?: string
}

export const SearchBar = ({
  value,
  onChange,
  onFilterClick,
  placeholder = 'ค้นหา บูธ บริษัท ตำแหน่ง หรือที่ตั้ง',
}: SearchBarProps) => {
  return (
    <div className="mx-auto flex w-full max-w-2xl items-center justify-center gap-2 px-6 py-4">
      <label className="flex h-12 min-w-0 flex-1 items-center gap-2 overflow-clip rounded-3xl bg-white px-4 py-2">
        <Search aria-hidden size={20} className="shrink-0 text-blue-700" />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="min-w-0 flex-1 bg-transparent font-thai text-sm leading-[1.4] tracking-[0.28px] text-ink outline-none placeholder:text-blue-700"
        />
      </label>
      <button
        type="button"
        onClick={onFilterClick}
        aria-label="ตัวกรอง"
        className="flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-lg bg-red-500 p-2 transition-colors hover:bg-red-700"
      >
        <ListFilter aria-hidden size={24} className="text-white" />
      </button>
    </div>
  )
}
