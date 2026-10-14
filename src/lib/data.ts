import type { Boot, Company, CompanyCategory } from '@/types/schema'

const GIST_RAW_BASE = process.env.NEXT_PUBLIC_GIST_RAW_BASE

async function fetchJson<T>(path: string, revalidate = 3600): Promise<T> {
  // cached for 3600 second change to 0 if want to test
  if (!GIST_RAW_BASE) {
    console.warn(`NEXT_PUBLIC_GIST_RAW_BASE not set, returning empty data for ${path}`)
    return [] as unknown as T
  }
  const res = await fetch(`${GIST_RAW_BASE}/${path}`, {
    next: { revalidate },
    headers: {
      Accept: 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

export async function fetchCompanies(): Promise<Company[]> {
  return fetchJson<Company[]>('companies.json')
}

export async function fetchBootmapDay1(): Promise<Boot[]> {
  return fetchJson<Boot[]>('bootmap1.json')
}
export async function fetchBootmapDay2(): Promise<Boot[]> {
  return fetchJson<Boot[]>('bootmap2.json')
}

export async function fetchCompanyCategory(): Promise<CompanyCategory> {
  return fetchJson<CompanyCategory>('companiesCategory.json')
}
