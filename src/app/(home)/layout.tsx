import { Footer } from '@/components/footer'
import { TopBar } from '@/components/top-bar'

export default function HomeLayout({ children }: LayoutProps<'/'>) {
  return (
    // Reserve exactly the fixed navbar's height below the footer.
    <main className="page-background flex min-h-screen w-full flex-1 flex-col overflow-x-clip pt-4 pb-[var(--navbar-height)] has-[[data-page-bg=flat]]:bg-blue-50 has-[[data-page-bg=flat]]:bg-none">
      <TopBar />
      {/* Mobile design is 402px wide; the column widens on tablet / desktop */}
      <div className="mx-auto flex w-full max-w-[402px] flex-col gap-10 pt-4 md:max-w-3xl lg:max-w-6xl">
        {children}
      </div>
      <Footer />
    </main>
  )
}
