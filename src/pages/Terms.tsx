import LegalPageLayout from '../components/LegalPageLayout'
import type { LegalSection } from '../components/LegalPageLayout'
import { SITE } from '../data/site'

const S: LegalSection[] = [
  { id: 'accept', title: 'Acceptance of Terms', paras: ['By accessing or using Meloho, you agree to these Terms & Conditions. If you do not agree, please do not use the service.'] },
  { id: 'eligibility', title: 'Eligibility', paras: ['You must be a student, staff member or mess administrator connected with a participating college or hostel mess, and be legally able to enter into these Terms. [Minimum Age to be defined].'] },
  { id: 'accounts', title: 'User Accounts', paras: ['You are responsible for keeping your login details confidential and for activity under your account. Provide accurate information and tell us promptly about any unauthorised use.'] },
  { id: 'use', title: 'Acceptable Use', items: ['Use Meloho only for lawful purposes related to mess management and mess feedback', 'Respect other users, mess staff and administrators', 'Do not misuse, disrupt or attempt to gain unauthorised access to the service'] },
  { id: 'mess', title: 'Mess Information', paras: ['Menus, announcements, fee details and other mess information are provided by mess administrators. Meloho aims to display this accurately but does not guarantee that it is complete, current or error-free. Please confirm important details with your mess.'] },
  { id: 'ugc', title: 'User-Generated Content', paras: ['You keep ownership of content you submit, such as feedback and complaints. You grant Meloho and the relevant mess administrators a non-exclusive licence to use, display and process that content to operate and improve the service. You are responsible for what you submit.'] },
  { id: 'ratings', title: 'Ratings and Reviews', paras: ['Ratings and reviews must be honest and based on your own experience. Do not post fake, abusive, defamatory or misleading ratings, or attempt to manipulate results.'] },
  { id: 'prohibited', title: 'Prohibited Activities', items: ['Harassment, hate speech or sharing others\' personal information', 'Impersonating another person or administrator', 'Uploading malware or interfering with the service', 'Scraping, reverse engineering or abusing the platform', 'Any activity that violates applicable law or college rules'] },
  { id: 'payments', title: 'Payments and Fees', paras: ['Where Meloho shows mess fee or payment status, this information is supplied by your mess. Meloho does not set mess fees. [Payment terms, if any payment feature is introduced, to be defined before launch].'] },
  { id: 'ip', title: 'Intellectual Property', paras: ['The Meloho name, logo, app and website content are owned by or licensed to ' + SITE.developer + ' and protected by applicable law. You may not copy or exploit them without permission.'] },
  { id: 'third', title: 'Third-Party Services', paras: ['Meloho may include or link to third-party services. We are not responsible for their content or practices, and your use of them is subject to their own terms.'] },
  { id: 'availability', title: 'Service Availability', paras: ['We work to keep Meloho available but do not guarantee uninterrupted or error-free service. Features may change, be suspended or be discontinued.'] },
  { id: 'disclaimer', title: 'Disclaimers', paras: ['Meloho is provided "as is" and "as available" without warranties of any kind, to the extent permitted by law.'] },
  { id: 'liability', title: 'Limitation of Liability', paras: ['To the extent permitted by law, ' + SITE.developer + ' is not liable for indirect, incidental or consequential damages arising from your use of Meloho. [Liability cap and jurisdiction-specific wording to be confirmed by legal counsel].'] },
  { id: 'termination', title: 'Account Suspension and Termination', paras: ['We may suspend or terminate accounts that violate these Terms or harm the service or other users. You may stop using Meloho and request account deletion at any time.'] },
  { id: 'changes', title: 'Changes to Terms', paras: ['We may update these Terms. Continued use of Meloho after changes take effect means you accept the updated Terms.'] },
  { id: 'law', title: 'Governing Law', paras: ['These Terms are governed by the laws of [Governing Law / Jurisdiction]. Disputes will be handled by the courts of [Jurisdiction].'] },
  { id: 'contact', title: 'Contact Information', paras: [SITE.developer, `Email: ${SITE.email}`] },
]

export default function Terms() {
  return <LegalPageLayout title="Terms & Conditions" sections={S}
    intro="These Terms & Conditions govern your use of the Meloho app and website."
    notice="Draft for review: these Terms should be reviewed by a qualified legal professional and finalized before publication." />
}
