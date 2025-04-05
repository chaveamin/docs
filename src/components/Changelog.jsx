import React from 'react'
import clsx from 'clsx'

const LableStyles = {
  NEW: 'bg-green-50 text-green-800',
  FIX: 'bg-red-50 text-red-800',
  IMPROVEMENT: 'bg-blue-100 text-blue-800',
}

const Label = ({ type }) => {
  return (
    <span
      className={clsx(
        'rounded-md px-2 py-1 text-sm font-semibold',
        LableStyles[type] ||
          'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      )}
    >
      {type}
    </span>
  )
}

export default function Changelog({ version, date, compatibility, children }) {
  const localeDate = new Date(date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <details className="group my-6 flex w-full flex-col items-start rounded-lg px-8 py-4 ring shadow-sm ring-zinc-200">
      <summary className="relative flex w-full cursor-pointer items-center justify-between">
        <div className="ml-4 flex w-full flex-col">
          <h4 className="!m-0 flex !-translate-x-0 items-center text-2xl !font-extrabold">
            نسخه {version}
          </h4>
          <div className="flex w-full justify-between">
            <p className="text-base text-zinc-500">
              تاریخ انتشار:{' '}
              <time className="font-bold text-zinc-800">{localeDate}</time>
            </p>
            <p>
              سازگار با{' '}
              <span className="font-bold text-zinc-800">{compatibility}</span>
            </p>
            <p></p>
          </div>
        </div>
        <a
          className="w-34 rounded-lg bg-blue-600 px-4 py-2 text-white !shadow-none transition-colors hover:bg-blue-500"
          href="#"
        >
          خرید و دانلود
        </a>
      </summary>
      <div className="overflow-hidden">{children}</div>
    </details>
  )
}
