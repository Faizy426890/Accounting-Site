import React from 'react';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return ( 
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Back to Home Button */}
          <a 
            href="/" 
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="tel:972-744-9881" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-500 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-medium hidden sm:inline">972-744-9881</span>
            </a>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=555+Republic+Drive+Suite+214+Plano+TX+75074" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-500 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="font-medium hidden lg:inline">555 Republic Drive Suite 213, Plano TX 75074</span>
            </a>

            <a 
              href="mailto:Info@nexusacct.com" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-500 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium hidden sm:inline">Info@nexusacct.com</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <div className="inline-block mb-6">
                <span className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg">
                  Professional Financial Services
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Comprehensive Solutions for{' '}
                <span className="text-blue-400 block mt-2">
                  Your Business Success
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Expert bookkeeping, payroll management, and tax preparation services designed to streamline your financial operations and drive sustainable growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">100% Accurate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">Fully Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">Always Secure</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule a Consultation
                </a>
                <a 
                  href="tel:972-744-9881" 
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  972-744-9881
                </a>
              </div>
            </div>
            
            {/* Image/Stats Section */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                  alt="Financial Excellence" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 rounded-lg p-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">500+</p>
                    <p className="text-sm text-slate-600 font-medium">Businesses Served</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-blue-500 rounded-xl shadow-2xl p-6 max-w-xs z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-lg p-3">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">99.9%</p>
                    <p className="text-sm text-blue-100 font-medium">Accuracy Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Tailored Financial Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive services designed to meet the unique needs of modern businesses
            </p>
          </div>

          {/* Accounting & Bookkeeping */}
          <div className="mb-12 bg-white rounded-xl shadow-lg p-10 md:p-12 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-slate-900 rounded-lg p-4 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Accounting & Bookkeeping</h3>
                <p className="text-slate-600 mb-3">Complete financial record-keeping and management solutions</p>
                <div className="h-1 w-24 bg-blue-500 rounded"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 text-slate-700">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Full-Cycle Bookkeeping (Daily, Weekly, Monthly)</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Clean-Up & Catch-Up of Previous Books</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Month-End & Year-End Close</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Bank & Credit Card Reconciliations</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Accounts Payable (AP) & Accounts Receivable (AR)</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">General Ledger Maintenance & Accuracy Review</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors md:col-span-2">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Financial Statement Preparation (P&L, Balance Sheet, Cash Flow)</span>
              </div>
            </div>
          </div>

          {/* Payroll & Compliance */}
          <div className="mb-12 bg-white rounded-xl shadow-lg p-10 md:p-12 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-blue-500 rounded-lg p-4 mt-1">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Payroll & Compliance</h3>
                <p className="text-slate-600 mb-3">Streamlined payroll processing with full regulatory compliance</p>
                <div className="h-1 w-24 bg-blue-500 rounded"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 text-slate-700">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Payroll Processing & Management</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Employee & Contractor Setup</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Payroll Tax Filings & Compliance</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Multi-State Payroll Support</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">W-2 & 1099 Preparation and Filing</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Payroll Reporting & Reconciliations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Preparation Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider mb-6">
              Expert Tax Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tax Preparation & Compliance Support
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Comprehensive tax services to keep your business compliant and optimized
            </p>
          </div>

          <div className="mb-16">
            <img 
              src="https://www.pnc.com/content/dam/pnc-thought-leadership/small-business/running-your-business/pnc_insights_best-practices-for-small-business-tax-prep.jpg" 
              alt="Tax Preparation" 
              className="w-full h-72 object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Business Tax Preparation */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-500 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-500 rounded-lg p-3">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Business Tax Preparation</h3>
                  <div className="h-1 w-full bg-blue-500 rounded"></div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">U.S. Business Tax Return Preparation (Draft & Review-Ready)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Federal & State Tax Return Preparation Support</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Tax Workpaper & Documentation Preparation</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Year-End Tax Readiness & Book-to-Tax Reconciliations</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Tax Data Compilation & Review for Filing</span>
                </li>
              </ul>
            </div>

            {/* Supported Business Entities */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-500 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-500 rounded-lg p-3">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Supported Business Entities</h3>
                  <div className="h-1 w-full bg-blue-500 rounded"></div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">LLCs (Single-Member & Multi-Member)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Partnerships (Form 1065 – Preparation Support)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">S-Corporations (Form 1120S – Preparation Support)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">C-Corporations (Form 1120 – Preparation Support)</span>
                </li>
              </ul>
            </div>

            {/* Tax Compliance Support */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-slate-900 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-slate-900 rounded-lg p-3">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Tax Compliance Support</h3>
                  <div className="h-1 w-full bg-slate-900 rounded"></div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Estimated Tax Calculations & Planning Support</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Extension Preparation Support (Form 7004 / 4868 – draft)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Amended Return Preparation Support (Draft)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">IRS & State Notice Assistance (Non-representative)</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Tax Organizer & Client Questionnaire Preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Management Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Advanced Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Financial Management & Technology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge tools and advisory services for modern business operations
            </p>
          </div>

          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop" 
              alt="Financial Management" 
              className="w-full h-72 object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Financial Management & Advisory */}
            <div className="bg-white rounded-xl shadow-lg p-10 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-blue-500 rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Financial Management & Advisory</h3>
                  <p className="text-slate-600 mb-3">Strategic insights to optimize your financial performance</p>
                  <div className="h-1 w-32 bg-blue-500 rounded"></div>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Monthly Financial Reporting & Analysis</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Budgeting & Forecasting</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Cash Flow Management</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Profitability & Cost Optimization</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Management Reports for Business Owners</span>
                </div>
              </div>
            </div>

            {/* Technology & Process Excellence */}
            <div className="bg-white rounded-xl shadow-lg p-10 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-blue-500 rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Technology & Process Excellence</h3>
                  <p className="text-slate-600 mb-3">Modern platforms and automation for efficiency</p>
                  <div className="h-1 w-32 bg-blue-500 rounded"></div>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">QuickBooks Online & Xero Expertise</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Payroll Platforms (Gusto, ADP, QBO Payroll)</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Secure Client Portals & E-Signature</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Workflow Automation & Process Optimization</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">Secure Document Management & Data Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider mb-6">
              About Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 leading-tight">
            Your partner in financial{' '}
            <span className="text-blue-400">clarity and growth</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed">
                We are a team of financial professionals dedicated to simplifying the complexities of business finance. Our expertise spans full-cycle bookkeeping, multi-state payroll management, and comprehensive tax preparation support.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                With a commitment to precision, compliance, and innovation, we help modern businesses maintain financial clarity while focusing on growth and strategic objectives.
              </p>
              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Started Today
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                alt="Financial Team" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>   
    <Footer/>
    </>
  );
}