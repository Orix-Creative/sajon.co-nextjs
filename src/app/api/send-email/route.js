import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
export const runtime = 'edge';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { toEmail, subject, text, html } = await request.json();

    const msg = {
      to: toEmail,
      from: 'your-email@example.com', // Replace with your verified sender email
      subject: subject || 'Resource Link',
      text: text || 'Here is your resource link.',
      html: html || '<strong>Here is your resource link.</strong>',
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error.response?.body || error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
