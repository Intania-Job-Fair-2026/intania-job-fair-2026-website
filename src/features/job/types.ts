export type Job = {
  id: string
  title: string
  company: string
  logo: string
  booth: string
  tags: string[]
  /** ISO date (YYYY-MM-DD) */
  startDate: string
  /** ISO date (YYYY-MM-DD) */
  endDate: string
  location: string
}
