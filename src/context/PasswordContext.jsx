'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const PASSWORD_KEY_PREFIX = 'doc_password_'

const PAGE_PASSWORDS = {
  '/docs/lagom': process.env.NEXT_PUBLIC_PASSWORD_LAGOM,
}

const PasswordContext = createContext({
  isAuthenticated: false,
  authenticate: (password) => {},
})

export const PasswordProvider = ({ children }) => {
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const getProtectedPath = () => {
    return Object.keys(PAGE_PASSWORDS).find((protectedPath) =>
      pathname.startsWith(protectedPath),
    )
  }

  useEffect(() => {
    const protectedPath = getProtectedPath()
    if (!protectedPath) {
      setIsAuthenticated(true)
      return
    }

    const storedPasswordKey = PASSWORD_KEY_PREFIX + protectedPath
    const storedPassword = localStorage.getItem(storedPasswordKey)

    if (storedPassword === PAGE_PASSWORDS[protectedPath]) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [pathname])

  const authenticate = (password) => {
    const protectedPath = getProtectedPath()
    if (protectedPath && password === PAGE_PASSWORDS[protectedPath]) {
      localStorage.setItem(PASSWORD_KEY_PREFIX + protectedPath, password)
      setIsAuthenticated(true)
    }
  }

  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </PasswordContext.Provider>
  )
}

export const usePassword = () => useContext(PasswordContext)
