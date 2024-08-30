import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplateContactUs } from "@/app/_components/email-templates/email-template-contact-us";
import { EmailTemplateContactUsThankyou } from "@/app/_components/email-templates/email-template-contact-us-thankyou";

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

    await sendThankyouMail(fullName, email);

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

async function sendThankyouMail(fullName: string, email: string) {
  try {
    const resend = new Resend("re_jHxshQ79_CwagB3Bzio5dnnbtkx53RUb2");

    const { data, error } = await resend.emails.send({
      from: `TEAM - TS GLOBAL TECH <team@tsglobaltech.com>`,
      to: [email],
      subject: "Thanks to contact TS GLOBAL TECH - Automatic reply",
      react: EmailTemplateContactUsThankyou({ fullName, email }),
    });

    if (error) {
      console.error("Error in sending Thankyou mail", error);
    } else {
    }
  } catch (error) {
    console.error("Catch error in sending Thankyou mail", error);
  }
}
