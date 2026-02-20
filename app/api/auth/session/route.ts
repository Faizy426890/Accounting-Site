import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const session = request.cookies.get('nexus_session');

  if (!session?.value) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Decode and verify the cookie value matches a known user
  try {
    const decoded = Buffer.from(session.value, 'base64').toString('utf-8');
    const isValid = decoded === 'nexusacct.com';

    if (!isValid) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      user: { username: decoded, role: 'client' },
    });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}