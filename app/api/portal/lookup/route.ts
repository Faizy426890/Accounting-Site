// File: app/api/portal/lookup/route.ts
// POST → match email against onboarding_submissions, return portalUrl

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

export async function POST(request: NextRequest) {
  let body: { email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  const email = body.email?.toLowerCase().trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Please enter a valid email address.' },
      { status: 422 }
    );
  }

  try {
    const db = await getDb();
    const record = await db
      .collection(COLLECTION)
      .findOne({ email }, { projection: { portalUrl: 1, portalName: 1, _id: 0 } });

    if (!record) {
      return NextResponse.json(
        { success: false, message: 'No portal found for this email address.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      portalUrl: record.portalUrl,
      portalName: record.portalName,
    });
  } catch (err) {
    console.error('[Portal Lookup Error]', err);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}