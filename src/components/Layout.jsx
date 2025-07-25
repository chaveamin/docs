'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import logo from '@/images/logo.svg'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'

function Header() {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-2xl shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur-sm dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent',
      )}
    >
      <div className="ml-6 flex lg:hidden">
        <MobileNavigation />
      </div>
      <div className="relative flex grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Image className="w-6" src={logo} alt="لوگو"></Image>
        </Link>
      </div>
      <div className="-my-5 ml-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 items-center gap-6 sm:gap-2 md:grow">
        <Link
          className="hidden rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-500 md:block dark:bg-slate-800/75"
          href="https://designesia.ir/"
          target="_blank"
        >
          بازگشت به سایت
        </Link>
        <Link
          className="hidden rounded-md bg-blue-100 px-4 py-2 font-semibold text-blue-600 transition-colors md:block dark:bg-slate-800/75 dark:text-white"
          href="https://t.me/frontmstr"
          target="_blank"
        >
          پشتیبانی
        </Link>
        <ThemeSelector className="relative z-10 mr-auto" />
      </div>
    </header>
  )
}

export function Layout({ children }) {
  let pathname = usePathname()
  let isHomePage = pathname === '/'

  return (
    <div className="flex w-full flex-col">
      <Header />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex w-full max-w-[92rem] flex-auto flex-col-reverse justify-center sm:px-2 lg:flex-row">
        {!isHomePage && (
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 left-0 w-[50vw] dark:hidden" />
            <div className="absolute top-16 bottom-0 left-0 hidden h-12 w-px bg-linear-to-t from-slate-800 dark:block" />
            <div className="absolute top-28 bottom-0 left-0 hidden w-px bg-slate-800 dark:block" />
            <div className="main-nav sticky top-[4.75rem] -mr-0.5 h-[calc(100vh-4.75rem)] overflow-x-hidden overflow-y-auto py-16 pr-0.5 pl-8 xl:w-80 xl:pl-8">
              <Navigation />
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  )
}
