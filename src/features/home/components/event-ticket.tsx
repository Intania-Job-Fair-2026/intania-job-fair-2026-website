import Image from 'next/image'
import { ButtonLink } from '@/components/button-link'

// TODO: go to the real registration / evaluation forms once available
const REGISTER_URL = '#'
const EVALUATION_URL = '#'

const timeLabelClass = 'text-trim font-thai text-base leading-[1.4] font-medium'
const timeValueClass =
  'text-trim font-heading text-[32px] leading-[1.2] font-bold whitespace-nowrap'
const dayClass =
  'text-trim font-heading text-[40px] leading-[1.2] font-bold tracking-[-0.8px] text-red-500'

export const EventTicket = () => {
  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col px-6">
      <section className="relative flex w-full flex-col items-center gap-6 overflow-clip rounded-2xl bg-white pb-8">
        <p
          aria-hidden
          className="text-trim pointer-events-none absolute top-[112px] left-1 font-heading text-[160px] leading-[1.2] font-bold tracking-[-9.6px] whitespace-nowrap text-blue-500 uppercase opacity-10"
        >
          2026
        </p>

        <div className="flex w-full items-center justify-center overflow-clip bg-red-700 px-4 py-3 min-[390px]:px-[43px]">
          <p className="text-trim text-center font-display text-[clamp(1.125rem,5.6vw,1.5rem)] leading-[1.2] font-bold tracking-[0.16em] whitespace-nowrap text-white">
            Flight to The Future
          </p>
        </div>

        <h1 className="text-trim relative w-full text-center font-heading text-[clamp(2.25rem,12vw,3rem)] leading-[1.2] font-bold tracking-[-0.06em] text-ink">
          Intania{' '}
          <span className="bg-linear-to-b from-red-500 to-red-700 bg-clip-text text-transparent">
            Job Fair
          </span>
        </h1>

        <div className="relative flex w-full flex-col items-center gap-2 px-6">
          <Image src="/images/main/event-flight-path.svg" alt="" width={229} height={44} />
          <div className="flex w-full flex-col items-center gap-1 leading-[1.2]">
            <p className="flex w-full items-center justify-center gap-16 whitespace-nowrap">
              <span className={dayClass}>28</span>
              <span className="text-trim font-thai text-2xl font-bold text-ink">ถึง</span>
              <span className={dayClass}>31</span>
            </p>
            <p className="text-trim w-full text-center font-thai-display text-5xl font-bold text-red-500">
              ตุลาคม
            </p>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-4 px-6 text-ink">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className={timeLabelClass}>ตั้งแต่</p>
              <p className={timeValueClass}>9:30</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className={timeLabelClass}>จนถึง</p>
              <p className={timeValueClass}>17:00</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 leading-[1.4]">
            <p className={timeLabelClass}>สถานที่</p>
            <p className="text-trim font-thai text-[32px] leading-[1.4] font-semibold whitespace-nowrap">
              ศาลาพระเกี้ยว
            </p>
          </div>
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
          <ButtonLink href={REGISTER_URL} variant="primary-lg" className="w-full">
            ลงทะเบียน
          </ButtonLink>
          <ButtonLink href={EVALUATION_URL} variant="outline" className="w-full">
            แบบประเมินงาน
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
