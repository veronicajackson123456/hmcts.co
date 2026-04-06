import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ReturnsRefundsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Returns & Refunds Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Returns & Refunds Policy ("Policy") governs the return and refund procedures for products and services
              purchased through the website located at hmcts.co (the "Site") operated by HMCTS ("Company," "we," "us," "our").
              Please read this Policy carefully before making any purchases.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Products & Services Covered</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This Policy applies to all tangible products and digital services sold through the Site. Specific return and
              refund terms may vary depending on the type of product or service. Additional terms may be provided at the time
              of purchase.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Return Eligibility</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              To be eligible for return, items must meet the following criteria:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Returned within 30 days of the purchase date</li>
              <li className="leading-relaxed">
                In original, unused condition with all original packaging and materials
              </li>
              <li className="leading-relaxed">Accompanied by proof of purchase (order receipt or confirmation email)</li>
              <li className="leading-relaxed">Not damaged due to misuse, negligence, or accident</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Non-Returnable Items</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The following items are non-returnable and non-refundable:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Digital downloads or software (unless defective)</li>
              <li className="leading-relaxed">Services that have been fully rendered or consumed</li>
              <li className="leading-relaxed">Custom or personalized items</li>
              <li className="leading-relaxed">Items that show signs of wear or use</li>
              <li className="leading-relaxed">Items without original packaging or labels removed</li>
              <li className="leading-relaxed">Clearance or final sale items</li>
              <li className="leading-relaxed">Items purchased at a discount of 50% or more</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Return Process</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              To initiate a return, please follow these steps:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                Contact our Customer Service team at returns@hmcts.co with your order number and reason for return
              </li>
              <li className="leading-relaxed">Obtain a Return Merchandise Authorization (RMA) number from us</li>
              <li className="leading-relaxed">
                Securely pack the item and include the RMA number on the outside of the package
              </li>
              <li className="leading-relaxed">
                Ship the item to the return address provided (shipping costs are the responsibility of the customer unless
                otherwise specified)
              </li>
              <li className="leading-relaxed">
                Provide tracking information to our Customer Service team for verification
              </li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-6">
              Items received without an RMA number may be refused and returned to the sender.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Refund Processing</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Upon receipt and inspection of your returned item, we will notify you of the status of your return. If approved,
              your refund will be processed and credited back to your original payment method within 10-14 business days.
              Please note that depending on your financial institution, it may take an additional 1-2 business days for the
              refund to appear in your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Restocking Fee</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Items returned in used, worn, or damaged condition may be subject to a restocking fee of up to 20% of the
              purchase price. This fee will be deducted from your refund.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Defective or Damaged Items</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you receive a defective or damaged item, please contact us immediately within 7 days of receipt. Provide
              photos or videos of the damage and your order information. We will arrange for a replacement or full refund at
              our discretion, and we will cover return shipping costs for defective items.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Digital Services</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Refunds for digital services, such as online courses or access-based subscriptions, are generally not available
              once access has been granted or the service has begun. However, if the digital service is defective or fails to
              function as described, we may offer a refund or replacement at our discretion. Contact us within 7 days of
              purchase to report any issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Subscriptions & Recurring Charges</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you are charged for a recurring subscription service, you can cancel your subscription at any time through
              your account settings or by contacting Customer Service. Cancellations will take effect at the end of your
              current billing cycle. No refunds will be provided for partial billing periods or unused portions of a
              subscription.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shipping & Return Costs</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Customers are responsible for return shipping costs unless the return is due to our error (wrong item sent,
              item damaged upon delivery) or a defective product. In these cases, we will provide a return label or reimburse
              return shipping costs. All items must be shipped via a trackable method.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exchanges</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We offer exchanges for items of the same value or similar replacement products. To request an exchange, contact
              our Customer Service team. Exchanges must be requested within 30 days of purchase. Customers may be responsible
              for the cost of return and outbound shipping for exchanges of items of different values.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Returns</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Customers who purchased items from outside our primary service area may initiate returns, but are responsible
              for all international shipping, customs, and handling fees. We recommend using a trackable international shipping
              method. Return eligibility and timelines remain the same as domestic returns.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exceptions & Special Circumstances</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to make exceptions to this Policy on a case-by-case basis at our discretion. If you believe
              your situation warrants special consideration, please contact our Customer Service team with details.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Return Guarantee</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              By making a purchase, you acknowledge that certain products or services may be final sale with no return or
              refund option. These items will be clearly marked at the time of purchase.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about returns, refunds, or to initiate a return, please contact our Customer Service team:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Email: info@hospitalitysoftwaresolutions.com</li>
              <li className="leading-relaxed">Phone: +1 (845) 904-7626</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify this Returns & Refunds Policy at any time. Changes will be effective upon posting
              to the Site. Your continued use of the Site following any changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
