import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Data Deletion & Account Termination</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Data Deletion & Account Termination Policy ("Policy") explains how you can request deletion of your personal
              data and terminate your account on the website located at hmcts.co (the "Site") operated by HMCTS ("Company,"
              "we," "us," "our"). We respect your privacy and your right to control your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Data Rights</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have certain rights regarding your personal data under applicable laws,
              including:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">The right to access your personal data</li>
              <li className="leading-relaxed">The right to correct inaccurate personal data</li>
              <li className="leading-relaxed">The right to delete your personal data (right to be forgotten)</li>
              <li className="leading-relaxed">The right to restrict processing of your personal data</li>
              <li className="leading-relaxed">The right to data portability</li>
              <li className="leading-relaxed">The right to object to processing of your personal data</li>
              <li className="leading-relaxed">The right to withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Account Termination</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How to Terminate Your Account</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can terminate your account at any time by:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                Logging into your account and accessing your account settings or profile page
              </li>
              <li className="leading-relaxed">
                Selecting the option to delete or terminate your account and following the on-screen instructions
              </li>
              <li className="leading-relaxed">
                Or contacting our Customer Service team at support@hmcts.co with a written request to terminate your account
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Confirmation Process</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you request account termination, we will send a confirmation email to verify your identity. You must confirm
              the termination request within 7 days. This confirmation process is designed to protect your account from
              unauthorized deletion requests.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Account Deactivation vs. Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upon request, we offer two options:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Account Deactivation:</strong> Your account is temporarily disabled, but your data is retained. You
                can reactivate your account by logging in again within 180 days.
              </li>
              <li className="leading-relaxed">
                <strong>Account Deletion:</strong> Your account is permanently deleted, and your personal data is removed from
                our active systems as described below.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Personal Data Deletion</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Data Will Be Deleted</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upon account deletion, the following personal data will be removed from our systems:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Your name, email address, and contact information</li>
              <li className="leading-relaxed">Your account profile and preferences</li>
              <li className="leading-relaxed">Your browsing and usage history on the Site</li>
              <li className="leading-relaxed">Your payment method information (though some information may be retained for fraud prevention)</li>
              <li className="leading-relaxed">Communications between you and our Customer Service team (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Data We May Retain</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even after account deletion, we may retain certain data for the following purposes:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Legal Compliance:</strong> Data necessary to comply with legal obligations, tax requirements, or regulatory mandates.
              </li>
              <li className="leading-relaxed">
                <strong>Fraud Prevention:</strong> Minimal data retained to prevent fraud, abuse, or security threats.
              </li>
              <li className="leading-relaxed">
                <strong>Backup Archives:</strong> Data in backup systems, which will be deleted according to our backup retention schedule.
              </li>
              <li className="leading-relaxed">
                <strong>Historical Records:</strong> Aggregated or anonymized data used for statistical, analytical, or historical purposes.
              </li>
              <li className="leading-relaxed">
                <strong>Financial Records:</strong> Transaction history and invoices necessary for accounting, auditing, and financial purposes.
              </li>
              <li className="leading-relaxed">
                <strong>Content Moderation:</strong> Data retained to address potential violations of our Terms of Use.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Timeline for Data Deletion</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Data deletion requests are processed within 30 days of your confirmed request. During this period:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                Your data is marked for deletion in our active systems
              </li>
              <li className="leading-relaxed">
                Your account access is immediately terminated
              </li>
              <li className="leading-relaxed">
                You will receive a confirmation email when deletion is complete
              </li>
              <li className="leading-relaxed">
                Data may remain in backup systems for up to 90 days before final removal
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Data</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Your data may have been shared with third-party service providers (such as email providers, analytics services, or
              payment processors). While we will delete our copy of your data, third parties may retain your information in
              accordance with their own privacy policies. We recommend contacting these third parties directly to request deletion
              if desired. Their contact information should be available in their respective privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Portability Request</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you wish to export your personal data before deletion, you can request a data portability download. Contact our
              Customer Service team to initiate this request. We will provide your data in a commonly used, machine-readable format
              (such as CSV or JSON) within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reversal of Deletion Request</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Once a deletion request is confirmed and processing has begun, it cannot be reversed. Your account and associated
              data will be permanently deleted. However, during the 7-day confirmation period, you can cancel your deletion request
              by contacting us or logging back into your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To request data deletion, account termination, data portability, or to exercise any other data rights, please contact
              our Data Protection Officer or Customer Service team:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Email: info@hospitalitysoftwaresolutions.com</li>
              <li className="leading-relaxed">Phone: +1 (845) 904-7626</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Verification & Security</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To protect your privacy and prevent unauthorized deletion requests, we will verify your identity before processing
              data deletion requests. We may request:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Your account email and password</li>
              <li className="leading-relaxed">A valid photo ID or other identity verification</li>
              <li className="leading-relaxed">Confirmation through a verification link sent to your registered email</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User Responsibilities</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are responsible for maintaining the confidentiality of your account credentials. Before requesting account deletion,
              you may want to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Download or export any data you wish to retain</li>
              <li className="leading-relaxed">Cancel any active subscriptions or memberships</li>
              <li className="leading-relaxed">Settle any outstanding payments or balances</li>
              <li className="leading-relaxed">Notify any contacts or followers of your account closure</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify this Policy at any time. Changes will be effective upon posting to the Site. For
              significant changes, we will notify users by email or prominent notice on the Site. Your continued use of the Site
              following any changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
