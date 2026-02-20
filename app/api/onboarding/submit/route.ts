import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';
import bcrypt from 'bcryptjs';

interface OnboardingPayload {
  email: string;
  password: string;
  portalName: string;
  portalUrl: string;
}

// ── MongoDB Client ─────────────────────────────────────────────────────────────
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://mikerehabaccomp_db_user:waTCHDOGS426890@cluster0.faysqxz.mongodb.net/?appName=Cluster0';

const DB_NAME = 'nexus';
const COLLECTION_NAME = 'onboarding_submissions';

let client: MongoClient | null = null;

async function getDb() {
  if (!client) {
    client = new MongoClient(MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
  }
  return client.db(DB_NAME);
}

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

  try {
    const db = await getDb();
    const collection = db.collection(COLLECTION_NAME);

    // Check for duplicate email
    const existing = await collection.findOne({
      email: body.email!.toLowerCase().trim(),
    });
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'A submission with this email already exists.' },
        { status: 409 }
      );
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(body.password!, 12);

    const record = {
      id: `ONB-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      email: body.email!.toLowerCase().trim(),
      password: hashedPassword,
      portalName: body.portalName!.trim(),
      portalUrl: body.portalUrl!.trim(),
      submittedAt: new Date().toISOString(),
    };

    await collection.insertOne(record);

    console.log('[Onboarding Submitted]', {
      id: record.id,
      email: record.email,
      portalName: record.portalName,
      portalUrl: record.portalUrl,
      submittedAt: record.submittedAt,
    });

    // Return record without password
    const { password: _pw, ...safeRecord } = record;

    return NextResponse.json(
      {
        success: true,
        message: 'Client portal provisioned successfully.',
        data: safeRecord,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Onboarding DB Error]', error);
    return NextResponse.json(
      { success: false, message: 'Database error. Please try again.' },
      { status: 500 }
    );
  }
}

// ── GET /api/onboarding/submit — retrieve all submissions ─────────────────────
export async function GET(request: NextRequest) {
  const session = request.cookies.get('nexus_session');
  if (!session?.value) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized.' },
      { status: 401 }
    );
  }

  try {
    const db = await getDb();
    const collection = db.collection(COLLECTION_NAME);

    // Exclude password field from results
    const submissions = await collection
      .find({}, { projection: { password: 0, _id: 0 } })
      .sort({ submittedAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      count: submissions.length,
      submissions,
    });
  } catch (error) {
    console.error('[Onboarding DB Error]', error);
    return NextResponse.json(
      { success: false, message: 'Database error. Please try again.' },
      { status: 500 }
    );
  }
}