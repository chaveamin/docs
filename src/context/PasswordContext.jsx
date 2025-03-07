'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const PASSWORD_KEY_PREFIX = 'doc_password_'

// Load passwords from environment variables
const PAGE_PASSWORDS = {
  '/docs/adminx': process.env.NEXT_PUBLIC_PASSWORD_ADMINX,
  '/docs/lagom': process.env.NEXT_PUBLIC_PASSWORD_LAGOM,
  '/docs/shufytheme': process.env.NEXT_PUBLIC_PASSWORD_SHUFYTHEME,
  '/docs/sodium': process.env.NEXT_PUBLIC_PASSWORD_SODIUM,
}

const PasswordContext = createContext({
  isAuthenticated: false,
  authenticate: (password) => {},
})

export const PasswordProvider = ({ children }) => {
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const storedPasswordKey = PASSWORD_KEY_PREFIX + pathname

  useEffect(() => {
    if (!PAGE_PASSWORDS[pathname]) {
      setIsAuthenticated(true)
      return
    }

    const storedPassword = localStorage.getItem(storedPasswordKey)
    if (storedPassword === PAGE_PASSWORDS[pathname]) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [pathname])

  const authenticate = (password) => {
    if (PAGE_PASSWORDS[pathname] && password === PAGE_PASSWORDS[pathname]) {
      localStorage.setItem(storedPasswordKey, password)
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password. Try again.')
    }
  }

  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </PasswordContext.Provider>
  )
}

export const usePassword = () => useContext(PasswordContext)
