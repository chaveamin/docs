'use client'

import { useEffect, useState } from 'react'
import { usePassword } from '@/context/PasswordContext'
import { usePathname } from 'next/navigation'

const PasswordModal = () => {
  const { isAuthenticated, authenticate } = usePassword()
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const [error, setError] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    if (isAuthenticated) {
      setIsOpen(false)
    }
  }, [isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!password.trim()) {
      setError('رمز عبور نباید خالی باشد.')
      return
    }

    const previousAuthState = isAuthenticated
    authenticate(password)

    if (!previousAuthState) {
      setError('رمز عبور اشتباه است.')
    }
  }

  if (!isOpen || isAuthenticated) return null

  return (
    <div className="bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center backdrop-blur-3xl">
      <div className="rounded-xl bg-white p-6 text-center ring shadow-sm shadow-zinc-800/5 ring-zinc-200">
        <p className="font-ligh mb-2 text-lg text-zinc-800">
          دسترسی این صفحه محدود شده است. رمز عبور در پکیج محصول خریداری شده موجو
          است.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full rounded-md border p-2 placeholder:text-zinc-300 focus:ring-4 focus:ring-blue-600/7 focus:outline-blue-500"
            placeholder="*********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError('')
            }}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="mt-3 w-full cursor-pointer rounded-md bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordModal
