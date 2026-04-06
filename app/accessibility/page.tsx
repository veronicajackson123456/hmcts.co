import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Accessibility Statement</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              HMCTS is committed to ensuring that our website located at hmcts.co is accessible to all users, including
              those with disabilities. We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              standards and continue to improve our website&apos;s accessibility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Commitment</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We are dedicated to providing an inclusive online experience for everyone. We continuously work to improve the
              accessibility of our website and take the following measures:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Designing and developing with accessibility best practices in mind</li>
              <li className="leading-relaxed">Conducting regular accessibility audits and testing</li>
              <li className="leading-relaxed">Training our team members on accessible design and development</li>
              <li className="leading-relaxed">Responding promptly to accessibility feedback from users</li>
              <li className="leading-relaxed">Continuously updating our website to meet or exceed accessibility standards</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Features</h2>

            <p className="text-gray-700 leading-relaxed mb-4">Our website includes the following accessibility features:</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Keyboard Navigation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All functionality available through the mouse is also available through keyboard navigation. Users can navigate
              using the Tab key to move between interactive elements and Enter or Space to activate them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Screen Reader Compatibility</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website is designed to work with screen readers such as JAWS, NVDA, and VoiceOver. We use semantic HTML
              and ARIA labels to provide context and structure for screen reader users.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Alt Text for Images</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All meaningful images on our website include descriptive alt text to convey their content and purpose to users
              with visual impairments.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Color Contrast</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We ensure that text and interactive elements have sufficient color contrast ratios to be readable by users with
              low vision or color blindness.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Resizable Text</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users can resize text using browser settings without loss of functionality or readability. Our website uses
              relative font sizes that scale appropriately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Video Captions</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All video content on our website includes captions and, where applicable, transcripts to ensure accessibility
              for users who are deaf or hard of hearing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Logical Page Structure</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website uses headings, lists, and semantic markup to create a logical structure that is easy to navigate and
              understand.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Known Accessibility Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive for full accessibility, we acknowledge that some content may not yet be fully accessible. We
              are actively working to identify and resolve accessibility barriers. If you encounter any accessibility issues,
              please inform us so we can address them promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Browser & Assistive Technology Support</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our website has been tested with various browsers and assistive technologies, including:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Screen readers: JAWS, NVDA, VoiceOver</li>
              <li className="leading-relaxed">Browsers: Chrome, Firefox, Safari, Edge</li>
              <li className="leading-relaxed">Mobile devices: iOS and Android with native accessibility features</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Content</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to ensure that all content on our website is accessible, some third-party content, such as
              embedded videos or external applications, may not meet our accessibility standards. We encourage third parties
              to make their content accessible and will work with them to improve accessibility where possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User Preferences</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We respect user preferences for viewing content. If you have set preferences for reduced motion or dark mode in
              your device or browser settings, our website will adapt accordingly where possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Report Accessibility Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you encounter any accessibility barriers while using our website, please report them to us immediately. We
              take all feedback seriously and are committed to making improvements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Contact Information:</strong>
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Email: info@hospitalitysoftwaresolutions.com</li>
              <li className="leading-relaxed">Phone: +1 (845) 904-7626</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Standards & Guidelines</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our website aims to comply with the following accessibility standards:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
              <li className="leading-relaxed">Americans with Disabilities Act (ADA)</li>
              <li className="leading-relaxed">Equality Act 2010 (UK)</li>
              <li className="leading-relaxed">Section 508 of the Rehabilitation Act (U.S.)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Support Resources</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For assistance using our website or additional accessibility resources, please visit our dedicated support page
              or contact us directly. We can also provide alternative formats of content upon request.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Continuous Improvement</h2>

            <p className="text-gray-700 leading-relaxed">
              Accessibility is an ongoing process. We regularly review and update our website to maintain and improve
              accessibility standards. We welcome your suggestions and feedback to help us create a more accessible online
              experience for everyone.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
