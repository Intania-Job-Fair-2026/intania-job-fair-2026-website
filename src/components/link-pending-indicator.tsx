'use client'

import { useLinkStatus } from 'next/link'

/** Show feedback on slower navigation without replacing the current page. */
export function LinkPendingIndicator() {
  const { pending } = useLinkStatus()
  if (!pending) return null

  return (
    <span
      role="status"
      className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-red-500 motion-safe:animate-[fade-in_150ms_ease-out_150ms_both]"
    >
      <span className="sr-only">กำลังโหลด…</span>
    </span>
  )
}
