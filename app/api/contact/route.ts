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

    // Submit to Zoho CRM server-side (non-blocking, avoids CORS/iframe issues)
    const zohoDescription = [
      `Source: ${source || 'Heritage Website'}`,
      service  ? `Service: ${service}`   : '',
      budget   ? `Budget: ${budget}`     : '',
      message  ? `Message: ${message}`   : '',
    ].filter(Boolean).join('\n');

    const zohoParams = new URLSearchParams({
      xnQsjsdp:     'e9703cfe651335218f44f87e3b8b1e8e7de2abfa670d4095a27e0b5e1d71507d',
      zc_gad:       '',
      xmIwtLD:      '1d770236f69ca18d5e5a93b7af498f9cfdda1b0f0dfee64ca92e2a4b3ac67e5a1cff121b5a0767bbd0c67fd99700978e',
      actionType:   'TGVhZHM=',
      returnURL:    'https://www.heritageapparels.com/',
      'Last Name':  name,
      Email:        email || '',
      Phone:        phone || '',
      Company:      company || name,
      'Lead Source': 'Online Store',
      Description:  zohoDescription,
      aG9uZXlwb3Q: '',
    });

    // Submit to Zoho CRM (non-blocking)
    fetch('https://crm.zoho.in/crm/WebToLeadForm', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    zohoParams.toString(),
    }).catch(console.error);

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
