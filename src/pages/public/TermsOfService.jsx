import React from 'react'
import { FileText } from 'lucide-react'
import { InfoPageHero, InfoSection } from '../InfoPage'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the CastIndia platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our Service. These terms apply to all users, including talent, casting directors, and production companies.`,
  },
  {
    title: '2. Eligibility',
    content: `You must be at least 13 years of age to use the Service. For users under 18, a parent or legal guardian must provide consent. For child artist profiles, the parent or guardian is the account holder and is responsible for all activity associated with the account.`,
  },
  {
    title: '3. User Accounts',
    content: `You are responsible for maintaining the security of your account and all activities that occur under your account. You must provide accurate and complete information when creating your account. You may not use another person's account without their permission. CastIndia reserves the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: '4. Content and Conduct',
    content: `By posting content on CastIndia, you represent that:
• You own or have the rights to post such content
• The content does not violate the rights of any third party
• The content is truthful and not misleading
• The content does not contain inappropriate, offensive, or illegal material

You agree not to use the platform to engage in fraud, harassment, or any illegal activity. Casting calls must be for legitimate professional productions.`,
  },
  {
    title: '5. Payments and Fees',
    content: `Talent profiles are free to create and maintain. Casting directors may access premium features subject to applicable fees. All payments are processed through secure third-party payment providers. Fees, once paid, are non-refundable except as required by applicable law.`,
  },
  {
    title: '6. Intellectual Property',
    content: `The CastIndia platform, including its design, logo, code, and content, is owned by CastIndia Technologies Pvt. Ltd. and protected by applicable intellectual property laws. You may not copy, modify, or distribute any part of the platform without our express written consent. User-generated content (your photos, videos, bio) remains your property, but you grant CastIndia a license to use it to operate and promote the platform.`,
  },
  {
    title: '7. Disclaimers',
    content: `CastIndia is a platform that connects talent with casting opportunities. We do not guarantee employment, casting outcomes, or payment for any role. We are not responsible for the actions of casting directors or talent on our platform. We make no representations about the accuracy of casting listings.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, CastIndia shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the Service. Our total liability for any claims shall not exceed the amounts you have paid to CastIndia in the past 12 months.`,
  },
  {
    title: '9. Governing Law',
    content: `These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.`,
  },
  {
    title: '10. Changes to Terms',
    content: `We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes. Your continued use of the Service after changes constitutes your acceptance of the revised terms. If you do not agree to the new terms, you must stop using the Service.`,
  },
]

export default function TermsOfService() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Legal"
        icon={FileText}
        title="Terms of"
        accent="Service"
        subtitle="Last updated: September 25, 2026. Please read these terms carefully before using CastIndia."
      />
      <InfoSection>
        <div className="legal-doc">
          <div className="legal-doc__intro">
            <p>These Terms of Service ("Terms") govern your use of CastIndia, operated by CastIndia Technologies Pvt. Ltd. By creating an account or using our platform, you agree to these Terms. Please read them carefully.</p>
          </div>
          {sections.map(({ title, content }) => (
            <div key={title} className="legal-section">
              <h2 className="legal-section__title">{title}</h2>
              <p className="legal-section__content">{content}</p>
            </div>
          ))}
        </div>
      </InfoSection>
    </div>
  )
}
