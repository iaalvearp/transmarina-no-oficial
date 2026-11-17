import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  let pathname = request.nextUrl.pathname

  try {
    pathname = decodeURIComponent(pathname)
  } catch {
    return NextResponse.next()
  }

  if (pathname === '/productos/atún') {
    const destination = request.nextUrl.clone()
    destination.pathname = '/productos/atun'
    return NextResponse.rewrite(destination)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/productos/:path*'],
}
