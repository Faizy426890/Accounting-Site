import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_ROUTES = ['/client-onBoarding'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    const session = request.cookies.get('nexus_session');

    if (!session || !session.value) {
      const signupUrl = new URL('/onboarding/signup', request.url);
      // Pass the originally requested path so we can redirect back after signup/login
      signupUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(signupUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/client-onBoarding/:path*'],
};