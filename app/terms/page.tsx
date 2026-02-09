import React from 'react';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Nexus Accounting</title>
        <meta name="description" content="Terms and Conditions for Nexus Accounting - Legal agreement governing the use of our services and website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 lg:px-10">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Nexus Accounting & Taxation is a brand operated by Nexus One Holdings, LLC.
            </h1>
            <div className="text-2xl font-semibold text-blue-700 mb-3">
              Terms and Conditions
            </div>
            <div className="text-sm text-slate-600">
              Effective Date: February 5, 2026
            </div>
          </header>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-10">
            {/* Section I */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                I. Acceptance of Terms
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Welcome to Nexus Accounting. By accessing or using our website at{' '}
                <a 
                  href="https://www.nexusacct.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  www.nexusacct.com
                </a>
                {' '}("Website"), or by engaging our accounting and bookkeeping services, you ("User," "Client," or "you") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Website or services.
              </p>
              <p className="text-slate-700 leading-relaxed">
                These Terms constitute a legally binding agreement between you and Nexus Accounting ("we," "us," or "our"). We reserve the right to modify these Terms at any time. Continued use of our Website or services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Section II */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                II. Services Provided
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Scope of Services
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Nexus Accounting provides professional accounting and bookkeeping services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-4">
                <li>Financial record keeping and bookkeeping</li>
                <li>Financial statement preparation</li>
                <li>Tax preparation and planning assistance</li>
                <li>Payroll processing services</li>
                <li>Accounts payable and receivable management</li>
                <li>Financial consulting and advisory services</li>
                <li>Compliance reporting and documentation</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Service Engagement
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Services are provided pursuant to a separate engagement letter or service agreement. The specific scope, deliverables, timelines, and fees will be outlined in such agreements. These Terms supplement but do not replace individual service agreements.
              </p>
            </section>

            {/* Section III */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                III. User Obligations and Responsibilities
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Accurate Information
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                You agree to provide accurate, complete, and timely information necessary for us to perform our services. You are responsible for the accuracy of all financial records, documents, and data you provide.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Lawful Use
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                You agree to use our Website and services only for lawful purposes. You shall not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit malicious code, viruses, or harmful materials</li>
                <li>Attempt unauthorized access to our systems or networks</li>
                <li>Use our services for fraudulent or deceptive purposes</li>
                <li>Harass, threaten, or abuse our staff or other users</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Cooperation
              </h3>
              <p className="text-slate-700 leading-relaxed">
                You agree to cooperate with our requests for information, documentation, and clarification in a timely manner. Delays in providing requested materials may impact service delivery timelines.
              </p>
            </section>

            {/* Section IV */}
            

            {/* Section V */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                V. Intellectual Property Rights
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Website Content
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                All content on our Website, including text, graphics, logos, images, software, and design elements, is the property of Nexus Accounting or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Limited License
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our Website for personal or business purposes related to our services. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Client Work Product
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Upon full payment, you own the financial statements, reports, and deliverables we create specifically for you. However, our proprietary methodologies, templates, processes, and internal working papers remain our property.
              </p>
            </section>

            {/* Section VI */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                VI. Confidentiality and Data Protection
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Confidential Information
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We recognize the confidential nature of your financial information. We implement reasonable security measures to protect your data as outlined in our Privacy Policy, available at{' '}
                <a 
                  href="https://www.nexusacct.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  www.nexusacct.com/privacy
                </a>.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Data Security
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                While we employ industry-standard security measures, no data transmission or storage system is completely secure. You acknowledge that you provide information at your own risk.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Third-Party Disclosure
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We may share your information with service providers, legal authorities when required by law, or as specified in our Privacy Policy. We do not sell your personal information to third parties.
              </p>
            </section>

            {/* Section VII - SMS Communications */}
            <section className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
                <span>📱</span>
                <span>VII. SMS and Text Message Communications</span>
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Consent to Receive SMS
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                By providing your mobile phone number and opting in to receive text messages, you expressly consent to receive SMS communications from Nexus Accounting. These may include service updates, appointment reminders, operational alerts, and other business-related messages.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Message Frequency
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Message frequency varies based on your engagement with our services. You may receive up to 5 messages per week.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Opt-Out Rights
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                You may opt out at any time by replying <strong>STOP</strong> to any SMS message. For help, reply <strong>HELP</strong> or contact us at{' '}
                <a href="tel:+19727449881" className="text-blue-600 hover:text-blue-800 underline">
                  +(972) 744-9881
                </a>.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                4. Carrier Charges
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Message and data rates may apply based on your mobile carrier plan. Nexus Accounting is not responsible for any charges incurred from your carrier.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                5. No Required Consent
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Consent to receive SMS messages is not a condition of purchasing our services. You may decline to provide your phone number or opt out at any time without affecting your service eligibility.
              </p>
            </section>

            {/* Section VIII */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                VIII. Limitation of Liability
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Professional Services Limitation
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our services are provided with professional care and expertise. However, to the maximum extent permitted by law, our total liability for any claims arising from our services shall not exceed the fees paid by you for the specific services giving rise to the claim during the 12 months preceding the claim.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. No Consequential Damages
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                In no event shall Nexus Accounting be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, lost business opportunities, or loss of data, even if we have been advised of the possibility of such damages.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Third-Party Actions
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We are not responsible for the actions, errors, or omissions of third parties, including but not limited to government agencies, tax authorities, financial institutions, or service providers.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                4. Website Availability
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We strive to maintain Website availability but do not guarantee uninterrupted access. We are not liable for any loss or damage resulting from Website downtime, technical issues, or maintenance activities.
              </p>
            </section>

            {/* Section IX */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                IX. Disclaimers and Warranties
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Professional Standards
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We provide services in accordance with generally accepted accounting principles (GAAP) and professional standards. However, we do not guarantee specific outcomes, tax savings, or financial results.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Tax and Legal Advice
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                While we provide tax preparation and accounting services, we do not provide legal advice. For legal matters, you should consult with a qualified attorney.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Website "As Is"
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Our Website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            {/* Section X */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                X. Indemnification
              </h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Nexus Accounting, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mt-3">
                <li>Your use of our Website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Inaccurate or incomplete information you provide</li>
                <li>Your infringement of any third-party rights</li>
              </ul>
            </section>

            {/* Section XI */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XI. Termination
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Termination by Either Party
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Either party may terminate the service relationship with 30 days' written notice. Specific termination terms may be outlined in individual service agreements.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Immediate Termination
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We reserve the right to immediately terminate services or Website access if you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-4">
                <li>Breach these Terms</li>
                <li>Fail to pay outstanding invoices</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Provide false or misleading information</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Effects of Termination
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Upon termination, you remain responsible for all fees incurred prior to termination. We will provide completed work products upon receipt of full payment. You must retrieve your documents and data within 90 days of termination, after which we may delete or destroy such materials.
              </p>
            </section>

            {/* Section XII */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XII. Dispute Resolution
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                1. Informal Resolution
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                In the event of any dispute, both parties agree to first attempt to resolve the matter through good-faith negotiation.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                2. Arbitration
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                If informal resolution is unsuccessful, any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration shall take place in Dallas, Texas, unless otherwise agreed.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                3. Class Action Waiver
              </h3>
              <p className="text-slate-700 leading-relaxed">
                You agree to resolve disputes on an individual basis only and waive any right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </section>

            {/* Section XIII */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XIII. Governing Law and Jurisdiction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law principles.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Any legal action or proceeding arising out of these Terms shall be brought exclusively in the state or federal courts located in Dallas County, Texas, and you consent to the jurisdiction of such courts.
              </p>
            </section>

            {/* Section XIV */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XIV. Changes to Terms
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our Website with an updated effective date. We will make reasonable efforts to notify clients of material changes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Your continued use of our Website or services after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the changes, you must discontinue use of our services.
              </p>
            </section>

            {/* Section XV */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XV. Severability
              </h2>
              <p className="text-slate-700 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            {/* Section XVI */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XVI. Entire Agreement
              </h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any applicable service agreements, constitute the entire agreement between you and Nexus Accounting regarding your use of our Website and services, and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Section XVII */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XVII. Force Majeure
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, government actions, or internet/telecommunications failures.
              </p>
            </section>

            {/* Section XVIII */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                XVIII. Assignment
              </h2>
              <p className="text-slate-700 leading-relaxed">
                You may not assign or transfer these Terms or any rights or obligations hereunder without our prior written consent. We may assign these Terms to any affiliate or successor entity without restriction.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-slate-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-2 text-slate-700">
                <p>
                  <strong className="text-slate-900">Company Name:</strong> Nexus Accounting
                </p>
                <p>
                  <strong className="text-slate-900">Phone:</strong>{' '}
                  <a href="tel:+19727449881" className="text-blue-600 hover:text-blue-800 underline">
                    +(972) 744-9881
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900">Website:</strong>{' '}
                  <a 
                    href="https://www.nexusacct.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    www.nexusacct.com
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900">Privacy Policy:</strong>{' '}
                  <a 
                    href="https://www.nexusacct.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    www.nexusacct.com/privacy
                  </a>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  For questions regarding these Terms and Conditions, please contact us using the information above.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-slate-600 space-y-2">
            <p className="text-sm">
              &copy; 2026 Nexus Accounting. All rights reserved.
            </p>
            <p className="text-sm">
              Last Updated: February 5, 2026
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}