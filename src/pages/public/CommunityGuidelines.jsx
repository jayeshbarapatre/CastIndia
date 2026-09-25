import React from 'react'
import { Users } from 'lucide-react'
import { InfoPageHero, InfoSection } from './InfoPage'

const sections = [
  {
    title: '1. Be Respectful',
    content: `CastIndia is a professional platform. Treat every member — talent, casting directors, and production staff — with respect. We have zero tolerance for harassment, bullying, discrimination, or hate speech of any kind.`,
  },
  {
    title: '2. Be Honest',
    content: `Your profile must accurately represent who you are. Do not misrepresent your experience, skills, age, or identity. Fake profiles, impersonation, or using someone else's photos without permission is strictly prohibited and will result in permanent removal.`,
  },
  {
    title: '3. Safe Casting Calls Only',
    content: `All casting calls posted on CastIndia must be for legitimate, professional productions. You may not post casting calls that:
• Require talent to pay any fee to apply or audition
• Request inappropriate or revealing content in the casting brief
• Are for illegal productions or content
• Are fraudulent, misleading, or falsely represent the project`,
  },
  {
    title: '4. Keep Communication Professional',
    content: `All communication between talent and casting directors should remain professional and relevant to the casting process. You may not use CastIndia\'s messaging system to send spam, unsolicited marketing, inappropriate content, or requests unrelated to the casting opportunity.`,
  },
  {
    title: '5. Protect Privacy',
    content: `Do not share other users' personal information (phone numbers, home addresses, personal email) without their explicit consent. If a user shares sensitive information in a message, respect that it is private and do not distribute it further.`,
  },
  {
    title: '6. No Exploitation',
    content: `CastIndia exists to help talent get fairly compensated for their work. Casting calls must include fair and clearly stated pay rates or compensation. "Exposure only" listings that ask for unpaid professional work are not permitted on our platform.`,
  },
  {
    title: '7. Report Violations',
    content: `If you witness behaviour that violates these guidelines, please report it using the Report button on any profile, listing, or message. Our Trust & Safety team reviews all reports within 24 hours. False or malicious reports are themselves a violation of these guidelines.`,
  },
  {
    title: '8. Consequences',
    content: `Violations of these Community Guidelines may result in:
• A warning and removal of the offending content
• Temporary suspension of your account
• Permanent removal from the platform
• Reporting to law enforcement where applicable

We take the safety and integrity of our community seriously. CastIndia reserves the right to remove any content or user at its discretion.`,
  },
  {
    title: '9. Our Commitment',
    content: `CastIndia is committed to maintaining a safe, fair, and professional environment for all users. We will continue to improve our policies and safety tools based on community feedback. If you have suggestions for improving our Community Guidelines, please contact us at safety@castindia.in`,
  },
]

export default function CommunityGuidelines() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Legal"
        icon={Users}
        title="Community"
        accent="Guidelines"
        subtitle="Rules that keep CastIndia safe, fair, and professional for everyone."
      />
      <InfoSection>
        <div className="legal-doc">
          <div className="legal-doc__intro">
            <p>These Community Guidelines apply to everyone who uses CastIndia — including talent, casting directors, production companies, and any other platform users. By using CastIndia, you agree to abide by these guidelines.</p>
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
