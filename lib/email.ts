import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

interface LeadEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions): Promise<boolean> {
  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Heritage Apparels" <${process.env.CONTACT_EMAIL_FROM || process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo,
    });
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export function generateLeadNotificationEmail(data: LeadEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead - Heritage Apparels</title>
  <style>
    body { font-family: Georgia, serif; background: #f8f4ef; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1a1a2e; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 30px; text-align: center; border-bottom: 3px solid #c9a84c; }
    .header h1 { color: #c9a84c; font-size: 24px; margin: 0; letter-spacing: 2px; }
    .header p { color: #f8f4ef; margin: 8px 0 0; opacity: 0.8; }
    .body { padding: 30px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid rgba(201, 168, 76, 0.2); padding-bottom: 15px; }
    .field:last-child { border-bottom: none; }
    .label { color: #c9a84c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
    .value { color: #f8f4ef; font-size: 16px; }
    .footer { background: rgba(201, 168, 76, 0.1); padding: 20px; text-align: center; }
    .footer p { color: #c9a84c; margin: 0; font-size: 14px; }
    .badge { display: inline-block; background: #c9a84c; color: #1a1a2e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Heritage Apparels</h1>
      <p>New Lead Received</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${data.email}" style="color: #c9a84c;">${data.email}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${data.phone}" style="color: #c9a84c;">${data.phone}</a></div>
      </div>` : ''}
      ${data.company ? `
      <div class="field">
        <div class="label">Company / Brand</div>
        <div class="value">${data.company}</div>
      </div>` : ''}
      ${data.service ? `
      <div class="field">
        <div class="label">Service Required</div>
        <div class="value"><span class="badge">${data.service}</span></div>
      </div>` : ''}
      ${data.budget ? `
      <div class="field">
        <div class="label">Budget</div>
        <div class="value">${data.budget}</div>
      </div>` : ''}
      ${data.message ? `
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>` : ''}
    </div>
    <div class="footer">
      <p>Heritage Apparels — CRM Dashboard</p>
      <p style="margin-top: 8px; opacity: 0.7; font-size: 12px;">This lead was captured from the website contact form.</p>
    </div>
  </div>
</body>
</html>
  `;
}

export function generateAutoReplyEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Heritage Apparels</title>
  <style>
    body { font-family: Georgia, serif; background: #f8f4ef; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1a1a2e; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 40px 30px; text-align: center; border-bottom: 3px solid #c9a84c; }
    .header h1 { color: #c9a84c; font-size: 28px; margin: 0; letter-spacing: 2px; }
    .header p { color: #f8f4ef; margin: 12px 0 0; opacity: 0.8; font-size: 16px; }
    .body { padding: 40px 30px; }
    .body p { color: #f8f4ef; line-height: 1.8; font-size: 16px; margin-bottom: 20px; }
    .highlight { color: #c9a84c; font-weight: bold; }
    .cta-button { display: block; background: linear-gradient(135deg, #c9a84c, #f5d98b); color: #1a1a2e; text-decoration: none; padding: 15px 30px; border-radius: 8px; text-align: center; font-weight: bold; font-size: 16px; margin: 30px 0; letter-spacing: 1px; }
    .services { background: rgba(201, 168, 76, 0.1); border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 3px solid #c9a84c; }
    .services h3 { color: #c9a84c; margin-top: 0; }
    .services ul { color: #f8f4ef; padding-left: 20px; }
    .services ul li { margin-bottom: 8px; }
    .footer { background: rgba(201, 168, 76, 0.1); padding: 25px; text-align: center; }
    .footer p { color: #c9a84c; margin: 0; font-size: 14px; }
    .social-links { margin-top: 15px; }
    .social-links a { color: #c9a84c; text-decoration: none; margin: 0 10px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Heritage Apparels</h1>
      <p>Where Fashion Meets Digital Excellence</p>
    </div>
    <div class="body">
      <p>Dear <span class="highlight">${name}</span>,</p>
      <p>Thank you for reaching out to Heritage Apparels! We're thrilled to hear from you and are excited about the possibility of working together to elevate your brand's visual presence.</p>
      <p>Your inquiry has been received and a member of our team will be in touch with you within <span class="highlight">24 business hours</span>.</p>
      <div class="services">
        <h3>What Happens Next?</h3>
        <ul>
          <li>Our creative director will review your requirements</li>
          <li>We'll prepare a customized proposal for your brand</li>
          <li>Schedule a discovery call to understand your vision better</li>
          <li>Present our approach, timeline, and investment details</li>
        </ul>
      </div>
      <p>In the meantime, feel free to explore our portfolio and blog for inspiration and insights on how we've helped brands like yours achieve their visual goals.</p>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com'}/portfolio" class="cta-button">Explore Our Portfolio →</a>
      <p>If you have any urgent queries, please don't hesitate to reach us directly at <a href="mailto:hello@heritageapparels.com" style="color: #c9a84c;">hello@heritageapparels.com</a> or call us at <a href="tel:+919876543210" style="color: #c9a84c;">+91 98765 43210</a>.</p>
    </div>
    <div class="footer">
      <p><strong>Heritage Apparels</strong> — Fashion Photography & Digital Cataloging Agency</p>
      <p style="margin-top: 8px; opacity: 0.7;">Mumbai | Delhi | Bangalore | Pan-India Service</p>
      <div class="social-links">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
