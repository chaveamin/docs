import { PasswordProvider } from '@/context/PasswordContext'
import PasswordModal from '@/components/PasswordModal'

export default function DocsLayout({ children }) {
  return (
    <PasswordProvider>
      <PasswordModal />
      {children}
    </PasswordProvider>
  )
}
