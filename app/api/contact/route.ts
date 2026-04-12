import { NextRequest, NextResponse } from 'next/server';
import { insertLead } from '@/lib/db';
import { sendEmail, generateLeadNotificationEmail, generateAutoReplyEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, source } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Save lead to database
    const leadId = insertLead({
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      service: service || undefined,
      budget: budget || undefined,
      message: message || undefined,
      source: source || 'website',
      status: 'new',
    });

    // Send notification email to team (non-blocking)
    if (process.env.CONTACT_EMAIL_TO && process.env.SMTP_USER) {
      const notificationHtml = generateLeadNotificationEmail({
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
      });

      sendEmail({
        to: process.env.CONTACT_EMAIL_TO,
        subject: `New Lead #${leadId}: ${name} from ${company || 'Unknown Brand'} — ${service || 'General Enquiry'}`,
        html: notificationHtml,
        replyTo: email,
      }).catch(console.error);

      // Send auto-reply to customer (non-blocking)
      const autoReplyHtml = generateAutoReplyEmail(name);
      sendEmail({
        to: email,
        subject: 'We\'ve received your enquiry — Heritage Apparels',
        html: autoReplyHtml,
      }).catch(console.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been submitted successfully. We\'ll be in touch within 24 hours.',
        leadId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An internal error occurred. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Heritage Apparels Contact API is running.' },
    { status: 200 }
  );
}
