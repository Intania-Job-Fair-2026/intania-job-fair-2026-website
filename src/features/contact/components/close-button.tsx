'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function CloseButton() {
  const router = useRouter()

  // Go back to the page the user came from; the href is the fallback when opened directly
  // or when JS has not loaded yet
  const handleClick = (event: React.MouseEvent) => {
    if (window.history.length > 1) {
      event.preventDefault()
      router.back()
    }
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Close"
      className="flex size-[46px] items-center justify-center rounded-full border border-red-500 bg-white text-red-500"
    >
      <X aria-hidden size={24} />
    </Link>
  )
}
