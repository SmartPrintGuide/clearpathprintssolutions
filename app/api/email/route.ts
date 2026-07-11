import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const SMTP_HOST = process.env.SMTP_HOST || 'mail.clearpathprintsolutions.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || 'support@clearpathprintsolutions.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'support@clearpathprintsolutions.com';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

interface EmailPayload {
  type: 'appointment' | 'contact';
  name: string;
  email: string;
  phone: string;
  printerModel: string;
  message?: string;
  details?: string;
}

export async function POST(request: Request) {
  try {
    const payload: EmailPayload = await request.json();

    if (!payload.name || !payload.email || !payload.phone || !payload.printerModel) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const subject =
      payload.type === 'appointment'
        ? 'New Appointment Request from Website'
        : 'New Contact Request from Website';

    const body = [`<h2>${subject}</h2>`];
    body.push(`<p><strong>Name:</strong> ${payload.name}</p>`);
    body.push(`<p><strong>Email:</strong> ${payload.email}</p>`);
    body.push(`<p><strong>Phone:</strong> ${payload.phone}</p>`);
    body.push(`<p><strong>Printer Model:</strong> ${payload.printerModel}</p>`);

    if (payload.type === 'appointment') {
      body.push(`<p><strong>Appointment Message:</strong> ${payload.message || 'N/A'}</p>`);
    } else {
      body.push(`<p><strong>Request Details:</strong> ${payload.details || 'N/A'}</p>`);
    }

    body.push('<p>Message sent from the Clear Path Print Solutions website form.</p>');

    await transporter.sendMail({
      from: `${SMTP_USER}`,
      to: RECEIVER_EMAIL,
      replyTo: payload.email,
      subject,
      html: body.join(''),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred while sending email.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
