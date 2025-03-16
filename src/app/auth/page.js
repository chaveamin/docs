'use client'

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8 rounded-md bg-blue-500/15 px-1.5 py-0.5 text-blue-700 dark:text-blue-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  )
}

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { protectedPages } from '@/middleware'

const PasswordProtect = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const page = searchParams.get('page')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (protectedPages[page] === password) {
      document.cookie = `authenticated_${page}=true; path=/`
      router.push(page)
    } else {
      setError('Incorrect password!')
    }
  }

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-4 backdrop-blur-3xl lg:px-0">
      <div className="relative flex w-sm flex-col items-center gap-y-2 rounded-xl bg-white p-6 text-center ring shadow-sm shadow-zinc-800/5 ring-zinc-200 lg:w-lg dark:bg-zinc-800 dark:ring-zinc-600">
        <LockIcon />
        <p className="font-ligh mb-2 text-lg text-zinc-800 dark:text-zinc-100">
          دسترسی به راهنمای این محصول محدود شده است. رمز عبور بعد از خرید در{' '}
          <a
            className="text-blue-600"
            href="https://designesia.ir/account/?tab=payments"
            target="_blank"
          >
            پنل کاربری
          </a>{' '}
          نمایش داده میشود.
        </p>
        <form className="flex w-full flex-col" onSubmit={handleSubmit}>
          {error && (
            <p className="mt-2 rounded-md bg-rose-400/15 p-1 text-sm text-rose-700 dark:bg-rose-400/10 dark:text-rose-400">
              {error}
            </p>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*****************"
            className="rounded-md border border-zinc-200 p-2 placeholder:text-zinc-300 focus:ring-4 focus:ring-blue-600/7 focus:outline-blue-500 dark:border-zinc-600 dark:placeholder:text-zinc-600"
          />
          <button
            type="submit"
            className="mt-3 cursor-pointer rounded-md bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordProtect
