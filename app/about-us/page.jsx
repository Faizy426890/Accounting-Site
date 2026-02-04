'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
export default function AboutPage() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return ( 
    <>
    <div className="bg-white min-h-screen">
      <style jsx>{`
        .observe {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .observe.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Back Button - Modern Design */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium text-sm">Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Precision-driven financial services{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              built for modern businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl">
            We deliver comprehensive bookkeeping, payroll management, and tax preparation services that bring clarity, compliance, and confidence to your financial operations.
          </p>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="observe px-6 max-w-7xl mx-auto mb-24">
        <div className="inline-block">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider px-3 py-1 bg-blue-50 rounded-full">
            About
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mt-6 mb-16 tracking-tight">
          Your partner in financial clarity and growth
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a team of financial professionals dedicated to simplifying the complexities of business finance. Our expertise spans full-cycle bookkeeping, multi-state payroll management, and comprehensive tax preparation for all business entity types.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From daily transaction recording to year-end tax readiness, we handle every aspect of your financial operations with meticulous attention to detail. Our approach combines technical precision with strategic insight, ensuring your business remains compliant while positioned for sustainable growth.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="https://jetpackworkflow.com/wp-content/uploads/2023/12/accounting-firm-organizational-structure.jpg" 
              alt="Professional financial workspace with documents and calculator"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mt-10 max-w-4xl">
          Leveraging cutting-edge platforms like QuickBooks Online, Xero, Gusto, and secure cloud systems, we deliver efficient, accurate, and accessible financial services that adapt to your evolving business needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="observe px-6 max-w-7xl mx-auto mb-24">
        <div className="inline-block">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider px-3 py-1 bg-blue-50 rounded-full">
            Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mt-6 mb-12 tracking-tight">
          Comprehensive financial management for every stage
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              number: "01",
              title: "Bookkeeping Excellence",
              description: "Complete financial record management with precision and consistency.",
              items: [
                "Full-cycle bookkeeping (daily, weekly, monthly)",
                "Bank and credit card reconciliations",
                "AP/AR management and tracking",
                "Financial statement preparation",
                "Clean-up and catch-up services",
                "General ledger maintenance"
              ]
            },
            {
              number: "02",
              title: "Payroll Management",
              description: "Streamlined payroll processing with full compliance assurance.",
              items: [
                "Complete payroll processing",
                "Multi-state payroll support",
                "Payroll tax filings and compliance",
                "W-2 and 1099 preparation",
                "Employee and contractor setup",
                "Payroll reporting and reconciliations"
              ]
            },
            {
              number: "03",
              title: "Tax Preparation",
              description: "Draft-ready business tax returns for all entity types.",
              items: [
                "Federal and state tax return preparation",
                "LLC, Partnership, S-Corp, C-Corp support",
                "Tax workpaper documentation",
                "Book-to-tax reconciliations",
                "Year-end tax readiness",
                "Extension and amended return support"
              ]
            },
            {
              number: "04",
              title: "Financial Advisory",
              description: "Strategic insights through comprehensive reporting and analysis.",
              items: [
                "Monthly financial reporting",
                "Budgeting and forecasting",
                "Cash flow management",
                "Profitability analysis",
                "Cost optimization strategies",
                "Management reporting"
              ]
            },
            {
              number: "05",
              title: "Tax Compliance",
              description: "Comprehensive support for all tax obligations and requirements.",
              items: [
                "Estimated tax calculations",
                "IRS and state notice assistance",
                "Tax organizer preparation",
                "Compliance planning support",
                "Documentation management",
                "Tax data compilation"
              ]
            },
            {
              number: "06",
              title: "Technology Integration",
              description: "Modern tools and secure systems for seamless operations.",
              items: [
                "QuickBooks Online and Xero expertise",
                "Gusto, ADP, QBO Payroll integration",
                "Secure client portals",
                "Workflow automation",
                "Document management systems",
                "Data protection and security"
              ]
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-xs font-bold text-blue-600 mb-4 tracking-wider">
                {service.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="observe py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { value: "100%", label: "Compliance Accuracy" },
              { value: "Multi-State", label: "Payroll Support" },
              { value: "All Entities", label: "LLC, S-Corp, C-Corp, Partnership" },
              { value: "24/7", label: "Secure Access" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-light bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="observe py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider px-3 py-1 bg-blue-50 rounded-full">
              Our Approach
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mt-6 mb-6 tracking-tight">
            Built on expertise, driven by results
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
            Our team combines decades of experience in accounting, tax law, and financial technology to deliver services that go beyond compliance. We're committed to understanding your unique business needs and providing solutions that scale with your growth.
          </p>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
              alt="Professional business team collaborating on financial planning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="observe px-6 max-w-7xl mx-auto py-24">
        <div className="inline-block">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider px-3 py-1 bg-blue-50 rounded-full">
            Expertise
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mt-6 mb-12 tracking-tight">
          Why businesses trust us
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Precision & Accuracy",
              text: "Every transaction is recorded, reconciled, and reviewed with meticulous attention to detail, ensuring audit-ready books and compliance confidence."
            },
            {
              title: "Technology-Driven",
              text: "We leverage industry-leading platforms and automation to deliver efficient, accurate, and accessible financial services."
            },
            {
              title: "Compliance Focused",
              text: "Stay ahead of federal, state, and local requirements with our comprehensive knowledge of tax laws and payroll regulations."
            },
            {
              title: "Strategic Partnership",
              text: "More than service providers, we're invested in your success, offering insights and guidance that drive informed decisions."
            }
          ].map((expertise, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-blue-50 to-transparent group-hover:h-full transition-all duration-300 -z-10"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {expertise.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {expertise.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
            Ready to elevate your financial operations?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Let's discuss how our services can bring clarity and confidence to your business finances.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span>Get Started</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>   
    <Footer/>
    </>
  );
}