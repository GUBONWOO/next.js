import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('working');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들우ㅠㅔ어');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}
