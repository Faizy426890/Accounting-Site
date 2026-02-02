"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function AccountingProcess() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    step1: false,
    step2: false,
    step3: false
  });

  const headerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          setVisibleSections(prev => ({
            ...prev,
            [sectionId]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    [headerRef, step1Ref, step2Ref, step3Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [headerRef, step1Ref, step2Ref, step3Ref].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
          <div 
            ref={headerRef}
            data-section="header"
            className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
              visibleSections.header
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[#26C5F3] font-semibold text-sm tracking-widest mb-4 uppercase">
              How It Works
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our Simple & Transparent Accounting Process
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We make managing your finances easier through a clear, structured process. 
              From consultation to ongoing support, we're with you every step of the way.
            </p>
          </div>

          {/* Step 1 - Schedule a Consultation */}
          <div 
            ref={step1Ref}
            data-section="step1"
            className={`mb-24 transition-all duration-700 ${
              visibleSections.step1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#26C5F3] bg-opacity-10 rounded-2xl mb-6">
                  <span className="text-3xl font-bold text-[#26C5F3]">01</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Schedule a Consultation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our expert accountants provide tailored solutions to ensure accurate bookkeeping 
                  and efficient tax planning. We start by understanding your unique business needs 
                  and financial goals.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free initial consultation to assess your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personalized approach for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear pricing with no hidden fees</span>
                  </li>
                </ul>
                <button className="bg-[#26C5F3] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1fb3e0] transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#26C5F3] bg-opacity-10 rounded-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                    alt="Business consultation"
                    className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Analyze & Strategize */}
          <div 
            ref={step2Ref}
            data-section="step2"
            className={`mb-24 transition-all duration-700 delay-100 ${
              visibleSections.step2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#26C5F3] bg-opacity-10 rounded-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                    alt="Financial analysis"
                    className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#26C5F3] bg-opacity-10 rounded-2xl mb-6">
                  <span className="text-3xl font-bold text-[#26C5F3]">02</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Analyze & Strategize
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our team reviews your financial records, identifies opportunities to optimize 
                  tax savings, and creates a clear accounting strategy tailored to your business goals.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprehensive financial record review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tax optimization and savings strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Customized accounting roadmap</span>
                  </li>
                </ul>
                <button className="bg-[#26C5F3] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1fb3e0] transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
                  View Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 - Manage & Support */}
          <div 
            ref={step3Ref}
            data-section="step3"
            className={`mb-12 transition-all duration-700 delay-200 ${
              visibleSections.step3
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#26C5F3] bg-opacity-10 rounded-2xl mb-6">
                  <span className="text-3xl font-bold text-[#26C5F3]">03</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Manage & Support
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We handle the day-to-day accounting, tax filings, and reporting so you can 
                  focus on growing your business with confidence. Our ongoing support ensures 
                  your finances stay organized and compliant.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Daily bookkeeping and transaction management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Timely tax filings and compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Regular financial reports and insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#26C5F3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated support team always available</span>
                  </li>
                </ul>
                <button className="bg-[#26C5F3] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1fb3e0] transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#26C5F3] bg-opacity-10 rounded-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-[#26C5F3] to-[#1fb3e0] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Streamline Your Accounting?
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Join hundreds of businesses who trust us with their financial management. 
              Get started with a free consultation today.
            </p>
            <button className="bg-white text-[#26C5F3] px-10 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}