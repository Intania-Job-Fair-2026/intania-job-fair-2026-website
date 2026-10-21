import { Footer } from '@/components/footer'
import { TopBar } from '@/components/top-bar'

export default function HomeLayout({ children }: LayoutProps<'/'>) {
  return (
    // Bottom margin clears the 120px fixed navbar.
    // Pages that render `data-page-bg="flat"` (company detail) get a plain light background.
    <main className="mb-30 flex min-h-screen w-full flex-1 flex-col overflow-x-clip bg-linear-to-b from-blue-700 via-accent-primary via-30% to-blue-300 to-70% pt-4 has-[[data-page-bg=flat]]:bg-blue-50 has-[[data-page-bg=flat]]:bg-none">
      <TopBar />
      {/* Mobile design is 402px wide; the column widens on tablet / desktop */}
      <div className="mx-auto flex w-full max-w-[402px] flex-col gap-10 pt-4 md:max-w-3xl lg:max-w-6xl">
        {children}
      </div>
      <Footer />
    </main>
  )
}
