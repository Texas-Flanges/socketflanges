import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Socket Flanges',
  description: 'Privacy Policy for Socket Flanges. Learn how we protect your information.',
  alternates: {
    canonical: 'https://socketflanges.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://socketflanges.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Privacy Policy",
              "item": "https://socketflanges.com/privacy-policy"
            }
          ]
        })}}
      />
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Privacy Policy for Socket Flanges</h2>

            <p className="text-gray-700 mb-4">
              Last Updated: March 2026
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">1. Introduction</h3>
            <p className="text-gray-700 mb-4">
              Socket Flanges ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">2. Information We Collect</h3>
            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
              <li><strong>Data From Social Networks:</strong> User information from social networks, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</li>
              <li><strong>Passive Data:</strong> Information collected automatically when you use our website, including IP addresses, browser type, operating system, referring URLs, and pages visited.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">3. Use of Your Information</h3>
            <p className="text-gray-700 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Generate a personal profile about you so that future visits to the Site are personalized as possible</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
              <li>Notify you of updates to the Site</li>
              <li>Offer new products, services, and/or recommendations to you</li>
              <li>Process your transactions and send related information</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">4. Disclosure of Your Information</h3>
            <p className="text-gray-700 mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with law, enforce our Site policies, or protect ours or others' rights, property, or safety.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with parties who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">5. Security of Your Information</h3>
            <p className="text-gray-700 mb-4">
              We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">6. Contact Us</h3>
            <p className="text-gray-700 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:sales@texasflange.com" className="text-blue-600 hover:text-blue-800">sales@texasflange.com</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> <a href="tel:+1-281-484-8325" className="text-blue-600 hover:text-blue-800">281-484-8325</a>
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong> <a href="https://socketflanges.com" className="text-blue-600 hover:text-blue-800">https://socketflanges.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
