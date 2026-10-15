import { Mail, Phone } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

// Text sizes scale with the viewport height so both blocks fit on one screen
const heading = 'text-[clamp(18px,3dvh,24px)] leading-[1.4] font-bold'
const body = 'text-[clamp(14px,2.4dvh,20px)] leading-[1.3]'

export function ContactInfo() {
  return (
    <div className="flex min-h-0 w-full flex-col justify-evenly gap-[2dvh] px-6 font-thai">
      <section className="flex flex-col gap-[1.5dvh]">
        <div className="flex flex-col gap-[0.8dvh]">
          <h1 className={heading}>
            ศูนย์พัฒนาสมรรถนะและ
            <br />
            ความพร้อมทางอาชีพ (CDC)
          </h1>
          <p className={body}>ภารกิจกิจการนิสิต คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</p>
        </div>
        <ul className={`flex flex-col gap-[1dvh] ${body}`}>
          <li className="flex items-center gap-2">
            <Phone aria-hidden size={24} className="shrink-0" />
            <a href="tel:022186349">02-218-6349 (08.00 - 17.00 น.)</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail aria-hidden size={24} className="shrink-0" />
            <a href="mailto:cdc@eng.chula.ac.th">cdc@eng.chula.ac.th</a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-end gap-[1dvh] text-right">
        <h2 className={heading}>ฝ่ายวิชาการ</h2>
        <p className={body}>
          กรรมการนิสิตคณะวิศวกรรมศาสตร์
          <br />
          จุฬาลงกรณ์มหาวิทยาลัย
        </p>
        <a
          href="https://www.instagram.com/academic.esc"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 ${body}`}
        >
          <InstagramIcon />
          academic.esc
        </a>
      </section>
    </div>
  )
}
