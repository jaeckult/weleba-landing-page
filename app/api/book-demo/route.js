import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { firstName, lastName, email, phone, propertyName, jobTitle, numRooms } = await request.json();

        const data = await resend.emails.send({
            from: 'weleba <onboarding@resend.dev>', // Update this with your verified domain if available
            to: ['maj583601@gmail.com'],
            subject: 'New Demo Request',
            html: `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property:</strong> ${propertyName}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Number of Rooms:</strong> ${numRooms}</p>
      `,
        });

        // Optional: Send auto-reply to user
        /*
        await resend.emails.send({
          from: 'weleba <onboarding@resend.dev>',
          to: [email],
          subject: 'We received your demo request!',
          html: `<p>Hi ${firstName}, thanks for requesting a demo. We'll be in touch shortly!</p>`,
        });
        */

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
