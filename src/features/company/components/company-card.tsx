import { BriefcaseBusiness, MapPin } from 'lucide-react'
import Image from 'next/image'
import { BoothCode, InfoRow, ListingCard, TagList } from '@/components/listing-card'
import type { Company } from '../types'

export const CompanyCard = ({ company }: { company: Company }) => {
  return (
    <ListingCard className="shadow-card">
      <div className="flex min-h-[136px] w-full items-start gap-4">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex w-full items-center gap-2">
            <div className="relative size-12 shrink-0">
              <Image src={company.logo} alt="" fill sizes="48px" className="object-cover" />
            </div>
            <h3 className="text-trim min-w-0 flex-1 font-thai text-xl leading-[1.2] font-medium text-ink">
              {company.name}
            </h3>
          </div>

          <div className="flex w-full flex-col gap-3">
            <TagList tags={company.tags} />
            <div className="flex w-full flex-col gap-2">
              <InfoRow icon={BriefcaseBusiness}>{company.positions} ตำแหน่งงาน</InfoRow>
              <InfoRow icon={MapPin}>{company.location}</InfoRow>
            </div>
          </div>
        </div>

        <BoothCode booth={company.booth} />
      </div>
    </ListingCard>
  )
}
