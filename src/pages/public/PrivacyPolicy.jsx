import React from 'react'
import { Lock } from 'lucide-react'
import { InfoPageHero, InfoSection } from './InfoPage'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you create an account, build your profile, or contact us. This includes:
• Name, email address, and password
• Profile information such as photos, videos, skills, and experience
• Communications you send through the platform
• Payment information (processed securely by third-party providers)
• Device and usage information collected automatically when you use our service`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
• Provide, maintain, and improve the CastIndia platform
• Connect talent with casting directors and vice versa
• Send notifications about casting opportunities and platform updates
• Monitor for fraudulent, illegal, or harmful activity
• Respond to comments, questions, and requests for support
• Comply with applicable laws and regulations in India`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell your personal information to third parties. We may share your information in the following circumstances:
• With other users as part of the normal functioning of the platform (e.g., casting directors can see your talent profile)
• With service providers who perform services on our behalf (e.g., payment processing, email delivery)
• When required by law or to protect the rights and safety of our users
• In connection with a merger, acquisition, or sale of company assets`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your account is protected by a password, and we encourage you to use a unique, strong password and to keep it confidential. All data transmission on our platform uses HTTPS encryption.`,
  },
  {
    title: '5. Your Rights',
    content: `Under applicable Indian law, you have the right to:
• Access the personal information we hold about you
• Correct inaccurate or incomplete information
• Request deletion of your account and associated data
• Withdraw consent for data processing where consent was the legal basis
• Receive a copy of your data in a portable format
To exercise any of these rights, contact us at privacy@castindia.in`,
  },
  {
    title: '6. Cookies',
    content: `We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of the platform may not function properly.`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our platform is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will promptly delete that information. For talent profiles featuring child artists, parental or guardian consent is required.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of CastIndia after changes constitutes your acceptance of the revised policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact our Privacy Team at:\n\nprivacy@castindia.in\nCastIndia Technologies Pvt. Ltd.\nMumbai, Maharashtra, India`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Legal"
        icon={Lock}
        title="Privacy"
        accent="Policy"
        subtitle="Last updated: September 25, 2026. We are committed to protecting your personal information."
      />
      <InfoSection>
        <div className="legal-doc">
          <div className="legal-doc__intro">
            <p>This Privacy Policy describes how CastIndia Technologies Pvt. Ltd. ("CastIndia", "we", "us", or "our") collects, uses, and shares information about you when you use our platform, website, and services (collectively, "Services"). By using CastIndia, you agree to the collection and use of information in accordance with this policy.</p>
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
