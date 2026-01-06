import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { email } = await request.json();

        // 1. Notify Admin
        await resend.emails.send({
            from: 'weleba <onboarding@resend.dev>',
            to: ['maj583601@gmail.com'],
            subject: 'New Newsletter Subscriber',
            html: `
        <p>New subscriber: <strong>${email}</strong></p>
      `,
        });

        // 2. Send Welcome Email to Subscriber
        const data = await resend.emails.send({
            from: 'weleba <onboarding@resend.dev>',
            to: [email],
            subject: 'Welcome to weleba Newsletter',
            html: `
        <h1>Welcome to weleba!</h1>
        <p>Thank you for subscribing to our newsletter. You'll be the first to know about our latest updates, industry insights, and new features.</p>
        <p>Best regards,<br/>The weleba Team</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
