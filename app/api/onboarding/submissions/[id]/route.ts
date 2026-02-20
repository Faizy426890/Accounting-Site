// File: app/api/onboarding/submissions/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://mikerehabaccomp_db_user:waTCHDOGS426890@cluster0.faysqxz.mongodb.net/?appName=Cluster0';
const DB_NAME = 'nexus';
const COLLECTION = 'onboarding_submissions';

let client: MongoClient | null = null;
async function getDb() {
  if (!client) {
    client = new MongoClient(MONGODB_URI, {
      serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    });
    await client.connect();
  }
  return client.db(DB_NAME);
}

function authGuard(request: NextRequest) {
  const session = request.cookies.get('nexus_session');
  return !!session?.value;
}

// ── PUT /api/onboarding/submissions/[id] ─────────────────────────────────────
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }   // ← Promise type
) {
  if (!authGuard(request))
    return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });

  const { id } = await params;   // ← await here

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON.' }, { status: 400 });
  }

  const allowed = ['email', 'portalName', 'portalUrl'];
  const updates: Record<string, string> = {};

  for (const key of allowed) {
    if (body[key] !== undefined) {
      updates[key] = key === 'email' ? body[key].toLowerCase().trim() : body[key].trim();
    }
  }

  if (Object.keys(updates).length === 0)
    return NextResponse.json({ success: false, message: 'No valid fields to update.' }, { status: 400 });

  if (updates.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updates.email))
    return NextResponse.json({ success: false, message: 'Invalid email address.' }, { status: 422 });
  if (updates.portalUrl && !/^https?:\/\/.+\..+/.test(updates.portalUrl))
    return NextResponse.json({ success: false, message: 'Invalid portal URL.' }, { status: 422 });

  try {
    const db = await getDb();
    const result = await db
      .collection(COLLECTION)
      .findOneAndUpdate(
        { id },
        { $set: { ...updates, updatedAt: new Date().toISOString() } },
        { returnDocument: 'after', projection: { password: 0, _id: 0 } }
      );

    if (!result)
      return NextResponse.json({ success: false, message: 'Submission not found.' }, { status: 404 });

    return NextResponse.json({ success: true, message: 'Updated successfully.', data: result });
  } catch (err) {
    console.error('[PUT submission]', err);
    return NextResponse.json({ success: false, message: 'Database error.' }, { status: 500 });
  }
}

// ── DELETE /api/onboarding/submissions/[id] ───────────────────────────────────
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }   // ← Promise type
) {
  if (!authGuard(request))
    return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });

  const { id } = await params;   // ← await here

  try {
    const db = await getDb();
    const result = await db.collection(COLLECTION).deleteOne({ id });

    if (result.deletedCount === 0)
      return NextResponse.json({ success: false, message: 'Submission not found.' }, { status: 404 });

    return NextResponse.json({ success: true, message: 'Deleted successfully.' });
  } catch (err) {
    console.error('[DELETE submission]', err);
    return NextResponse.json({ success: false, message: 'Database error.' }, { status: 500 });
  }
}