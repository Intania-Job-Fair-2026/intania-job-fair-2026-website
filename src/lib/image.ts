export function extractGoogleDriveId(url: string): string | null {
  const match = url.match(/\/file\/d\/([^/]+)/)
  return match?.[1] ?? null
}

export function getCompanyLogoUrlByDriveUrl(driveUrl: string): string | null {
  const googleDriveId = extractGoogleDriveId(driveUrl)
  if (googleDriveId === null) {
    return null // placeholder image
  }
  return `https://drive.google.com/thumbnail?id=${googleDriveId}&sz=w1000`
}
