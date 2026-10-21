'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Skeleton } from '@/components/skeleton'
import { cn } from '@/utils/cn'

/** Company logo (48px on cards, larger on the detail page): a pulsing placeholder until the image loads, then fades the logo in */
export const CompanyLogo = ({ img, size = 48 }: { img: string | null; size?: number }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  console.log(img)

  if (!img || failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-lg bg-gray-200 text-xs text-ink-muted"
      >
        no logo
      </div>
    )
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {isLoading && <Skeleton tone="card" className="absolute inset-0 rounded-lg" />}
      <Image
        src={`/logo/${img}`}
        alt=""
        fill
        sizes={`${size}px`}
        onLoad={() => setIsLoading(false)}
        onError={() => setFailed(true)}
        className={cn(
          'object-contain transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
      />
    </div>
  )
}
