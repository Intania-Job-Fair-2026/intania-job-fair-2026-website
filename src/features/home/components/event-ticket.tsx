import Image from 'next/image'
import { ButtonLink } from '@/components/button-link'

// TODO: go to the real registration / evaluation forms once available
const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSctrZhzDwwrDOB-v7uZXSObYMUyqEI5SsYRYN7SKzsSu37k-Q/viewform'
const EVALUATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeNvM_gCQDPJO1G_CjU7aJ_LCRe03OGthKoxDf0DSl8VLPGEw/viewform'

const timeLabelClass = 'text-trim font-thai text-base leading-[1.4] font-medium'
const timeValueClass =
  'text-trim font-heading text-[32px] leading-[1.2] font-bold whitespace-nowrap'
const dayClass =
  'text-trim font-heading text-[40px] leading-[1.2] font-bold tracking-[-0.8px] text-red-500'

export const EventTicket = () => {
  return (
    <div className="mx-auto flex w-[402px] max-w-full flex-col px-6">
      <section className="relative h-[388px] w-full overflow-clip rounded-2xl bg-white">
        <div className="absolute inset-x-0 top-0 flex h-[42px] items-center justify-center bg-linear-to-r from-red-700 to-red-500">
          <p className="text-trim text-center font-display text-[clamp(1.125rem,6vw,1.5rem)] leading-[1.2] font-medium tracking-[0.18em] whitespace-nowrap text-white">
            Flight to The Future
          </p>
        </div>

        <h1 className="absolute inset-x-0 top-[57px] text-center font-heading text-[clamp(1.875rem,10vw,2.5rem)] leading-[1.2] font-bold whitespace-nowrap text-black">
          Intania{' '}
          <span className="bg-linear-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
            Job Fair
          </span>
        </h1>

        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[82px] text-center font-heading text-[136px] leading-none font-bold tracking-[-4px] whitespace-nowrap text-blue-500 opacity-10"
        >
          2026
        </p>

        <div aria-hidden className="pointer-events-none absolute inset-x-7 top-[124px] h-12">
          <svg viewBox="0 0 298 48" fill="none" className="h-full w-full">
            <path
              d="M48 40 Q149 8 250 40"
              stroke="var(--color-blue-700)"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>
          <Image
            src="/images/main/ticket-plane-transparent.png"
            alt=""
            width={56}
            height={56}
            className="absolute top-0 left-1/2 size-14 -translate-x-1/2 rotate-45 object-contain"
          />
        </div>

        <div className="absolute inset-x-7 top-[155px] grid grid-cols-3 items-end">
          <div className="flex flex-col items-center gap-2.5 justify-self-start">
            <span className={dayClass}>28</span>
            <span className="text-trim font-thai text-xl leading-[1.4] font-bold text-red-500">
              ตุลาคม
            </span>
          </div>
          <span className="text-trim justify-self-center font-thai text-xl leading-[1.4] font-bold text-black">
            ถึง
          </span>
          <div className="flex flex-col items-center gap-2.5 justify-self-end">
            <span className={dayClass}>29</span>
            <span className="text-trim font-thai text-xl leading-[1.4] font-bold text-red-500">
              ตุลาคม
            </span>
          </div>
        </div>

        <div className="absolute inset-x-7 top-[240px] flex items-start justify-between text-black">
          <div className="flex flex-col gap-2">
            <p className={timeLabelClass}>ตั้งแต่</p>
            <p className={timeValueClass}>9:30</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className={timeLabelClass}>จนถึง</p>
            <p className={timeValueClass}>17:00</p>
          </div>
        </div>

        <div className="absolute inset-x-7 top-[310px] flex flex-col gap-2 text-black">
          <p className={timeLabelClass}>สถานที่</p>
          <p className="text-trim font-thai text-[32px] leading-[1.4] font-bold whitespace-nowrap">
            ศาลาพระเกี้ยว
          </p>
        </div>
      </section>

      <div className="relative h-0 w-full">
        <Image
          src="/images/main/ticket-divider.svg"
          alt=""
          width={354}
          height={4}
          className="absolute bottom-0 left-0 h-1 w-full"
        />
      </div>

      <section className="flex w-full flex-col items-center overflow-clip rounded-2xl bg-white py-8">
        <div className="flex w-full flex-col gap-4 px-6">
          <ButtonLink href={REGISTER_URL} variant="primary-lg" target="_blank" className="w-full">
            ลงทะเบียน
          </ButtonLink>
          <ButtonLink href={EVALUATION_URL} variant="outline" target="_blank" className="w-full">
            แบบประเมินงาน
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
