import { Footer } from '@/components/footer'
import { TopBar } from '@/components/top-bar'

export default function HomeLayout({ children }: LayoutProps<'/'>) {
  return (
    <main className="flex min-h-screen w-full flex-1 justify-center bg-linear-to-b from-blue-700 via-accent-primary via-30% to-blue-300 to-70%">
      <div className="flex w-full max-w-[402px] flex-col overflow-x-clip pt-4">
        <TopBar />
        <div className="flex w-full flex-col gap-10 pt-4">{children}</div>
        <Footer />
      </div>
    </main>
  )
}
