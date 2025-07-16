'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export function TableOfContents({ tableOfContents }) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return null

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
      .filter((x) => x !== null)
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top - 10) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  let pathname = usePathname()
  let isHomepage = pathname == '/'
  let isChangelog = pathname == '/lagom/changelog'
  return (
    <>
      {!isHomepage && !isChangelog ? (
        <div className="tos relative mt-8 mr-8 border-r-1 border-zinc-200 pr-4 xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-x-hidden xl:overflow-y-auto xl:py-16 xl:pl-2 dark:border-slate-700">
          <nav
            aria-labelledby="on-this-page-title"
            className="w-56 border-b pb-5 dark:border-b-slate-700"
          >
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="text-sm font-medium text-slate-900 dark:text-white"
                >
                  آنچه در این راهنما خواهید خواند
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? 'truncate font-bold text-sky-600 transition-all before:absolute before:right-0 before:h-6 before:w-px before:bg-sky-500 before:transition-all before:content-[""] dark:text-sky-400'
                              : 'truncate font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-sky-400',
                          )}
                        >
                          {section.title}
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="mt-2 space-y-2 pr-5 text-slate-500 dark:text-slate-400"
                        >
                          {section.children.map((subSection) => (
                            <li
                              className="h-6 truncate transition-all hover:pr-2"
                              key={subSection.id}
                            >
                              <Link
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? 'text-sky-500 transition-all before:absolute before:right-0 before:h-6 before:w-px before:bg-sky-500 before:transition-all before:content-[""] dark:text-sky-400 before:dark:bg-sky-400'
                                    : 'text-slate-400 dark:text-slate-300'
                                }
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
