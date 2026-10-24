import { ArrowRight } from 'lucide-react'
import { Children, type ReactNode } from 'react'
import { ButtonLink } from '@/components/button-link'
import { ListItemReveal } from '@/components/list-item-reveal'
import { SectionHeader } from '@/components/section-header'

type FeaturedSectionProps = {
  title: string
  href: string
  /** Label of the "see all" link in the header */
  linkLabel: string
  /** Label of the full-width button below the list */
  buttonLabel: string
  children: ReactNode
  animateItems?: boolean
}

/** "Featured" preview list with links to the full directory */
export const FeaturedSection = ({
  title,
  href,
  linkLabel,
  buttonLabel,
  children,
  animateItems = true,
}: FeaturedSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <SectionHeader title={title} link={{ href, label: linkLabel }} />
      <div className="grid w-full grid-cols-1 gap-4 px-6 md:grid-cols-2">
        {animateItems
          ? Children.map(children, (child, index) => (
              <ListItemReveal index={index}>{child}</ListItemReveal>
            ))
          : children}
      </div>
      <div className="w-full px-6 md:max-w-md">
        <ButtonLink href={href} iconEnd={ArrowRight} className="w-full">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
