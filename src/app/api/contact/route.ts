import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplateContactUs } from "@/app/_components/email-templates/email-template-contact-us";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { fullName, email, phone, message } = body;

  if (!message || !email || !fullName) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const resend = new Resend("re_jHxshQ79_CwagB3Bzio5dnnbtkx53RUb2");

  try {
    const { data, error } = await resend.emails.send({
      from: `Contact us - TS GLOBAL TECH <team@tsglobaltech.com>`,
      to: ["team@tsglobaltech.com"],
      subject: "Contact us - Request",
      react: EmailTemplateContactUs({ fullName, email, phone, message }),
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
