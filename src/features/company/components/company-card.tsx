import { BriefcaseBusiness, CalendarDays } from 'lucide-react'
import { BoothCode, InfoRow, ListingCard, TagList } from '@/components/listing-card'
import { getCompanyLogoUrlByDriveUrl } from '@/lib/image'
import type { Company } from '../types'
import { CompanyLogo } from './company-logo'

export const CompanyCard = ({
  company,
  linked = true,
}: {
  company: Company
  /** Link to the company's detail page; off on the detail page itself */
  linked?: boolean
}) => {
  return (
    <ListingCard className="shadow-card" href={linked ? `/companies/${company.id}` : undefined}>
      <div className="flex min-h-34 w-full items-start gap-4">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex w-full items-center gap-2">
            <div className="shrink-0">
              <CompanyLogo src={company.logo} />
            </div>
            <h3 className="text-trim min-w-0 flex-1 font-thai text-xl leading-[1.2] font-medium text-ink">
              {company.name}
            </h3>
          </div>

          <div className="flex w-full flex-col gap-3">
            <TagList tags={company.tags} />
            <div className="flex w-full flex-col gap-2">
              <InfoRow icon={BriefcaseBusiness}>{company.category}</InfoRow>
              {company.days && <InfoRow icon={CalendarDays}>{company.days}</InfoRow>}
            </div>
          </div>
        </div>

        <BoothCode booths={company.booths} />
      </div>
    </ListingCard>
  )
}
