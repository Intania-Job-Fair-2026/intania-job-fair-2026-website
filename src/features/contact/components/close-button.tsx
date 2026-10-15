'use client'

import { X } from 'lucide-react'
export function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      autoFocus
      onClick={onClose}
      aria-label="ปิด — Close"
      className="flex size-[46px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-red-500 bg-white text-red-500 outline-none"
    >
      <X aria-hidden size={24} />
    </button>
  )
}
