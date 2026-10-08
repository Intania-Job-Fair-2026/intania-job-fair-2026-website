import type { Company } from './types'

// TODO: replace with data from the company API once available
const names = [
  'บริษัทไลน์คอร์ปอเรชั่น',
  'บริษัทเอสซีจี',
  'บริษัทปตท.',
  'บริษัทอะโกด้า',
  'บริษัทแอคเซนเจอร์',
  'บริษัทกสิกรไทย',
  'บริษัทไทยเบฟเวอเรจ',
  'บริษัทเชลล์',
]
const tagSets = [
  ['Internship', 'IT'],
  ['Full-time', 'Engineering'],
  ['Internship', 'Data'],
  ['Full-time', 'IT'],
]
const locations = ['ปทุมวัน กรุงเทพฯ', 'สาทร กรุงเทพฯ', 'จตุจักร กรุงเทพฯ', 'ศรีราชา ชลบุรี']

export const mockCompanies: Company[] = Array.from({ length: 67 }, (_, i) => ({
  id: `company-${i + 1}`,
  name: names[i % names.length],
  logo: '/images/home/company-placeholder.png',
  booth: `${String.fromCharCode(65 + Math.floor(i / 10))}${i % 10}`,
  tags: tagSets[i % tagSets.length],
  positions: ((i * 7) % 60) + 5,
  location: locations[i % locations.length],
}))
