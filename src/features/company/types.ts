export type Booth = {
  code: string
  /** Event day, set only when the company's booth differs between days */
  day?: string
}

export type EventDay = '28' | '29'

export type WorkType = 'intern12' | 'intern3' | 'fulltime'

export type Company = {
  /** URL slug built from the English company name */
  id: string
  name: string
  /** Thai / English legal names, matched by search */
  altNames: string[]
  logo: string
  booths: Booth[]
  tags: string[]
  category: string
  eventDays: EventDay[]
  workTypes: WorkType[]
  /** Event days attended, e.g. "28–29 ต.ค." */
  days: string
  description: string
  contact: Contact
}

export type Phone = {
  /** As written in the sheet, e.g. "02-118-7200 (Oper)" */
  label: string
  /** `tel:` link with the digits only */
  href: string
}

export type Contact = {
  name: string
  phones: Phone[]
  emails: string[]
}
