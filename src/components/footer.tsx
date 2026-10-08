import Image from 'next/image'

export const Footer = () => {
  return (
    <footer id="contact" className="w-full py-18">
      <div className="flex w-full items-center justify-between overflow-clip bg-blue-100 px-6 py-1">
        <div className="relative h-8 w-[182px] shrink-0">
          <Image
            src="/images/home/cdc-logo.png"
            alt="Chula Engineering Competency and Career Development Center"
            fill
            sizes="182px"
            className="object-cover"
          />
        </div>
        <div className="relative size-10 shrink-0">
          <Image
            src="/images/home/esc-logo.png"
            alt="Engineering Student Committee"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  )
}
