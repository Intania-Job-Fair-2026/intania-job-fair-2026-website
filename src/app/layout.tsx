import type { Metadata } from 'next'
import { IBM_Plex_Sans_Thai } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/navbar'

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: '--font-ibm-plex-thai',
  weight: ['400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
})

const benguiat = localFont({
  src: [
    { path: '../../public/fonts/ITCBenguiatStdBookCn.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/ITCBenguiatStdMediumCn.otf', weight: '500', style: 'normal' },
  ],
  variable: '--font-benguiat',
  fallback: ['Georgia', 'serif'],
})

const helveticaWorld = localFont({
  src: [
    { path: '../../public/fonts/HelveticaWorld-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/HelveticaWorld-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-helvetica-world',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

const fcIconic = localFont({
  src: [{ path: '../../public/fonts/FC Iconic Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-fc-iconic',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Intania Job Fair 2026',
  description: 'Intania Job Fair 2026 — Chulalongkorn University Faculty of Engineering',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="th"
      className={`${ibmPlexSansThai.variable} ${benguiat.variable} ${helveticaWorld.variable} ${fcIconic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Navbar />
      </body>
    </html>
  )
}
