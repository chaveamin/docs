import { NextResponse } from 'next/server'

export const protectedPages = {
  '/lagom': process.env.NEXT_PUBLIC_PASSWORD_LAGOM,
}

export function middleware(req) {
  const url = req.nextUrl.pathname
  const cookie = req.cookies.get(`authenticated_${url}`)

  if (protectedPages[url] && !cookie) {
    const newUrl = req.nextUrl.clone()
    newUrl.pathname = '/auth'
    newUrl.searchParams.set('page', url)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/lagom'],
}
