import Image from 'next/image'

export const Footer = () => {
  return (
    <footer id="contact" className="mt-auto w-full py-18">
      <div className="w-full bg-blue-100">
        <div className="mx-auto flex w-full max-w-[402px] items-center justify-between overflow-clip px-6 py-1 md:max-w-3xl lg:max-w-6xl">
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
      </div>
    </footer>
  )
}
