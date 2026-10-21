'use client'

import { Check, CircleUser, Copy, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { Contact } from '../types'

const contactFont = (value: string) =>
  /[\u0E00-\u0E7F]/.test(value) ? 'font-thai' : 'font-heading'

export const CompanyContact = ({ contact }: { contact: Contact }) => {
  const { name, phones, emails } = contact
  if (!name && phones.length === 0 && emails.length === 0) return null

  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-trim px-6 font-thai text-xl leading-[1.2] font-medium text-ink">
        ข้อมูลการติดต่อ
      </h2>

      <div className="flex w-full flex-col gap-4 px-6">
        {name && (
          <div className="flex items-center gap-4">
            <CircleUser aria-hidden size={20} strokeWidth={2} className="shrink-0 text-black" />
            <span className="sr-only">ผู้ติดต่อ: </span>
            <p className={cn('text-trim text-base leading-[1.4] text-ink', contactFont(name))}>
              {name}
            </p>
          </div>
        )}

        {(phones.length > 0 || emails.length > 0) && (
          <ul className="flex flex-col gap-3">
            {phones.map((phone) => (
              <li key={phone.href + phone.label} className="flex items-center gap-4">
                <Phone aria-hidden size={20} className="shrink-0 text-ink-secondary" />
                <CopyContactValue value={phone.label} label="เบอร์โทรศัพท์" />
              </li>
            ))}
            {emails.map((email) => (
              <li key={email} className="flex items-center gap-4">
                <Mail aria-hidden size={20} className="shrink-0 text-ink-secondary" />
                <CopyContactValue value={email} label="อีเมล" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

const CopyContactValue = ({ value, label }: { value: string; label: string }) => {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const Icon = status === 'copied' ? Check : Copy

  return (
    <div className="min-w-0">
      <button
        type="button"
        aria-label={`คัดลอก${label}: ${value}`}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value)
            setStatus('copied')
          } catch {
            setStatus('error')
          }
        }}
        className="flex max-w-full cursor-pointer items-center gap-2 rounded-sm text-left text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
      >
        <span className={cn('text-trim text-base leading-[1.4] break-all', contactFont(value))}>
          {value}
        </span>
        <Icon aria-hidden size={16} className="shrink-0" />
      </button>
      <span
        role="status"
        className={status === 'error' ? 'font-thai text-sm text-red-500' : 'sr-only'}
      >
        {status === 'copied' && 'คัดลอกแล้ว'}
        {status === 'error' && 'คัดลอกไม่สำเร็จ กรุณาลองอีกครั้ง'}
      </span>
    </div>
  )
}
