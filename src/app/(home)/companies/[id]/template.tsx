'use client'

import { useLayoutEffect, type ReactNode } from 'react'

export default function CompanyDetailTemplate({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    // Next.js can preserve the previous scroll when the new page is already in view.
    // This template remounts for each company once its details are ready.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return children
}
