import EmailTemplate from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend('re_Rg2CyoBk_LvZDwKrtCiGYkpctMmPmjCr7');

export async function POST(request: NextRequest) {
  const { senderEmail, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "nilaypatel309@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: EmailTemplate({
        message: message,
        senderEmail: senderEmail,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
