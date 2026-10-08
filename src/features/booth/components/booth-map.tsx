import { Download } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/button-link'

// TODO: replace placeholder map with the final event floor plan
const MAP_SRC = '/images/booths/event-map.png'

export const BoothMap = ({ header }: { header: ReactNode }) => {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
      {header}
      <div className="w-full px-6">
        <div className="relative aspect-square w-full">
          <Image
            src={MAP_SRC}
            alt="แผนผังบูธบริษัท"
            fill
            sizes="(min-width: 640px) 528px, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
      </div>
      <ButtonLink
        href={MAP_SRC}
        download="intania-job-fair-2026-booth-map.png"
        iconStart={Download}
      >
        ดาวน์โหลดแผนผัง
      </ButtonLink>
    </section>
  )
}
