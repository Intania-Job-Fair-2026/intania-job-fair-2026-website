'use client'

import Image from 'next/image'
import { useState } from 'react'

/** Keep the image visible so cached logos paint immediately, including before hydration. */
export const CompanyLogo = ({ img, size = 48 }: { img: string | null; size?: number }) => {
  const [failedImage, setFailedImage] = useState<string | null>(null)

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
      <Image
        src={`/logo/${img}`}
        alt=""
        fill
        sizes={`${size}px`}
        onError={() => setFailedImage(img)}
        className="object-contain"
      />
    </div>
  )
}
