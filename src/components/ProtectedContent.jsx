'use client' // Ensure this is a client component

import { usePassword } from '@/context/PasswordContext'

const ProtectedContent = ({ children }) => {
  const { isAuthenticated } = usePassword()

  if (!isAuthenticated) {
    return null // Prevent content from rendering until authenticated
  }

  return children // Show content only after authentication
}

export default ProtectedContent
