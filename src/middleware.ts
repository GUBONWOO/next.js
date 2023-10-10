import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('working');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    return NextResponse.redirect(new URL('/products', request.url));
  }
}
