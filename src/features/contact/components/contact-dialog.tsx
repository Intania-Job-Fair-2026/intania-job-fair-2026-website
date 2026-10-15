'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useId, useRef } from 'react'
import { CloseButton } from './close-button'
import { ContactInfo } from './contact-info'

export function ContactDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return

    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <motion.dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClose={() => {
        if (!ref.current?.open) onClose()
      }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 32, scale: reduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
      transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
      className="m-0 h-dvh max-h-dvh w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-red-700 p-0 text-white shadow-xl backdrop:bg-black/40 min-[800px]:m-auto min-[800px]:h-auto min-[800px]:max-h-[calc(100dvh-32px)] min-[800px]:w-[calc(100%-32px)] min-[800px]:max-w-xl min-[800px]:rounded-3xl"
    >
      <div className="flex flex-col gap-6 pb-8">
        <header className="flex items-center justify-between px-6 pt-6">
          <Image
            src="/images/home/job-fair-logo.png"
            alt="Intania Job Fair 2026"
            width={64}
            height={64}
            className="size-16 object-contain"
          />
          <h2 id={titleId} className="sr-only">
            ติดต่อเรา — Contact Us
          </h2>
          <CloseButton onClose={onClose} />
        </header>

        <Image
          src="/images/contact/contact-plane.svg"
          alt=""
          aria-hidden="true"
          width={402}
          height={198}
          className="pointer-events-none -mt-6 h-auto max-h-48 w-full object-contain object-left"
        />

        <ContactInfo />
      </div>
    </motion.dialog>
  )
}
