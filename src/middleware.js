import { NextResponse } from 'next/server'

export const protectedPages = {
  '/lagom': process.env.NEXT_PUBLIC_PASSWORD_LAGOM,
  '/website-builder': process.env.NEXT_PUBLIC_PASSWORD_BUILDER,
  '/extensions/client-notifications':
    process.env.NEXT_PUBLIC_PASSWORD_CLIENTNOTIF,
  '/extensions/promotion-manager': process.env.NEXT_PUBLIC_PASSWORD_PROMO,
  '/extensions/email-template': process.env.NEXT_PUBLIC_PASSWORD_MAIL,
}

export function middleware(req) {
  const url = req.nextUrl.pathname
  let protectedPath = null

  for (const path in protectedPages) {
    if (url.startsWith(path)) {
      protectedPath = path
      break
    }
  }

  if (protectedPath) {
    const cookie = req.cookies.get(`authenticated_${protectedPath}`)

    if (!cookie) {
      const newUrl = req.nextUrl.clone()
      newUrl.pathname = '/auth'
      newUrl.searchParams.set('page', protectedPath)
      newUrl.searchParams.set('redirect', url)
      return NextResponse.redirect(newUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/lagom/:path*',
    '/website-builder/:path*',
    '/extensions/client-notifications/:path*',
    '/extensions/promotion-manager/:path*',
    '/extensions/email-template/:path*',
  ],
}
