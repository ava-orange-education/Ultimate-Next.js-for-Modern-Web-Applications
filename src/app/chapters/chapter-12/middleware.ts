import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request;

  if (nextUrl.pathname === '/') {
    const preferred =
      headers.get('accept-language')?.split(',')[0].split('-')[0] ?? 'en';

    if (preferred !== 'en') {
      return NextResponse.redirect(new URL(`/${preferred}`, request.url), 302);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};