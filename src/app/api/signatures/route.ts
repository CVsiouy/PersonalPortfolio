import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// GET: Retrieve latest signatures
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const signatures = await db
      .collection("signatures")
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json(signatures, { status: 200 });
  } catch (error) {
    console.error("Database connection failed in GET /api/signatures:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST: Add new signature
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, image } = body;

    if (!name || !image) {
      return NextResponse.json(
        { error: "Name and image signature data are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const newSignature = {
      name: name.trim().slice(0, 50),
      image, // base64 canvas image data URL
      createdAt: new Date(),
    };

    await db.collection("signatures").insertOne(newSignature);

    return NextResponse.json(
      { message: "Signature successfully saved", signature: newSignature },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database connection failed in POST /api/signatures:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
