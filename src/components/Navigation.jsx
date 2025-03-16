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
            <Disclosure as="div" className="p-3">
              <DisclosureButton className="group flex cursor-pointer items-center">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <ChevronIcon />
              </DisclosureButton>
              <DisclosurePanel
                transition="true"
                className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
              >
                <ul
                  role="list"
                  className="mt-2 space-y-2 border-r-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                >
                  {section.links.map((link) => (
                    <li key={link.href} className="relative">
                      <Link
                        href={link.href}
                        onClick={onLinkClick}
                        className={clsx(
                          'block h-6 overflow-hidden pr-3.5 text-ellipsis whitespace-nowrap transition-all before:pointer-events-none before:absolute before:top-1/2 before:-right-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                          link.href === pathname
                            ? 'font-semibold text-sky-500 before:bg-sky-500'
                            : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
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
