import { Mail, Rocket, ShieldCheck } from 'lucide-react'
import LegalPageLayout from '../components/LegalPageLayout'
import type { LegalSection } from '../components/LegalPageLayout'
import { SITE } from '../data/site'

const S: LegalSection[] = [
  { id: 'how', title: 'How to Request Deletion', paras: ['When Meloho launches, you will be able to request deletion from within the app. Until then, send a deletion request to ' + SITE.email + ' from the email address linked to your account, with the subject "Account Deletion Request".'], items: ['Include your name and your college or mess, if applicable', 'We may ask you to verify your identity before processing the request'] },
  { id: 'after', title: 'What Happens After Deletion', items: ['Your account is closed and you can no longer sign in', 'Your profile and personal details are removed from active systems', 'Notifications and app access linked to your account stop', 'Deletion cannot be undone; you would need to create a new account'] },
  { id: 'deleted', title: 'Personal Data That May Be Deleted', items: ['Account and profile information', 'Mess membership details', 'Notification settings and device tokens', 'Ratings and feedback linked to your identity, or anonymised where deletion is not practical'] },
  { id: 'retained', title: 'Information That May Be Retained', paras: ['We may keep limited information where required for legal, tax, accounting, fraud-prevention or dispute-resolution purposes, or to protect the rights and security of users and the service. Aggregated or anonymised data that no longer identifies you may also be kept. Mess fee and payment records may be retained by your mess as required by its own obligations.'] },
  { id: 'process', title: 'Expected Deletion Process', items: ['Step 1: You send the request', 'Step 2: We confirm your identity', 'Step 3: We delete or anonymise your data within [Deletion Timeframe]', 'Step 4: We confirm completion by email'] },
]

export default function DeleteAccount() {
  return (
    <LegalPageLayout title="Delete Account" sections={S}
      intro="You are in control of your data. This page explains how to ask Meloho to delete your account and personal information."
      notice="Draft for review: the deletion process and timelines should be finalized to match the actual Meloho app and applicable law before publication.">
      <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className="flex gap-3 rounded-2xl border border-leaf bg-leaf-soft p-5">
          <Rocket className="mt-0.5 shrink-0 text-leaf" aria-hidden />
          <p className="font-bold">Account deletion functionality will be available when Meloho launches.</p>
        </div>
        <div className="flex gap-3 rounded-2xl border border-steel bg-white p-5">
          <Mail className="mt-0.5 shrink-0 text-leaf" aria-hidden />
          <p><span className="font-bold">Deletion requests</span><br />{SITE.email}</p>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted sm:col-span-2"><ShieldCheck size={16} aria-hidden /> No account or data exists on this website; there is nothing to delete here yet.</p>
      </div>
    </LegalPageLayout>
  )
}
