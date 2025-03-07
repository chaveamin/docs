'use client'

import { useEffect, useState } from 'react'
import { usePassword } from '@/context/PasswordContext'
import { usePathname } from 'next/navigation'

const PasswordModal = () => {
  const { isAuthenticated, authenticate } = usePassword()
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname() // Detects route changes

  useEffect(() => {
    // When the route changes, reset modal state
    setIsOpen(true)
  }, [pathname]) // Re-run this when the user navigates to another page

  const handleSubmit = (e) => {
    e.preventDefault()
    authenticate(password)
  }

  if (!isOpen || isAuthenticated) return null

  return (
    <div className="bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center backdrop-blur-3xl">
      <div className="rounded-lg bg-white p-6 text-center ring shadow-sm shadow-zinc-800/5 ring-zinc-200">
        <h2 className="mb-2 text-lg font-semibold">رمز عبور</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full rounded-md border p-2 placeholder:text-zinc-300 focus:ring-4 focus:ring-blue-600/7 focus:outline-blue-600"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-3 w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordModal
