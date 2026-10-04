import LegalPageLayout from '../components/LegalPageLayout'
import type { LegalSection } from '../components/LegalPageLayout'
import { SITE } from '../data/site'

const S: LegalSection[] = [
  { id: 'collect', title: 'Information We Collect', paras: ['Meloho is a college and hostel mess management platform. Depending on the features you use, we may collect the categories of information described below.'] },
  { id: 'account', title: 'Account Information', items: ['Name and contact details such as email address or phone number', 'College, hostel or mess affiliation and role (student or mess administrator)', 'Login credentials or authentication identifiers', 'Optional profile details you choose to add'] },
  { id: 'mess', title: 'Mess-Related Information', items: ['Mess membership and room or hostel details, where relevant', 'Mess fee and payment status records provided by your mess', 'Preferences such as notification settings', 'Menus, announcements and other content published by mess administrators'] },
  { id: 'feedback', title: 'Feedback and Ratings', paras: ['We collect meal ratings, reviews, complaints, suggestions and other feedback you submit. Mess administrators may see this feedback and related analytics so they can improve the mess.'] },
  { id: 'device', title: 'Device and Technical Information', items: ['Device type, operating system and app version', 'Log data such as access times, crashes and error reports', 'Notification tokens needed to deliver notifications', 'Approximate usage information to keep the service reliable'] },
  { id: 'use', title: 'How We Use Information', items: ['To provide menus, ratings, feedback, announcements, notifications and fee tracking', 'To let mess administrators manage and improve their mess', 'To maintain, secure and troubleshoot the service', 'To communicate service updates and respond to support requests', 'To comply with legal obligations'] },
  { id: 'sharing', title: 'Data Sharing', paras: ['We do not sell your personal information. We may share information with your mess administrators as needed for mess operations, with service providers who help us run Meloho under appropriate obligations, when required by law, or to protect the rights and safety of users and the service.'] },
  { id: 'security', title: 'Data Security', paras: ['We use reasonable technical and organisational measures to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.'] },
  { id: 'retention', title: 'Data Retention', paras: ['We keep personal information only as long as needed to provide the service, meet legal, accounting or reporting requirements, resolve disputes and enforce our agreements. Retention periods: [Retention Period to be defined]. When you delete your account, we handle your data as described on the Delete Account page.'] },
  { id: 'rights', title: 'Your Rights', items: ['Access the personal information we hold about you', 'Correct inaccurate or incomplete information', 'Request deletion of your account and personal data', 'Withdraw consent where processing is based on consent', 'Raise a concern or complaint about how your data is handled'], after: [`To exercise these rights, contact ${SITE.email}.`] },
  { id: 'children', title: "Children's Privacy", paras: ['Meloho is intended for college and hostel students and is not directed at young children. [Minimum Age to be defined]. If you believe a child has provided us personal information without appropriate consent, contact us and we will take steps to delete it.'] },
  { id: 'third', title: 'Third-Party Services', paras: ['Meloho may rely on third-party services such as hosting, authentication, analytics, notification delivery or payment providers. These services may process information under their own privacy policies. [List of Third-Party Services to be confirmed].'] },
  { id: 'changes', title: 'Changes to This Policy', paras: ['We may update this policy from time to time. We will post the updated version with a new "Last updated" date and, where appropriate, notify you through the app.'] },
  { id: 'contact', title: 'Contact Information', paras: [`${SITE.developer}`, `Email: ${SITE.email}`] },
]

export default function Privacy() {
  return <LegalPageLayout title="Privacy Policy" sections={S}
    intro="This Privacy Policy explains how Meloho collects, uses and protects information when you use the Meloho app and website."
    notice="Draft for review: this policy should be reviewed and finalized according to the actual Meloho app's data practices and applicable law before publication." />
}
