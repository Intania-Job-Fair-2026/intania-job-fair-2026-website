'use client'

import { Directory } from '@/components/directory/directory'
import { useDirectory } from '@/components/directory/use-directory'
import type { Job } from '../types'
import { JobCard } from './job-card'

const getSearchFields = (j: Job) => [j.title, j.company, j.booth, j.location, ...j.tags]
const getSortKey = (j: Job) => j.title

export const JobDirectory = ({ jobs, initialQuery }: { jobs: Job[]; initialQuery?: string }) => {
  const directory = useDirectory(jobs, {
    getSearchFields,
    getSortKey,
    initialQuery,
  })

  return (
    <Directory
      heading="ตำแหน่งงานทั้งหมด"
      countLabel={`พบ ${directory.total} ตำแหน่งงาน`}
      query={directory.query}
      onQueryChange={directory.setQuery}
      sortOrder={directory.sortOrder}
      onToggleSort={directory.toggleSortOrder}
      page={directory.page}
      totalPages={directory.totalPages}
      onPageChange={directory.setPage}
    >
      {directory.visible.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Directory>
  )
}
