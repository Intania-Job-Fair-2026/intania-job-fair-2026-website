'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import { ButtonLink } from '@/components/button-link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/utils/cn'

// TODO: replace each day's placeholder with its final event floor plan.
const MAPS = [
  { day: 1, label: 'วันที่ 1', src: '/images/booths/event-map.png' },
  { day: 2, label: 'วันที่ 2', src: '/images/booths/event-map.png' },
]

const arrowClass =
  'size-12 cursor-pointer border-0 bg-red-500 text-white shadow-none hover:bg-red-700 hover:text-white focus-visible:ring-2 focus-visible:ring-white sm:size-16 [&_svg]:size-6 sm:[&_svg]:size-8'

export const BoothMap = ({ header }: { header: ReactNode }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const activeMap = MAPS[selected]

  useEffect(() => {
    if (!api) return

    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on('select', onSelect)
    api.on('reInit', onSelect)

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
      {header}
      <div className="w-full px-6">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          tabIndex={0}
          aria-label="แผนผังบูธบริษัทแต่ละวัน"
        >
          <div className="relative">
            <CarouselContent>
              {MAPS.map((map) => (
                <CarouselItem key={map.day} aria-label={map.label}>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={map.src}
                      alt={`แผนผังบูธบริษัท ${map.label}`}
                      fill
                      sizes="(min-width: 640px) 528px, calc(100vw - 48px)"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={cn(arrowClass, 'left-3')} aria-label="แผนผังวันก่อนหน้า" />
            <CarouselNext className={cn(arrowClass, 'right-3')} aria-label="แผนผังวันถัดไป" />
          </div>
        </Carousel>
      </div>
      <ButtonLink
        href={activeMap.src}
        download={`intania-job-fair-2026-booth-map-day-${activeMap.day}.png`}
        iconStart={Download}
      >
        ดาวน์โหลดแผนผัง {activeMap.label}
      </ButtonLink>
    </section>
  )
}
