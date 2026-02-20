import { NextRequest, NextResponse } from 'next/server';

interface OnboardingPayload {
  email: string;
  password: string;
  portalName: string;
  portalUrl: string;
}

// ── In-memory store (replace with a real DB in production) ────────────────────
const submissions: (Omit<OnboardingPayload, 'password'> & { id: string; submittedAt: string })[] = [];

// ── Field validators ──────────────────────────────────────────────────────────
function validate(body: Partial<OnboardingPayload>): string | null {
 
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return 'A valid email address is required.';
  if (!body.password || body.password.length < 8)
    return 'Password must be at least 8 characters.';
  if (!body.portalName || !body.portalName.trim())
    return 'Client portal name is required.';
  if (!body.portalUrl || !/^https?:\/\/.+\..+/.test(body.portalUrl))
    return 'A valid portal URL starting with https:// is required.';
  return null;
}

// ── POST /api/onboarding/submit ───────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Require authenticated session
  const session = request.cookies.get('nexus_session');
  if (!session?.value) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized. Please sign in first.' },
      { status: 401 }
    );
  }

  let body: Partial<OnboardingPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON body.' },
      { status: 400 }
    );
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json(
      { success: false, message: validationError },
      { status: 422 }
    );
  }

  const record = {
    id: `ONB-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
    email: body.email!.toLowerCase().trim(),
    portalName: body.portalName!.trim(),
    portalUrl: body.portalUrl!.trim(),
    submittedAt: new Date().toISOString(),
  };

  submissions.push(record);

  console.log('[Onboarding Submitted]', record);

  return NextResponse.json(
    {
      success: true,
      message: 'Client portal provisioned successfully.',
      data: record,
    },
    { status: 201 }
  );
}

// ── GET /api/onboarding/submit — retrieve all submissions ─────────────────────
export async function GET(request: NextRequest) {
  const session = request.cookies.get('nexus_session');
  if (!session?.value) {
    return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    count: submissions.length,
    submissions,
  });
}