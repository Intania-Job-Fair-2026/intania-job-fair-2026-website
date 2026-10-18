import { CircleUser, Mail, Phone } from 'lucide-react'
import type { Contact } from '../types'

const linkClass =
  'text-trim font-thai text-base leading-[1.4] break-all text-ink-secondary underline-offset-4 hover:underline'

export const CompanyContact = ({ contact }: { contact: Contact }) => {
  const { name, phones, emails } = contact
  if (!name && phones.length === 0 && emails.length === 0) return null

  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-trim px-6 font-thai text-xl leading-[1.2] font-medium text-ink">
        ข้อมูลการติดต่อ
      </h2>

      <div className="flex w-full flex-col gap-4 px-6">
        {name && (
          <div className="flex items-center gap-4">
            <CircleUser aria-hidden size={24} strokeWidth={2} className="shrink-0 text-black" />
            <span className="sr-only">ผู้ติดต่อ: </span>
            <p className="text-trim font-thai text-lg leading-[1.4] text-ink">{name}</p>
          </div>
        )}

        {(phones.length > 0 || emails.length > 0) && (
          <ul className="flex flex-col gap-3">
            {phones.map((phone) => (
              <li key={phone.href + phone.label} className="flex items-center gap-4">
                <Phone aria-hidden size={20} className="shrink-0 text-ink-secondary" />
                <a href={phone.href} className={linkClass}>
                  {phone.label}
                </a>
              </li>
            ))}
            {emails.map((email) => (
              <li key={email} className="flex items-center gap-4">
                <Mail aria-hidden size={20} className="shrink-0 text-ink-secondary" />
                <a href={`mailto:${email}`} className={linkClass}>
                  {email}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
