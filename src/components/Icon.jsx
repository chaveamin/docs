import { useId } from 'react'
import clsx from 'clsx'

import { BuilderIcon } from '@/components/icons/BuilderIcon'
import { LagomIcon } from '@/components/icons/LagomIcon'
import { ShufyIcon } from '@/components/icons/ShufyIcon'
import { AdminXIcon } from '@/components/icons/AdminXIcon'
import { TelegramIcon } from '@/components/icons/TelegramIcon'
import { ClientIcon } from '@/components/icons/ClientIcon'
import { PromoIcon } from '@/components/icons/PromoIcon'
import { EmailIcon } from '@/components/icons/EmailIcon'
import { SupportIcon } from '@/components/icons/SupportIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { ErrorIcon } from '@/components/icons/ErrorIcon'

const icons = {
  lagom: LagomIcon,
  builder: BuilderIcon,
  shufy: ShufyIcon,
  adminx: AdminXIcon,
  telegram: TelegramIcon,
  client: ClientIcon,
  promo: PromoIcon,
  email: EmailIcon,
  support: SupportIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  error: ErrorIcon,
}

const iconStyles = {
  blue: '[--icon-foreground:var(--color-slate-900)] [--icon-background:var(--color-white)]',
  amber:
    '[--icon-foreground:var(--color-amber-900)] [--icon-background:var(--color-amber-100)]',
  red: '[--icon-foreground:var(--color-red-900)] [--icon-background:var(--color-red-100)]',
}

export function Icon({ icon, color = 'blue', className, ...props }) {
  let id = useId()
  let IconComponent = icons[icon]

  return (
    <span className={clsx(className, iconStyles[color])} {...props}>
      <IconComponent id={id} color={color} />
    </span>
  )
}

const gradients = {
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: '.527' },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
  red: [
    { stopColor: '#F8B4B4', offset: '.08' },
    { stopColor: '#F05252', offset: '.837' },
  ],
}

export function Gradient({ color = 'blue', ...props }) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  )
}

export function LightMode({ className, ...props }) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({ className, ...props }) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
