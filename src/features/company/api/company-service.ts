import { cache } from 'react'
import {
  fetchBootmapDay1,
  fetchBootmapDay2,
  fetchCompanies,
  fetchCompanyCategory,
} from '@/lib/data'
import type { Boot, Company as CompanyRecord } from '@/types/schema'
import type { Booth, Company, Contact, EventDay, WorkType } from '../types'

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const toKey = (name: string) => name.trim().toLowerCase()

// "J3 - J4" -> "J3–J4" so ranges fit the card's booth column
const toBoothCode = (bootName: string) => bootName.trim().replace(/\s*-\s*/g, '–')

const boothsByCompany = (boots: Boot[]) =>
  new Map(boots.map((b) => [toKey(b.companyName_en), toBoothCode(b.bootName)]))

/** One booth when both days match, otherwise each day's booth labelled with its date */
const toBooths = (day28?: string, day29?: string): Booth[] => {
  if (day28 && day29 && day28 !== day29) {
    return [
      { code: day28, day: '28' },
      { code: day29, day: '29' },
    ]
  }
  const code = day28 ?? day29
  return code ? [{ code }] : []
}

const TAG_LABELS: Record<WorkType, string> = {
  fulltime: 'Full-time',
  intern3: 'Intern ปี 3',
  intern12: 'Intern ปี 1-2',
}

const toWorkTypes = (c: CompanyRecord): WorkType[] => [
  ...(c.hiring ? (['fulltime'] as const) : []),
  ...(c.internship3 ? (['intern3'] as const) : []),
  ...(c.internship12 ? (['intern12'] as const) : []),
]

const toEventDays = (c: CompanyRecord): EventDay[] => [
  ...(c.come28 ? (['28'] as const) : []),
  ...(c.come29 ? (['29'] as const) : []),
]

/** The sheet uses "—" for "no value" */
const clean = (value?: string) => {
  const v = value?.trim() ?? ''
  return v === '—' || v === '-' ? '' : v
}

// "02-118-7200 (Oper), 093-513-7616" or "038-978-482 หรือ 093-580-8489" -> one entry per number
const toPhones = (tel: string) =>
  tel
    .split(/,|\/|หรือ/)
    .map((label) => label.trim())
    .map((label) => ({ label, digits: label.replace(/\(.*?\)/g, '').replace(/[^\d+]/g, '') }))
    .filter(({ digits }) => digits.length >= 6)
    .map(({ label, digits }) => ({ label, href: `tel:${digits}` }))

type LegacyContactKeys = Partial<Record<'Email' | 'Tel' | 'Contact Person', string>>

const toContact = (c: CompanyRecord & LegacyContactKeys): Contact => ({
  name: clean(c.contactPerson ?? c['Contact Person']),
  phones: toPhones(clean(c.tel ?? c.Tel)),
  emails: clean(c.email ?? c.Email)
    .split(/[,;\s]+/)
    .filter((e) => e.includes('@')),
})

/** Joins the company sheet with both days' booth maps into card-ready companies */
export const getCompanies = cache(async (): Promise<Company[]> => {
  const [records, day1, day2] = await Promise.all([
    fetchCompanies(),
    fetchBootmapDay1(),
    fetchBootmapDay2(),
  ])
  const day1Booths = boothsByCompany(day1)
  const day2Booths = boothsByCompany(day2)

  return records.map((c) => {
    const key = toKey(c.companyName_en)
    const eventDays = toEventDays(c)
    const workTypes = toWorkTypes(c)

    return {
      id: toSlug(c.companyName_en),
      name: c.promoteName,
      altNames: [c.companyName_th, c.companyName_en],
      nameTh: clean(c.companyName_th),
      nameEn: clean(c.companyName_en),
      booths: toBooths(day1Booths.get(key), day2Booths.get(key)),
      tags: workTypes.map((t) => TAG_LABELS[t]),
      // "Automotive & Machinery - งานยานยนต์ / เครื่องจักร" -> "Automotive & Machinery"
      category: c.category.split(' - ')[0],
      categoryFull: c.category.trim(),
      eventDays,
      workTypes,
      days: eventDays.length ? `${eventDays.join('–')} ต.ค.` : '',
      description: c.detail.trim(),
      contact: toContact(c),
      logo: c.logo,
    }
  })
})

export const getCompany = async (id: string) => (await getCompanies()).find((c) => c.id === id)

export const getCompanyCategories = cache(async (): Promise<string[]> => {
  const categories = await fetchCompanyCategory()
  return [
    ...new Set(categories.map((category) => category.split(' - ')[0].trim()).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b))
})
