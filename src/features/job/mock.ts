import type { Job } from './types'

// TODO: replace with data from the job API once available
const titles = [
  'Software Engineer',
  'Data Analyst',
  'Process Engineer',
  'Product Manager',
  'UX/UI Designer',
  'Civil Engineer',
  'Electrical Engineer',
  'Business Analyst',
]
const companies = ['LINE FRIENDS', 'SCG', 'PTT', 'Agoda', 'Accenture', 'KBTG', 'ThaiBev', 'Shell']
const tagSets = [
  ['Internship', 'IT'],
  ['Full-time', 'Engineering'],
  ['Internship', 'Data'],
  ['Full-time', 'IT'],
]
const locations = ['ปทุมวัน กรุงเทพฯ', 'สาทร กรุงเทพฯ', 'จตุจักร กรุงเทพฯ', 'ศรีราชา ชลบุรี']

export const mockJobs: Job[] = Array.from({ length: 67 }, (_, i) => ({
  id: `job-${i + 1}`,
  title: titles[i % titles.length],
  company: companies[(i * 3) % companies.length],
  logo: '/images/home/company-placeholder.png',
  booth: `${String.fromCharCode(65 + Math.floor(i / 10))}${i % 10}`,
  tags: tagSets[i % tagSets.length],
  startDate: `2026-${String((i % 3) + 1).padStart(2, '0')}-01`,
  endDate: `2026-${String((i % 3) + 4).padStart(2, '0')}-01`,
  location: locations[i % locations.length],
}))
