import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().email(),
  message: z.string().trim().min(10).max(2000),
});

const ensureEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

const formatRecipients = (raw: string): string[] =>
  raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const toEmail = ensureEnv("CONTACT_TO_EMAIL");
    const fromEmail = ensureEnv("CONTACT_FROM_EMAIL");

    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      const details = parsed.error.flatten().fieldErrors;
      return res.status(400).json({ error: "Invalid input", details });
    }

    const { name, email, message } = parsed.data;

    await resend.emails.send({
      from: fromEmail,
      to: formatRecipients(toEmail),
      replyTo: email,
      subject: `Papaya contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ message: "Message delivered" });
  } catch (error) {
    console.error("Contact API error", error);
    if (error instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid JSON payload" });
    }
    return res.status(500).json({ error: "Unable to send message" });
  }
}
