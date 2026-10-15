import type { SortOption } from '@/components/directory/use-directory'
import type { Company } from './types'

export const sortByName: SortOption<Company> = {
  id: 'name',
  label: 'ชื่อบริษัท',
  getKey: (c) => c.name,
}

export const sortByBooth: SortOption<Company> = {
  id: 'booth',
  label: 'บูธ',
  getKey: (c) => c.booths[0]?.code ?? '',
}
