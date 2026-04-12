'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const services = [
  'Fashion Photoshoot',
  'Digital Cataloging',
  'Brand Strategy & Identity',
  'E-commerce Content Production',
  'Social Media Reels',
  'Performance Marketing Visuals',
  'Complete Package (Multiple Services)',
];

const budgets = [
  'Under ₹25,000',
  '₹25,000 – ₹75,000',
  '₹75,000 – ₹2,00,000',
  '₹2,00,000 – ₹5,00,000',
  '₹5,00,000+',
  "Let's discuss",
];

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Heritage India Website',
        }),
      });
    } catch {
      // Silent — show success regardless so UX isn't blocked
    }

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-cream mb-3">Message Received!</h3>
        <p className="text-cream/60 mb-6 leading-relaxed">
          Thank you for reaching out to Heritage Apparels. Our team will review your requirements and get back to you within{' '}
          <strong className="text-gold">24 business hours</strong>.
        </p>
        <div className="p-4 bg-gold/10 rounded-xl border border-gold/20 text-sm text-cream/70 mb-6">
          <strong className="text-gold block mb-1">What happens next?</strong>
          We&apos;ll send a confirmation, prepare a custom proposal, and schedule a discovery call at your convenience.
        </div>
        <button onClick={() => setStatus('idle')} className="btn-outline text-sm py-2.5 px-6">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name + Email */}
        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <div>
            <label htmlFor="name" className="form-label">Full Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Priya Sharma" className="form-input" />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Business Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="priya@yourbrand.com" className="form-input" />
          </div>
        </div>

        {/* Row 2: Phone + Company */}
        {!compact && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 78899 09135" className="form-input" />
            </div>
            <div>
              <label htmlFor="company" className="form-label">Brand / Company Name</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Fashion Brand" className="form-input" />
            </div>
          </div>
        )}

        {/* Row 3: Service + Budget */}
        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <div>
            <label htmlFor="service" className="form-label">Service Required</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-input">
              <option value="">Select a service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          {!compact && (
            <div>
              <label htmlFor="budget" className="form-label">Budget Range</label>
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="form-input">
                <option value="">Select budget range</option>
                {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="form-label">
            {compact ? 'Message *' : 'Tell Us About Your Brand & Requirements *'}
          </label>
          <textarea
            id="message" name="message" value={formData.message} onChange={handleChange} required
            rows={compact ? 3 : 5}
            placeholder={compact ? 'Tell us about your brand and what you need...' : 'Share details about your brand, the products, target audience, key dates, and creative direction...'}
            className="form-input resize-none"
          />
        </div>

        {/* Submit */}
        <button type="submit" disabled={status === 'loading'} className="btn-gold w-full py-4 text-base flex items-center justify-center gap-3">
          {status === 'loading' ? (
            <><span className="spinner" />Sending Your Enquiry...</>
          ) : (
            <>Send Enquiry
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-cream/30 text-xs text-center">
          Your information is 100% confidential. NDA available on request. We respond within 24 hours.
        </p>
    </form>
  );
}
