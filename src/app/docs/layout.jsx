'use client' // Ensure it's a client component

import { PasswordProvider } from '@/context/PasswordContext'
import PasswordModal from '@/components/PasswordModal'
import ProtectedContent from '@/components/ProtectedContent'

export default function DocsLayout({ children }) {
  return (
    <PasswordProvider>
      <PasswordModal />
      <ProtectedContent>{children}</ProtectedContent>
    </PasswordProvider>
  )
}
