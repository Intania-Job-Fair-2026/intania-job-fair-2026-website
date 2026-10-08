import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'primary-lg' | 'outline'

const containerClass: Record<Variant, string> = {
  primary: 'h-10 bg-red-500 px-4 py-2 text-white hover:bg-red-700',
  'primary-lg': 'h-12 bg-red-500 px-6 py-3 text-white hover:bg-red-700',
  outline: 'h-10 border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500/5',
}

const labelClass: Record<Variant, string> = {
  primary: 'text-lg leading-[1.4]',
  'primary-lg': 'text-xl leading-[1.2] font-medium',
  outline: 'text-lg leading-[1.4]',
}

type ButtonLinkProps = {
  href: string
  variant?: Variant
  children: ReactNode
  iconStart?: LucideIcon
  iconEnd?: LucideIcon
  download?: string
  className?: string
}

export const ButtonLink = ({
  href,
  variant = 'primary',
  children,
  iconStart: IconStart,
  iconEnd: IconEnd,
  download,
  className,
}: ButtonLinkProps) => {
  const classes = cn(
    'flex items-center justify-center gap-2 overflow-clip rounded-lg transition-colors',
    containerClass[variant],
    className,
  )
  const content = (
    <>
      {IconStart && <IconStart aria-hidden size={16} className="shrink-0" />}
      <span className={cn('text-trim font-thai whitespace-nowrap', labelClass[variant])}>
        {children}
      </span>
      {IconEnd && <IconEnd aria-hidden size={16} className="shrink-0" />}
    </>
  )

  return download ? (
    <a href={href} download={download} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
