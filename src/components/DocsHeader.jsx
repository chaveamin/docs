'use client'

import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'

export function DocsHeader({ title }) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <p className="text-base font-bold text-sky-500">{section.title}</p>
      )}
    </header>
  )
}
