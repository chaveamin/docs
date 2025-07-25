import localFont from 'next/font/local'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'
import NextTopLoader from 'nextjs-toploader'

const iranyekan = localFont({
  src: '../fonts/IRANYekanXVFaNumVF.woff2',
  weight: '100 900',
  variable: '--font-iranyekan',
})

export const metadata = {
  title: {
    template: '%s - راهنمای محصولات امین چاوه پور',
    default: 'راهنمای محصولات امین چاوه پور',
  },
  description: 'راهنمای محصولات امین چاوه پور',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`h-full antialiased ${iranyekan.variable} font-iranyekan`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-zinc-900">
        <Providers>
          <Layout>
            <NextTopLoader color="#2563eb" height={2} />
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
