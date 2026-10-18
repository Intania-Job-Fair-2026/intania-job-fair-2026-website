'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

/** Round "back" button; goes to `fallbackHref` when the page was opened directly (no history) */
export const BackButton = ({ fallbackHref }: { fallbackHref: string }) => {
  const router = useRouter()

  return (
    <button
      type="button"
      aria-label="ย้อนกลับ"
      onClick={() => (window.history.length > 1 ? router.back() : router.push(fallbackHref))}
      className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.2px] border-red-500 bg-white transition-colors hover:bg-red-500/5"
    >
      <ArrowLeft aria-hidden size={24} strokeWidth={2} className="text-red-500" />
    </button>
  )
}
