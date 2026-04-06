import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Welcome to HMCTS. These Terms of Service ("Terms") establish a legal agreement between you and HMCTS ("Company,"
              "we," "us," "our") regarding your use of our website located at hmcts.co (the "Site") and all associated services,
              content, and products offered through the Site (collectively, the "Services").
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              By accessing, using, or creating an account on the Site, you agree to be bound by these Terms. If you do not agree
              to all the terms and conditions, you should not use the Site. We reserve the right to modify these Terms at any
              time, and your continued use of the Site constitutes acceptance of the changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Use License</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to use the Site and its content for personal,
              non-commercial use only, subject to these Terms. This license does not permit you to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Copy, sell, rent, lease, or exploit any part of the Site for commercial purposes</li>
              <li className="leading-relaxed">
                Modify, reverse-engineer, disassemble, decompile, or attempt to derive the source code of the Site
              </li>
              <li className="leading-relaxed">
                Access or search the Site using any automated method, including spiders, crawlers, or bots
              </li>
              <li className="leading-relaxed">Remove or obscure any proprietary notices from the Site</li>
              <li className="leading-relaxed">Transmit viruses, malware, or any code that disrupts the Site</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. User Accounts</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To access certain features of the Site, you may be required to create an account. When creating an account, you
              agree to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Provide accurate, current, and complete information</li>
              <li className="leading-relaxed">Maintain and promptly update your account information</li>
              <li className="leading-relaxed">Maintain the confidentiality of your password and account credentials</li>
              <li className="leading-relaxed">
                Be responsible for all activities that occur under your account
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Account Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may delete your account at any time through your account settings. We reserve the right to suspend or
              terminate your account if you violate these Terms or engage in prohibited conduct. Upon termination, your right to
              use the Site ceases immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. User-Generated Content</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If the Site allows you to submit, post, or upload content (including comments, reviews, feedback, or other materials)
              (collectively, "User Content"), you retain ownership of your content but grant us a worldwide, non-exclusive,
              royalty-free license to use, copy, modify, and display your User Content in connection with our Services.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              You agree that your User Content will not:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                Violate any applicable laws or regulations
              </li>
              <li className="leading-relaxed">
                Infringe upon any third-party intellectual property rights
              </li>
              <li className="leading-relaxed">
                Contain false, misleading, or defamatory statements
              </li>
              <li className="leading-relaxed">
                Contain sexually explicit, obscene, or offensive material
              </li>
              <li className="leading-relaxed">
                Contain malware, spyware, or harmful code
              </li>
              <li className="leading-relaxed">
                Harass, threaten, or abuse other users
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to review, moderate, and remove User Content that violates these Terms or for any other reason,
              at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site and all content, materials, software, graphics, logos, trademarks, and text (collectively, "Content") are
              the property of HMCTS or its content providers and are protected by copyright, trademark, and other intellectual
              property laws.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              You may not copy, distribute, modify, or reproduce any Content without our express written permission. Unauthorized
              use of any proprietary material is strictly prohibited and may result in legal action.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Payments & Billing</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you purchase products or services through the Site:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                You authorize us to charge your provided payment method for the full amount due
              </li>
              <li className="leading-relaxed">
                All prices are displayed in the currency indicated and are subject to applicable taxes
              </li>
              <li className="leading-relaxed">
                Payment must be received in full before services are rendered
              </li>
              <li className="leading-relaxed">
                We reserve the right to decline any payment or cancel any order
              </li>
              <li className="leading-relaxed">
                Late payments may result in suspension of services or additional fees
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Third-Party Links & Content</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to third-party websites, services, and content. We do not control, endorse, or assume
              responsibility for any third-party content. Your use of third-party sites is governed by their terms of service and
              privacy policies. We are not liable for damages arising from your interactions with third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Limitation of Liability</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                We do not warrant that the Site will be uninterrupted, error-free, or meet your expectations
              </li>
              <li className="leading-relaxed">
                We are not liable for any indirect, incidental, special, consequential, or punitive damages
              </li>
              <li className="leading-relaxed">
                Our total liability shall not exceed the amount you have paid to us in the past 12 months
              </li>
              <li className="leading-relaxed">
                These limitations apply regardless of the cause of action or theory of liability
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Indemnification</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless HMCTS and its officers, directors, employees, and agents from any
              claims, damages, losses, liabilities, and expenses (including reasonable attorney&apos;s fees) arising from:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Your use of the Site or Services</li>
              <li className="leading-relaxed">Your violation of these Terms</li>
              <li className="leading-relaxed">Your User Content or statements</li>
              <li className="leading-relaxed">Your infringement of any third-party rights</li>
              <li className="leading-relaxed">Any illegal conduct or fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Prohibited Conduct</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to engage in any of the following prohibited conduct:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Using the Site for illegal or fraudulent purposes</li>
              <li className="leading-relaxed">
                Harassing, threatening, defaming, or abusing other users
              </li>
              <li className="leading-relaxed">
                Attempting to access or use the Site without authorization
              </li>
              <li className="leading-relaxed">
                Transmitting spam, viruses, malware, or harmful code
              </li>
              <li className="leading-relaxed">
                Collecting personal data from other users without consent
              </li>
              <li className="leading-relaxed">
                Impersonating another person or entity
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Privacy</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Your use of the Site is governed by our Privacy Policy. By using the Site, you agree to our collection, use, and
              disclosure of your personal information as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Dispute Resolution & Governing Law</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informal Resolution:</strong> Before initiating formal proceedings, we encourage you to contact us to resolve
              any disputes informally. Please contact us at support@hmcts.co with details of your concern.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Binding Arbitration:</strong> Any dispute arising from these Terms or your use of the Site shall be resolved
              through binding arbitration rather than in court. Each party waives the right to a jury trial and the right to
              participate in a class-action lawsuit.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Governing Law:</strong> These Terms are governed by and construed in accordance with the laws of [insert
              jurisdiction], without regard to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Severability</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, such provision shall be reformed
              to the minimum extent necessary to make it enforceable, and all other provisions shall remain in full force and
              effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Entire Agreement</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms, together with our Privacy Policy, Cookie Policy, Disclaimer, and other policies, constitute the entire
              agreement between you and HMCTS regarding the Site and supersede all prior negotiations, representations, and
              agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about these Terms or need to contact us, please reach out:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Email: support@hmcts.co</li>
              <li className="leading-relaxed">Phone: [Insert Phone Number]</li>
              <li className="leading-relaxed">Postal Address: [Insert Address]</li>
              <li className="leading-relaxed">Hours: Monday to Friday, 9am to 5pm [Your Timezone]</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Changes to These Terms</h2>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting to the Site.
              Your continued use of the Site following the posting of revised Terms means you accept and agree to the changes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
