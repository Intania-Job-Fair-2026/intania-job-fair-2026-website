'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SearchBar } from '@/components/search-bar'

/** Search bar on the main page — submitting jumps to the company directory */
export const HomeSearch = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  return (
    <form
      role="search"
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault()
        const q = query.trim()
        router.push(q ? `/companies?q=${encodeURIComponent(q)}` : '/companies')
      }}
    >
      <SearchBar value={query} onChange={setQuery} />
    </form>
  )
}
