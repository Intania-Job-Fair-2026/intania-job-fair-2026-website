'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Skeleton } from '@/components/skeleton'
import { cn } from '@/utils/cn'

/** Reserve the logo's space and pulse until the image is ready to display. */
export const CompanyLogo = ({ img, size = 48 }: { img: string | null; size?: number }) => {
  const [loadedImage, setLoadedImage] = useState<string | null>(null)
  const [failedImage, setFailedImage] = useState<string | null>(null)
  const isLoading = loadedImage !== img

  if (!img || failedImage === img) {
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
        key={img}
        src={`/logo/${img}`}
        alt=""
        fill
        sizes={`${size}px`}
        onLoad={() => setLoadedImage(img)}
        onError={() => setFailedImage(img)}
        className={cn('object-contain', isLoading ? 'opacity-0' : 'opacity-100')}
      />
    </div>
  )
}
