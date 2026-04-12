'use client';

import { useState } from 'react';

// ── Zoho CRM credentials ──────────────────────────────────────────
const ZOHO_ACTION    = 'https://crm.zoho.in/crm/WebToLeadForm';
const ZOHO_xnQsjsdp = 'e9703cfe651335218f44f87e3b8b1e8e7de2abfa670d4095a27e0b5e1d71507d';
const ZOHO_xmIwtLD  = '1d770236f69ca18d5e5a93b7af498f9cfdda1b0f0dfee64ca92e2a4b3ac67e5a1cff121b5a0767bbd0c67fd99700978e';
const ZOHO_RETURN   = 'https://www.heritageapparels.com/us/';
// ─────────────────────────────────────────────────────────────────

const usServices = [
  'India Manufacturing & Sourcing',
  'US Marketplace Onboarding (Amazon, Walmart, Etsy…)',
  'US Brand Launch (Full Package)',
  'US Performance Marketing',
  'Product Photography (US Format)',
  'US Compliance & Import Support',
  'Brand Strategy & Identity',
  'Social Media & Content (US Audience)',
];

const usBudgets = [
  'Under $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

/** Submit lead to Zoho CRM in background via hidden iframe */
function submitToZoho(data: FormData, source: string) {
  if (typeof window === 'undefined') return;

  const description = [
    `Source: ${source}`,
    data.service ? `Service: ${data.service}` : '',
    data.budget  ? `Budget (USD): ${data.budget}` : '',
    data.message ? `Message: ${data.message}` : '',
  ].filter(Boolean).join('\n');

  const fields: Record<string, string> = {
    xnQsjsdp:     ZOHO_xnQsjsdp,
    zc_gad:       '',
    xmIwtLD:      ZOHO_xmIwtLD,
    actionType:   'TGVhZHM=',
    returnURL:    ZOHO_RETURN,
    'Last Name':  data.name,
    Email:        data.email,
    Phone:        data.phone,
    Company:      data.company || data.name,
    'Lead Source': 'Online Store',
    Description:   description,
    aG9uZXlwb3Q:  '',
  };

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = ZOHO_ACTION;
  form.target = 'zoho_iframe_us';
  form.style.display = 'none';

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type  = 'hidden';
    input.name  = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  setTimeout(() => document.body.removeChild(form), 3000);
}

export default function USContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Submit to Zoho CRM in background
    submitToZoho(formData, 'Heritage USA Website');

    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-cream mb-3">Brief Received!</h3>
        <p className="text-cream/60 mb-6 leading-relaxed">
          Thank you! Our USA team will review your brief and respond within{' '}
          <strong className="text-gold">12 hours</strong> with a free US market eligibility report.
        </p>
        <div className="p-4 bg-gold/10 rounded-xl border border-gold/20 text-sm text-cream/70 mb-6">
          <strong className="text-gold block mb-1">What happens next?</strong>
          We&apos;ll prepare a free US marketplace eligibility report + India sourcing cost estimate, then schedule a 30-min strategy call.
        </div>
        <button onClick={() => setStatus('idle')} className="btn-outline text-sm py-2.5 px-6">
          Submit Another Brief
        </button>
      </div>
    );
  }

  const inputClass = 'w-full bg-charcoal/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors';
  const labelClass = 'text-cream/50 text-xs uppercase tracking-wider block mb-2';

  return (
    <>
      {/* Hidden iframe — catches Zoho redirect */}
      <iframe name="zoho_iframe_us" title="zoho-us" style={{ display: 'none' }} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone / WhatsApp</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Company / Brand Name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your brand" className={inputClass} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Service You Need *</label>
          <select name="service" value={formData.service} onChange={handleChange} required className={inputClass}>
            <option value="" className="bg-charcoal">Select a service...</option>
            {usServices.map((s) => <option key={s} value={s} className="bg-charcoal">{s}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>Estimated Budget (USD)</label>
          <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
            <option value="" className="bg-charcoal">Select budget range...</option>
            {usBudgets.map((b) => <option key={b} value={b} className="bg-charcoal">{b}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>Tell Us About Your Brand / Product *</label>
          <textarea
            name="message" value={formData.message} onChange={handleChange} required rows={5}
            placeholder="Describe your product, target US market, and what you're looking to achieve..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button type="submit" disabled={status === 'loading'} className="btn-gold w-full py-4 text-base font-semibold flex items-center justify-center gap-3">
          {status === 'loading' ? (
            <><span className="spinner" />Sending Brief...</>
          ) : (
            'Send Brief → Get Free US Market Report'
          )}
        </button>

        <p className="text-cream/30 text-xs text-center">
          No spam. No obligations. We respond within 12 hours in EST timezone.
        </p>
      </form>
    </>
  );
}
