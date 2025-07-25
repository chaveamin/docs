import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { navigation } from '@/lib/navigation'

function ChevronIcon() {
  return (
    <svg
      className="mr-2 size-4 stroke-slate-900 transition-transform duration-200 ease-out group-data-open:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export function Navigation({ className, onLinkClick }) {
  let pathname = usePathname()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list">
        {navigation.map((section) => (
          <li key={section.title}>
            <Disclosure
              as="div"
              className="group p-3"
              defaultOpen={pathname.includes(section.link)}
            >
              <DisclosureButton className="group flex cursor-pointer items-center">
                <h2 className="text-base font-bold text-slate-900 group-data-open:text-sky-600 dark:text-white dark:group-data-open:text-sky-400">
                  {section.title}
                </h2>
                <ChevronIcon />
              </DisclosureButton>
              <DisclosurePanel
                transition="true"
                className="ms-2 origin-top border-r border-zinc-200 ps-4 transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 dark:border-slate-700"
              >
                <ul role="list" className="mt-2 space-y-1 lg:mt-4">
                  {section.links.map((link) => (
                    <li key={link.href} className="relative">
                      <Link
                        href={link.href}
                        onClick={onLinkClick}
                        className={clsx(
                          'flex h-6 items-center p-4 transition-all duration-300',
                          link.href === pathname
                            ? 'rounded-md bg-sky-50 text-sky-600 dark:bg-slate-500 dark:text-white'
                            : 'text-slate-500 hover:-translate-x-2 dark:text-slate-300',
                        )}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
        ))}
      </ul>
    </nav>
  )
}
