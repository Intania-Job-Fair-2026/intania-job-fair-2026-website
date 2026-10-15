import { type LucideIcon, Mail, Phone, UserRound } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Contact } from '../types'

const linkClass =
  'text-blue-800 underline decoration-blue-800/40 underline-offset-4 transition-colors hover:decoration-blue-800'

export const CompanyContact = ({ contact }: { contact: Contact }) => {
  const { name, phones, emails } = contact
  if (!name && phones.length === 0 && emails.length === 0) return null

  return (
    <section className="flex w-full flex-col gap-7">
      <h2 className="text-trim px-1.5 font-thai text-xl leading-[1.2] font-medium text-black">
        ติดต่อบริษัท
      </h2>

      <div className="flex w-full flex-col gap-4 bg-white p-4 shadow-card drop-shadow-card">
        {name && (
          <ContactRow icon={UserRound} label="ผู้ติดต่อ">
            <span className="text-ink">{name}</span>
          </ContactRow>
        )}
        {phones.length > 0 && (
          <ContactRow icon={Phone} label="โทรศัพท์">
            {phones.map((phone) => (
              <a key={phone.href + phone.label} href={phone.href} className={linkClass}>
                {phone.label}
              </a>
            ))}
          </ContactRow>
        )}
        {emails.length > 0 && (
          <ContactRow icon={Mail} label="อีเมล">
            {emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className={`${linkClass} break-all`}>
                {email}
              </a>
            ))}
          </ContactRow>
        )}
      </div>
    </section>
  )
}

const ContactRow = ({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: ReactNode
}) => (
  <div className="flex w-full items-start gap-3 border-b border-blue-900 pb-3 last:border-b-0 last:pb-0">
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
      <Icon aria-hidden size={20} className="text-blue-900" />
    </span>
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      <span className="font-thai text-sm leading-[1.4] tracking-[0.28px] text-blue-800">
        {label}
      </span>
      <div className="flex flex-col gap-1 font-thai text-base leading-[1.4]">{children}</div>
    </div>
  </div>
)
