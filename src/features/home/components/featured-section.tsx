import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/button-link'
import { SectionHeader } from '@/components/section-header'

type FeaturedSectionProps = {
  title: string
  href: string
  /** Label of the "see all" link in the header */
  linkLabel: string
  /** Label of the full-width button below the list */
  buttonLabel: string
  children: ReactNode
}

/** "Featured" preview list with links to the full directory */
export const FeaturedSection = ({
  title,
  href,
  linkLabel,
  buttonLabel,
  children,
}: FeaturedSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <SectionHeader title={title} link={{ href, label: linkLabel }} />
      <div className="flex w-full flex-col gap-4 px-6">{children}</div>
      <div className="w-full px-6">
        <ButtonLink href={href} iconEnd={ArrowRight} className="w-full">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
