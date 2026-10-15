'use client'

import { ArrowUpRight } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'
import { ContactDialog } from './contact-dialog'

export function ContactButton() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="absolute top-8 left-[26px] flex w-[159px] cursor-pointer items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
      >
        <span className="text-trim bg-linear-to-b from-red-500 to-red-700 bg-clip-text font-display text-xl leading-[1.2] font-bold tracking-[1.6px] whitespace-nowrap text-transparent">
          Contact Us
        </span>
        <span className="relative size-6 shrink-0 bg-linear-to-b from-red-500 to-red-700">
          <ArrowUpRight aria-hidden size={24} className="text-white" />
        </span>
      </button>

      <AnimatePresence
        onExitComplete={() => requestAnimationFrame(() => triggerRef.current?.focus())}
      >
        {open && <ContactDialog onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
