import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cookie Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy explains how HMCTS ("we," "us," "our," or "Company") uses cookies and similar tracking
              technologies on our website located at hmcts.co (the "Site"). By accessing or using the Site, you consent to
              our use of cookies as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Are Cookies?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you
              visit a website. They allow websites to recognize your device and store information about your preferences
              and browsing behavior.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Essential Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These cookies are necessary for the Site to function properly. They enable core functionality such as
              security, network management, and accessibility. Without these cookies, parts of the Site may not work
              correctly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Performance Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These cookies help us understand how visitors interact with our Site by collecting anonymous data about
              page visits, click patterns, and referral sources. This information helps us improve the Site's performance
              and user experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Functional Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These cookies remember your preferences and choices (such as language or region) to provide a personalized
              experience. They may also be used to remember login information or account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Marketing Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These cookies track your browsing behavior and interests to display personalized advertisements. They may be
              set by third-party advertising partners and used for remarketing purposes across other websites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may allow third-party service providers, including analytics companies and advertising networks, to place
              cookies on your device. These third parties may use cookies to track your activity across multiple websites
              and provide services such as analytics and targeted advertising. We do not control these third-party cookies,
              and their use is governed by the respective privacy policies of those companies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How We Use Cookie Information</h2>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">To remember your login credentials and account preferences</li>
              <li className="leading-relaxed">To analyze traffic patterns and Site usage</li>
              <li className="leading-relaxed">To improve the Site&apos;s functionality and user experience</li>
              <li className="leading-relaxed">To deliver targeted advertisements based on your interests</li>
              <li className="leading-relaxed">To measure the effectiveness of marketing campaigns</li>
              <li className="leading-relaxed">To prevent fraud and enhance security</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Cookie Choices</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through your browser settings. You can typically:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">View which cookies have been set on your device</li>
              <li className="leading-relaxed">Delete cookies stored on your device</li>
              <li className="leading-relaxed">Block cookies from being set in the future</li>
              <li className="leading-relaxed">Set your browser to alert you when cookies are being set</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Please note that if you disable or block certain cookies, some features of the Site may not function
              properly, and you may not be able to access certain services or content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cookie Duration</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Session Cookies:</strong> These cookies are temporary and are deleted automatically when you close
              your browser.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Persistent Cookies:</strong> These cookies remain on your device for a specified period (ranging from
              days to years) and are used to recognize you on subsequent visits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do Not Track Signals</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for recognizing Do
              Not Track signals. The Site does not currently respond to Do Not Track signals, but we provide options for
              you to manage cookies as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Protection</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The information we collect through cookies is processed in accordance with our Privacy Policy. We implement
              appropriate security measures to protect cookie data from unauthorized access, alteration, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions or concerns about our use of cookies, please contact us at support@hmcts.co or visit
              our Contact page for additional information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. Continued use of the Site following the posting of revised terms
              means that you accept and agree to the changes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
