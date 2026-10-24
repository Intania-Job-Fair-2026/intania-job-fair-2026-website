import type { ReactNode } from 'react'

/** Shared geometry for loaded cards and their placeholders. */
export const CompanyCardContent = ({
  header,
  tags,
  info,
  booths,
}: {
  header: ReactNode
  tags: ReactNode
  info: ReactNode
  booths: ReactNode
}) => (
  <div className="flex min-h-34 w-full items-start gap-4">
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <div className="flex min-h-12 w-full items-center gap-2">{header}</div>
      <div className="flex w-full flex-col gap-3">
        <div className="min-h-8 w-full">{tags}</div>
        <div className="flex min-h-16 w-full flex-col gap-2">{info}</div>
      </div>
    </div>
    {booths}
  </div>
)
