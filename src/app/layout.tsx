import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const benguiat = localFont({
  src: [{ path: '../../public/fonts/ITCBenguiatStdBookCn.otf', weight: '400', style: 'normal' }],
  variable: '--font-benguiat',
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  title: 'Intania Job Fair 2026',
  description: 'Explore companies, jobs, and booths at Intania Job Fair 2026.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${benguiat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f3f3f3]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
