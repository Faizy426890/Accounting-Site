import React from 'react';
import Head from 'next/head';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Nexus Accounting</title>
        <meta name="description" content="Privacy Policy for Nexus Accounting - Learn how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.companyName}>Nexus Accounting</h1>
          <div className={styles.policyTitle}>Privacy Policy</div>
          <div className={styles.effectiveDate}>Effective Date: February 5, 2026</div>
        </header>

        <section>
          <h2 className={styles.sectionTitle}>I. Introduction and Scope</h2>
          <p>
            This Privacy Policy explains how Nexus Accounting ("we," "us," or "our") collects, uses, 
            and protects the personal information of website visitors, clients, applicants, and business 
            contacts. By accessing or using our website at{' '}
            <a href="https://www.nexusacct.com" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com
            </a>
            , you consent to the practices described in this Policy.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>II. Information We Collect</h2>
          
          <h3 className={styles.subTitle}>1. Client Contact Data</h3>
          <ul className={styles.list}>
            <li>Name</li>
            <li>Job title</li>
            <li>Company name</li>
            <li>Work email address</li>
            <li>Business phone number</li>
          </ul>

          <h3 className={styles.subTitle}>2. Operational / Commercial Data</h3>
          <p>
            Information regarding the accounting and bookkeeping services your company requires, 
            financial workflows, documentation, and operational needs.
          </p>

          <h3 className={styles.subTitle}>3. Billing Data</h3>
          <p>
            Information necessary for invoicing, payment processing, and financial reporting.
          </p>

          <h3 className={styles.subTitle}>4. Usage Data</h3>
          <p>We automatically collect:</p>
          <ul className={styles.list}>
            <li>IP address</li>
            <li>Device and browser type</li>
            <li>Pages visited</li>
            <li>Interaction logs</li>
          </ul>
          <p>Used for analytics, performance, and security purposes.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>III. How We Use Your Information</h2>

          <h3 className={styles.subTitle}>1. Contract & Service Delivery</h3>
          <p>To:</p>
          <ul className={styles.list}>
            <li>Onboard your organization</li>
            <li>Deliver and manage accounting and bookkeeping services</li>
            <li>Provide operational or technical support</li>
            <li>Maintain communication regarding your account</li>
          </ul>

          <h3 className={styles.subTitle}>2. Client Communication</h3>
          <p>To send:</p>
          <ul className={styles.list}>
            <li>Service updates</li>
            <li>Operational alerts</li>
            <li>Project-related correspondence</li>
            <li>Follow-up messages</li>
          </ul>

          <h3 className={styles.subTitle}>3. Third-Party Service Providers</h3>
          <p>We may share information with:</p>
          <ul className={styles.list}>
            <li>Hosting platforms</li>
            <li>Communication platforms</li>
            <li>Security and IT vendors</li>
            <li>Payment processors</li>
          </ul>
          <p>All vendors must protect your data under contractual obligations.</p>

          <h3 className={styles.subTitle}>4. Marketing (Optional)</h3>
          <p>Promotional communications are sent only with explicit consent.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>IV. Sharing & Disclosure</h2>
          <p>
            <strong>We do not sell personal information.</strong> Data is shared only when required:
          </p>

          <h3 className={styles.subTitle}>1. Internal Teams</h3>
          <p>Access granted only to staff necessary to provide services.</p>

          <h3 className={styles.subTitle}>2. Service Providers</h3>
          <p>Trusted vendors assisting with hosting, communication, security, and payment processing.</p>

          <h3 className={styles.subTitle}>3. Legal Obligations</h3>
          <p>When required by court order or government regulation.</p>
        </section>

        <section className={styles.smsPolicy}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.emoji}>📱</span> V. SMS Communications & Messaging Policy
          </h2>
          <p>
            Nexus Accounting may send SMS messages to clients, website users, and job applicants 
            who voluntarily provide their phone number and explicitly opt in to receive text messages. 
            These messages may include service updates, operational alerts, scheduling information, 
            hiring notifications, reminders, or other business-related communications.
          </p>

          <h3 className={styles.subTitle}>Message Frequency</h3>
          <p>
            Message frequency varies. You may receive up to 5 messages per week depending on your 
            interactions with Nexus Accounting.
          </p>

          <h3 className={styles.subTitle}>Opt-Out Instructions</h3>
          <p>
            You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. 
            After opting out, you will not receive further SMS messages unless you opt in again.
          </p>

          <h3 className={styles.subTitle}>Help</h3>
          <p>
            For assistance, reply <strong>HELP</strong> or contact us at{' '}
            <a href="tel:+19727449881">+(972) 744-9881</a> or visit{' '}
            <a href="https://www.nexusacct.com" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com
            </a>.
          </p>

          <h3 className={styles.subTitle}>Message & Data Rates</h3>
          <p>Message and data rates may apply depending on your mobile carrier plan.</p>

          <h3 className={styles.subTitle}>Consent Requirements</h3>
          <p>
            Providing a phone number is optional. SMS messages are only sent when explicit consent 
            is given. Nexus Accounting will never sell, share, or trade phone numbers or SMS consent 
            information with any third party for marketing or non-operational purposes.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>VI. Data Security</h2>
          <p>
            We use industry-standard administrative, technical, and physical safeguards to protect 
            your data. This includes:
          </p>
          <ul className={styles.list}>
            <li>Encrypted data transmission</li>
            <li>Secure server infrastructure</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            While we strive for full protection, no method of transmission over the internet is 
            completely secure. We continuously update our security measures to protect your information.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>VII. Your Rights</h2>
          <p>Users may have rights to:</p>
          <ul className={styles.list}>
            <li>Access their personal data</li>
            <li>Request corrections or deletion</li>
            <li>Withdraw consent (including SMS consent)</li>
            <li>Limit certain types of processing</li>
            <li>Object to data processing</li>
            <li>Request data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a href="tel:+19727449881">+(972) 744-9881</a> or visit our website at{' '}
            <a href="https://www.nexusacct.com" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>VIII. Terms of Service Summary</h2>
          <p>
            By using{' '}
            <a href="https://www.nexusacct.com" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com
            </a>
            , you agree to:
          </p>
          <ul className={styles.list}>
            <li>Use the website lawfully</li>
            <li>Provide accurate information</li>
            <li>Comply with applicable laws</li>
            <li>Respect intellectual property rights</li>
          </ul>
          <p>
            Full Terms available at:{' '}
            <a href="https://www.nexusacct.com/terms" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com/terms
            </a>
          </p>
        </section>

        <section className={styles.optInExample}>
          <h2 className={styles.sectionTitle}>IX. Implementation Guide: SMS Opt-In Checkbox (Required)</h2>
          <p>
            <strong>Place this next to an unchecked checkbox on all forms collecting phone numbers:</strong>
          </p>
          <div className={styles.checkboxExample}>
            <p>
              ☐ I consent to Nexus Accounting contacting me via phone or text at the number provided 
              regarding my inquiry and accounting services. Reply STOP to cancel. Standard message 
              and data rates may apply.
            </p>
          </div>
        </section>

        <section className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <p><strong>Company Name:</strong> Nexus Accounting</p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+19727449881">+(972) 744-9881</a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a href="https://www.nexusacct.com" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com
            </a>
          </p>
          <p>
            <strong>Terms of Service:</strong>{' '}
            <a href="https://www.nexusacct.com/terms" target="_blank" rel="noopener noreferrer">
              www.nexusacct.com/terms
            </a>
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>X. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be posted 
            on this page with an updated effective date. We encourage you to review this Privacy 
            Policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>XI. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required or permitted 
            by law. When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2026 Nexus Accounting. All rights reserved.</p>
          <p>Last Updated: February 5, 2026</p>
        </footer>
      </div>
    </>
  );
}