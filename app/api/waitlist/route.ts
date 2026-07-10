import { db } from "@/lib/db";
import { waitlist } from "@/lib/db/schema";
import { addToBrevoWaitlist, sendWaitlistConfirmation } from "@/lib/brevo";
import { NextResponse, after } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase();
    await db.insert(waitlist).values({ email: normalizedEmail });

    // Sync to Brevo and send the confirmation email after the response is
    // sent — keeps signup fast and never lets a Brevo hiccup block or fail
    // the waitlist insert.
    after(async () => {
      await addToBrevoWaitlist(normalizedEmail);
      await sendWaitlistConfirmation(normalizedEmail);
    });

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Handle duplicate email (unique constraint violation)
    if (
      error instanceof Error &&
      error.message.includes("duplicate key")
    ) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
