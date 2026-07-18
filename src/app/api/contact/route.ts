import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Please complete all fields.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error: "One or more fields are too long.",
        },
        {
          status: 400,
        },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll(
      "\n",
      "<br />",
    );

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["raghulchan1311@gmail.com"],
      replyTo: email,
      subject: `Portfolio message: ${subject}`,
      html: `
        <div
          style="
            max-width: 640px;
            margin: 0 auto;
            padding: 32px;
            font-family: Arial, sans-serif;
            color: #111827;
          "
        >
          <h1 style="margin-bottom: 24px;">
            New portfolio message
          </h1>

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <p>
            <strong>Subject:</strong>
            ${safeSubject}
          </p>

          <div
            style="
              margin-top: 24px;
              padding: 20px;
              background: #f3f4f6;
              border-radius: 12px;
              line-height: 1.7;
            "
          >
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your message right now.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Your message was sent successfully.",
        id: data?.id,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}