import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

export async function POST(req: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY env vars");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 },
      );
    }

    const body = await req.json();
    const email = (body.email ?? "").trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 },
      );
    }

    // Check if already on the list
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/waitlist?email=eq.${encodeURIComponent(email)}&select=email`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      },
    );

    if (!checkRes.ok) {
      throw new Error(`Supabase check failed: ${checkRes.status}`);
    }

    const existing = await checkRes.json();
    if (existing.length > 0) {
      return NextResponse.json({ message: "Already on the list" });
    }

    // Insert new entry
    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, created_at: new Date().toISOString() }),
    });

    if (!insertRes.ok) {
      throw new Error(`Supabase insert failed: ${insertRes.status}`);
    }

    return NextResponse.json({ message: "Added to waitlist" });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
