import { NextRequest, NextResponse } from 'next/server';

const VALID_USERNAME = 'nexusacct.com';
const VALID_PASSWORD = 'nexus@230';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username and password are required.' },
        { status: 400 }
      );
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      const response = NextResponse.json(
        {
          success: true,
          message: 'Authentication successful.',
          user: {
            username,
            role: 'client',
            portal: 'onboarding',
          },
        },
        { status: 200 }
      );

      // Set a simple session cookie
      response.cookies.set('nexus_session', Buffer.from(username).toString('base64'), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Invalid username or password.' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}