import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Shipping Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Shipping Policy ("Policy") outlines the shipping terms, procedures, and conditions for orders placed through
              the website located at hmcts.co (the "Site") operated by HMCTS ("Company," "we," "us," "our"). Please read this
              Policy carefully before placing your order.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shipping Methods & Costs</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We offer multiple shipping options to accommodate your needs. Shipping costs and estimated delivery times will be
              calculated and displayed in the shopping cart before you complete your purchase. Shipping costs depend on:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">The shipping method selected</li>
              <li className="leading-relaxed">The destination address</li>
              <li className="leading-relaxed">The weight and dimensions of the item</li>
              <li className="leading-relaxed">Any promotional or discounted shipping offers</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shipping Destinations</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We currently ship to most addresses within [insert countries/regions]. Some items may be restricted from shipping
              to certain locations due to regulations or product type. Shipping restrictions will be noted on the product page.
              If you are unsure whether we ship to your location, please contact our Customer Service team.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Delivery Timeframes</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Estimated delivery times provided during checkout are approximations and not guaranteed unless otherwise specified
              in writing. Delivery times begin after payment has been received and your order has been processed. Standard
              processing time is 1-2 business days.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Delivery timeframes do not include weekends or public holidays. We are not responsible for delays caused by
              circumstances beyond our control, including but not limited to weather events, carrier delays, customs clearance,
              or natural disasters.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Order Processing</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Orders are processed Monday through Friday, during business hours [insert hours]. Orders placed on weekends or
              holidays will be processed on the next business day. Once your order is processed, you will receive a confirmation
              email with tracking information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tracking Your Order</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Most orders come with tracking information. You will receive an email containing a tracking number and carrier
              information. You can use this information to monitor your shipment&apos;s progress. For orders without tracking or
              if you need assistance locating your tracking information, please contact our Customer Service team.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shipping Address</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are responsible for providing a complete and accurate shipping address. We will not be responsible for
              incorrect deliveries due to incomplete or inaccurate address information. If your address changes after placing an
              order, please contact us immediately before the shipment leaves our facility.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We cannot ship to P.O. boxes, freight forwarding addresses, or private mailbox services for certain items. These
              restrictions will be noted during checkout.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signature & Delivery Confirmation</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For certain high-value orders or items requiring signature, we may use a carrier service that requires signature
              upon delivery. You are responsible for ensuring someone is available to sign for the package. If the carrier
              cannot deliver due to the absence of a recipient, the package may be returned to us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Undeliverable or Lost Packages</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If a package is returned as undeliverable or is lost in transit, you must notify us within 10 days of the
              shipment date. We will work with the carrier to locate the package or process a refund or replacement. You may be
              required to reimburse shipping costs if the package is returned due to an incorrect address provided by you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Damaged or Missing Items</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Upon receiving your shipment, inspect the package and contents for any signs of damage. If the package arrives
              damaged or if items are missing from your order, please:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Do not discard the packaging material</li>
              <li className="leading-relaxed">Take photos of the damage or missing items</li>
              <li className="leading-relaxed">
                Contact our Customer Service team within 7 days with photos and your order number
              </li>
              <li className="leading-relaxed">Follow instructions for filing a claim with the carrier if applicable</li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-6">
              We will replace damaged or missing items or process a refund depending on the circumstances.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Free Shipping Offers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Promotional offers for free or discounted shipping may be subject to terms and conditions, including minimum order
              amounts, exclusions on certain items, or geographic limitations. Free shipping offers do not cover expedited
              delivery methods unless otherwise stated. The terms of any specific promotion will be clearly outlined at the time
              of offer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Shipping</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For international orders, customers are responsible for all customs duties, import taxes, and fees. These charges
              are determined by the destination country and are outside our control. Customs clearance may delay delivery. We
              recommend using a trackable shipping method and obtaining insurance for valuable items.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Carriers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use third-party carriers to deliver packages. While we select carriers carefully, we are not responsible for
              damage caused by the carrier during transit or for delays caused by the carrier. All claims regarding carrier
              damage or loss should be directed to the carrier. We can assist you in filing carrier claims.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shipping Insurance</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For high-value orders, we recommend purchasing shipping insurance at checkout to protect against loss or damage
              during transit. Shipping insurance terms and coverage details will be provided if this option is available.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about shipping, to provide a shipping address correction, or to report delivery issues, please
              contact our Customer Service team:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Email: shipping@hmcts.co or support@hmcts.co</li>
              <li className="leading-relaxed">Phone: [Insert Phone Number]</li>
              <li className="leading-relaxed">Hours: Monday to Friday, 9am to 5pm [Your Timezone]</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify this Shipping Policy at any time. Changes will be effective upon posting to the
              Site. Your continued use of the Site following any changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
