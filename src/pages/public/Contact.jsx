import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { InfoPageHero, InfoSection, SectionHeading } from './InfoPage'

const topics = ['General Enquiry', 'Report a Problem', 'Partnership', 'Press / Media', 'Technical Support', 'Safety Concern']

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Get in Touch"
        icon={MessageCircle}
        title="Contact"
        accent="Us"
        subtitle="Have a question, suggestion, or concern? We'd love to hear from you."
      />

      <InfoSection>
        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">How can we help?</h2>
            <p className="contact-info__desc">Our team typically responds within 4–8 business hours. For urgent safety concerns, we respond within 1 hour.</p>

            <div className="contact-info__items">
              {[
                { icon: Mail, label: 'Email', value: 'support@castindia.in' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { icon: MapPin, label: 'Office', value: 'Mumbai, Maharashtra, India' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="contact-info__item-label">{label}</p>
                    <p className="contact-info__item-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-hours">
              <h3 className="contact-hours__title">Support Hours</h3>
              <p className="contact-hours__text">Monday – Friday: 9 AM – 7 PM IST</p>
              <p className="contact-hours__text">Saturday: 10 AM – 4 PM IST</p>
              <p className="contact-hours__text">Sunday: Closed (Safety team available 24/7)</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 size={48} style={{ color: 'var(--color-verified)', marginBottom: '16px' }} />
                <h3 className="contact-success__title">Message Sent!</h3>
                <p className="contact-success__sub">Thanks for reaching out. We'll get back to you within 4–8 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-form__title">Send a Message</h3>

                <div className="account-form__grid">
                  <div className="account-form__field">
                    <label className="account-form__label">Your Name</label>
                    <input required className="account-form__input" style={{ paddingLeft: '16px' }} placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="account-form__field">
                    <label className="account-form__label">Email Address</label>
                    <input required type="email" className="account-form__input" style={{ paddingLeft: '16px' }} placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>

                <div className="account-form__field">
                  <label className="account-form__label">Topic</label>
                  <select required className="account-form__input" style={{ paddingLeft: '16px' }} value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })}>
                    <option value="">Select a topic</option>
                    {topics.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="account-form__field">
                  <label className="account-form__label">Message</label>
                  <textarea required rows={5} className="account-form__input" style={{ paddingLeft: '16px', paddingTop: '12px', resize: 'vertical' }} placeholder="Describe your question or issue in detail..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <button type="submit" className="account-form__save-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </InfoSection>
    </div>
  )
}
