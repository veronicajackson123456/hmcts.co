import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Disclaimer</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Disclaimer ("Disclaimer") applies to the website located at hmcts.co (the "Site") operated by HMCTS
              ("Company," "we," "us," "our"). Please read this Disclaimer carefully. By accessing or using the Site, you
              acknowledge that you have read, understood, and agree to be bound by all the terms and conditions outlined
              below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disclaimer of Warranties</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>AS-IS BASIS:</strong> The Site and all content, materials, information, services, and products
              included on the Site are provided on an "as-is" and "as-available" basis without warranties of any kind,
              either express or implied.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We make no representations or warranties, including but not limited to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                That the Site will be uninterrupted, timely, secure, or error-free
              </li>
              <li className="leading-relaxed">
                That the information on the Site is accurate, complete, or reliable
              </li>
              <li className="leading-relaxed">
                That defects in the Site will be corrected
              </li>
              <li className="leading-relaxed">
                That the Site will meet your expectations or requirements
              </li>
              <li className="leading-relaxed">
                That any content or data will be free from viruses or harmful components
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Medical & Professional Advice</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The content provided on the Site, including but not limited to articles, guides, recommendations, and advice,
              is for informational purposes only and does not constitute professional advice. The information is not
              intended to be, and should not be construed as, medical, legal, financial, or professional advice of any kind.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Before making any decisions based on information from the Site, we strongly recommend that you consult with
              qualified professionals, including doctors, lawyers, financial advisors, or other appropriate experts. We
              disclaim all liability for actions taken or not taken based on Site content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> In no event shall HMCTS, its officers, directors,
              employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, punitive, or
              exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other
              intangible losses, arising out of or in connection with:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Your use of or inability to use the Site</li>
              <li className="leading-relaxed">Any content accessed through the Site</li>
              <li className="leading-relaxed">Unauthorized access to or alteration of your transmissions or data</li>
              <li className="leading-relaxed">Statements or conduct of any third party on the Site</li>
              <li className="leading-relaxed">Any other matter related to the Site</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              This limitation shall apply regardless of whether the Company has been advised of the possibility of such
              damages and notwithstanding any failure of essential purpose of any limited remedy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Content & Links</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to third-party websites, services, and content. We do not endorse, approve, or
              assume responsibility for any third-party content, products, or services. Your use of third-party websites is
              governed by their terms of service and privacy policies. We are not responsible for any damages or losses
              arising from your interactions with third-party websites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accuracy & Completeness</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to provide accurate and current information, we make no guarantees regarding the accuracy,
              completeness, or timeliness of any content on the Site. Information may become outdated without notice. Users
              are responsible for verifying any information they rely upon from the Site through independent sources.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User-Generated Content</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If the Site allows you to submit, post, or upload content (including comments, reviews, or feedback), you are
              solely responsible for such content. We do not endorse user-generated content and disclaim liability for any
              claims arising from user submissions, including defamation, infringement, or other legal issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Security & Data Protection</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we implement reasonable security measures, we cannot guarantee the absolute security of data transmitted
              over the internet. Your use of the Site is at your own risk. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to the Site</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify, suspend, or discontinue the Site or any part thereof at any time, with or
              without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance
              of the Site or its features.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Indemnification</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to indemnify and hold harmless HMCTS, its officers, directors, employees, and agents from and against
              any claims, damages, losses, liabilities, and expenses (including reasonable attorney&apos;s fees) arising out of
              or related to your use of the Site, violation of these terms, or infringement of any third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governing Law & Jurisdiction</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This Disclaimer shall be governed by and construed in accordance with the laws of the relevant jurisdiction in
              which HMCTS operates, without regard to its conflict of law principles. Any legal action or proceeding arising
              under this Disclaimer shall be exclusively resolved through binding arbitration or in the courts of that
              jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Severability</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If any provision of this Disclaimer is found to be invalid, illegal, or unenforceable by a court of competent
              jurisdiction, such provision shall be reformed to the minimum extent necessary to make it enforceable, and all
              other provisions shall remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Entire Agreement</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This Disclaimer, together with our Terms of Use and Privacy Policy, constitutes the entire agreement between
              you and HMCTS regarding the Site and supersedes all prior negotiations, representations, and agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Disclaimer, please contact us at support@hmcts.co or visit our Contact
              page for additional information.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
