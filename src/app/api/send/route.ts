import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { to_name, subject, text, url } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "confirmation@resend.dev",
      to: [`david.estrelloso.tribugenia@gmail.com`],
      subject: "Email Confirmation",
      react: EmailTemplate({
        to_name,
        subject,
        text,
        url,
      }) as React.ReactElement,
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
