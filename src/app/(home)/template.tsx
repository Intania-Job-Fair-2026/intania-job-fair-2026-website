'use client'

import { motion, useReducedMotion } from 'motion/react'
import { usePathname } from 'next/navigation'

export default function HomeTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      key={pathname}
      className="flex w-full flex-col gap-10"
      // Keep content visible throughout the entrance so the background never flashes empty.
      initial={reduceMotion ? false : { opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
