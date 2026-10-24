'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

/** Reveal cards once as they enter view; transforms leave the grid's layout unchanged. */
export function ListItemReveal({ children, index }: { children: ReactNode; index: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="min-w-0"
      initial={reduceMotion ? false : { opacity: 0.8, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        delay: reduceMotion ? 0 : Math.min(index, 5) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
