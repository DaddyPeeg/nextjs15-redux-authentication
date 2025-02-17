"use server";

export async function sendEmail({
  to_name,
  to,
  subject,
  text,
}: {
  to_name: string;
  to: string;
  subject: string;
  text: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(`INVALID API KEY`);
  }

  const message = {
    to_name: to_name.trim(),
    to: to.toLowerCase().trim(),
    subject: subject.trim(),
    text: text.trim(),
  };

  try {
    const send = await fetch(`${process.env.BETTER_AUTH_URL}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!send.ok) {
      throw Error(`Resend API returned status code ${send.status}`);
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
