import { BriefcaseBusiness, CalendarDays } from 'lucide-react'
import { BoothCode, InfoRow, ListingCard, TagList } from '@/components/listing-card'
import type { Company } from '../types'
import { CompanyCardContent } from './company-card-content'
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
      <CompanyCardContent
        header={
          <>
            <div className="shrink-0">
              <CompanyLogo img={company.logo} />
            </div>
            <h3 className="text-trim min-w-0 flex-1 font-thai text-xl leading-[1.2] font-medium text-ink">
              {company.name}
            </h3>
          </>
        }
        tags={<TagList tags={company.tags} />}
        info={
          <>
            <InfoRow icon={BriefcaseBusiness}>{company.category}</InfoRow>
            {company.days && <InfoRow icon={CalendarDays}>{company.days}</InfoRow>}
          </>
        }
        booths={<BoothCode booths={company.booths} />}
      />
    </ListingCard>
  )
}
