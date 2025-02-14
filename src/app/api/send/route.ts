import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { to_name, to, subject, text } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "confirmation@noreply.rf.gd",
      to: [`${to}`],
      subject: "Email Confirmation",
      react: EmailTemplate({ to_name, subject, text }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// yAzlk25KFk
