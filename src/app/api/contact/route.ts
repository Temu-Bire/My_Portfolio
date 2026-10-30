import { NextResponse } from "next/server";
import { z } from "zod";

// Server-side validation
const contactSchema = z.object({
    name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name must not exceed 100 characters.")
    .regex(
        /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u,
        "Name can only contain letters, spaces, hyphens and apostrophes.",
    ),
  email: z.string().trim().email("Please enter a valid email address.").max(200),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(150, "Subject must be 150 characters or fewer."),

  message: z
    .string()
    .trim()
    .min(10, "Your message is a bit short. Please add more detail.")
    .max(3000, "Your message is too long (3000 characters maximum)."),

  website: z.string().optional(), // Honeypot
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ??
          "Please check the form and try again.",
      },
      { status: 400 },
    );
  }

  const { name, email, subject: visitorSubject, message, website } = parsed.data;

  // Honeypot protection
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.",
    );

    return NextResponse.json(
      { error: "The contact form is not available right now." },
      { status: 500 },
    );
  }

  // Remove line breaks to prevent email header injection
  const safeSubject = visitorSubject.replace(/[\r\n]+/g, " ");

  const text = `Name: ${name}
Email: ${email}
Subject: ${safeSubject}

Message:
${message}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio: ${safeSubject}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error(
        "Contact form: Resend error",
        response.status,
        await response.text(),
      );

      return NextResponse.json(
        { error: "Your message could not be sent. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: request failed", error);

    return NextResponse.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 502 },
    );
  }
}