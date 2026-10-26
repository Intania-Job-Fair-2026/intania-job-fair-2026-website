import { Download } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/button-link'
import eventMap from '../../../../public/images/booths/event-map.png'

export const BoothMap = ({ header }: { header: ReactNode }) => {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
      {header}
      <div className="w-full px-6">
        <Image
          src={eventMap}
          alt="แผนผังบูธบริษัท วันที่ 1 และวันที่ 2"
          sizes="(min-width: 640px) 528px, calc(100vw - 48px)"
          className="block h-auto w-full"
        />
      </div>
      <ButtonLink
        href="/images/booths/event-map.png"
        download="intania-job-fair-2026-booth-map.png"
        iconStart={Download}
      >
        ดาวน์โหลดแผนผัง
      </ButtonLink>
    </section>
  )
}
