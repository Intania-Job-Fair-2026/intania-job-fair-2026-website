import type { Metadata } from 'next'
import { Banner } from '@/components/banner'
import { JobDirectory } from '@/features/job/components/job-directory'
import { mockJobs } from '@/features/job/mock'

export const metadata: Metadata = {
  title: 'ตำแหน่งงาน | Intania Job Fair 2026',
}

export default async function HomeJobsPage(props: PageProps<'/jobs'>) {
  const { q } = await props.searchParams

  return (
    <>
      <Banner />
      <JobDirectory jobs={mockJobs} initialQuery={typeof q === 'string' ? q : undefined} />
    </>
  )
}
