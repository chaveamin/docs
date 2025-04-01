import { Suspense } from 'react'
import PasswordProtect from '@/components/PasswordProtect'

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PasswordProtect />
    </Suspense>
  )
}
