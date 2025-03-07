'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const PASSWORD_KEY_PREFIX = 'doc_password_'

// Define only the pages that should be password protected
const PAGE_PASSWORDS = {
  '/docs/adminx': 'admin123',
  '/docs/lagom': 'lagom456',
  '/docs/shufytheme': 'shufy789',
  '/docs/sodium': 'sodium999',
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
    // Only protect pages that exist in PAGE_PASSWORDS
    if (!PAGE_PASSWORDS[pathname]) {
      setIsAuthenticated(true) // Automatically grant access if not listed
      return
    }

    // Check if the stored password is correct
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
