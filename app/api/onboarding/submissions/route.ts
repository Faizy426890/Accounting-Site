// ── /api/onboarding/submissions/route.ts ─────────────────────────────────────
// GET  → fetch all submissions (no password)
// File: app/api/onboarding/submissions/route.ts

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

// ── GET /api/onboarding/submissions ──────────────────────────────────────────
export async function GET(request: NextRequest) {
  if (!authGuard(request))
    return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });

  try {
    const db = await getDb();
    const submissions = await db
      .collection(COLLECTION)
      .find({}, { projection: { password: 0, _id: 0 } })
      .sort({ submittedAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, count: submissions.length, submissions });
  } catch (err) {
    console.error('[GET submissions]', err);
    return NextResponse.json({ success: false, message: 'Database error.' }, { status: 500 });
  }
}