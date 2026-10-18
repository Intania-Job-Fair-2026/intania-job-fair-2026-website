import type { SortOption } from '@/components/directory/use-directory'
import type { Company } from './types'

export const sortByName: SortOption<Company> = {
  id: 'name',
  label: 'ชื่อบริษัท',
  getKey: (c) => c.name,
}

export const sortByCategory: SortOption<Company> = {
  id: 'category',
  label: 'สายงาน',
  // Name breaks ties so companies within a category stay alphabetical
  getKey: (c) => `${c.category}\u0000${c.name}`,
}

export const sortByBooth: SortOption<Company> = {
  id: 'booth',
  label: 'บูธ',
  getKey: (c) => c.booths[0]?.code ?? '',
}
