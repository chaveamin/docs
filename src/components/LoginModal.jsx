'use client'

import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginModal({ onClose }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      redirect: false,
      password,
    })

    if (!result.ok) {
      setError('Incorrect password')
    } else {
      router.refresh()
      onClose()
    }
  }

  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Enter Password</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 border p-2"
          />
          <button type="submit" className="bg-blue-500 p-2 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
