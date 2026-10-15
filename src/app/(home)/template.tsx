/** Re-mounts on every navigation, so each page fades up gently as it arrives */
export default function HomeTemplate({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-10 motion-safe:animate-fade-up">{children}</div>
}
