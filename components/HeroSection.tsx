'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Images with Fade Animation */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 lg:px-16">
        <div className="flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/diml90c1y/image/upload/v1769895122/logo_1_kk76ps.png" 
            alt="Nexus Logo" 
            className="h-16 w-auto sm:h-20 lg:h-24"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 text-white lg:flex">
          <li>
            <Link href="/" className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">
              Contact 
            </Link>
          </li>
        </ul>

        {/* Desktop Right Section - Phone & Login */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Phone Number */}
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <div className="text-left">
              <p className="text-xs font-medium text-cyan-100">Phone Number</p>
              <p className="text-base font-bold text-white">+(972) 744-9881</p>
            </div>
          </div>

          {/* Login Button */}
        <a
  href="/login"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-lg bg-blue-100 px-5 py-3  font-semibold text-black shadow-md transition-all duration-200 hover:bg-blue-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-2"
>
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    />
  </svg>

  Login
</a>

        </div>

        {/* Mobile Hamburger/Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 p-2 rounded-lg transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 right-0 h-auto max-h-screen overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img 
              src="https://res.cloudinary.com/diml90c1y/image/upload/v1769895122/logo_1_kk76ps.png" 
              alt="Nexus Logo" 
              className="h-16 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-8">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between text-base font-semibold text-white py-4 px-5 rounded-xl transition-all hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-400 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="flex items-center justify-between text-base font-semibold text-white py-4 px-5 rounded-xl transition-all hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-400 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>About Us</span>
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center justify-between text-base font-semibold text-white py-4 px-5 rounded-xl transition-all hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-400 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Services</span>
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center justify-between text-base font-semibold text-white py-4 px-5 rounded-xl transition-all hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-400 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Login Button */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold text-white shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login to Portal
              </a>
            </div>

            {/* Mobile Phone Number */}
            <div className="mt-6">
              <a 
                href="tel:+9727449881"
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-gray-400">Call Us Anytime</p>
                  <p className="text-base font-bold text-white">+(972) 744-9881</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 backdrop-blur-sm animate-fade-in">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <p className="text-xs sm:text-sm font-semibold text-cyan-300 uppercase tracking-wide">Professional Accounting Services</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white lg:text-8xl animate-slide-up">
                Accounting &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bookkeeping</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-delay">
                Streamline your financial operations with our comprehensive accounting and bookkeeping solutions. From daily transactions to year-end close, we handle every detail with precision and expertise.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 animate-fade-in-delay-2">
              <div className="flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-cyan-500/20 flex-shrink-0">
                  <svg className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white">Full-Cycle Bookkeeping</h3>
                  <p className="text-xs lg:text-sm text-gray-400">Daily, weekly, and monthly financial management</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-cyan-500/20 flex-shrink-0">
                  <svg className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white">Bank Reconciliations</h3>
                  <p className="text-xs lg:text-sm text-gray-400">Accurate matching of all transactions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-cyan-500/20 flex-shrink-0">
                  <svg className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white">Financial Statements</h3>
                  <p className="text-xs lg:text-sm text-gray-400">P&L, Balance Sheet, and Cash Flow reports</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-cyan-500/20 flex-shrink-0">
                  <svg className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white">Payroll Management</h3>
                  <p className="text-xs lg:text-sm text-gray-400">Complete payroll processing and compliance</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-10 pt-6 lg:pt-8 border-t border-white/10">
              <div className="space-y-1 lg:space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">100</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-cyan-400">+</span>
                </div>
                <p className="text-xs lg:text-sm font-semibold text-gray-300 uppercase tracking-wide">Clients Served</p>
              </div>

              <div className="space-y-1 lg:space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">5000</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-cyan-400">+</span>
                </div>
                <p className="text-xs lg:text-sm font-semibold text-gray-300 uppercase tracking-wide">Transactions Processed</p>
              </div>

              <div className="space-y-1 lg:space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">98</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-cyan-400">%</span>
                </div>
                <p className="text-xs lg:text-sm font-semibold text-gray-300 uppercase tracking-wide">Client Retention</p>
              </div>
            </div>
          </div>

          {/* Right Content - Condensed */}
          <div className="flex flex-col items-end space-y-6 lg:space-y-8">
            <div className="max-w-xl w-full space-y-6 lg:space-y-8 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/15 to-white/5 p-6 lg:p-10 backdrop-blur-xl border border-white/20 shadow-2xl animate-fade-in-delay-3">
              <div className="space-y-3 lg:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                  We make accounting accessible and stress-free for businesses of all sizes. Our certified professionals provide end-to-end solutions—from bookkeeping to payroll—giving you clarity and control over your financial health.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4">
                <Link href="/services" className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 lg:px-8 py-3 lg:py-4 font-bold text-white shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105 text-sm lg:text-base">
                  Explore Services
                  <svg 
                    className="h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link href="/contact" className="group flex items-center justify-center gap-3 rounded-full bg-white/10 px-6 lg:px-8 py-3 lg:py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 text-sm lg:text-base">
                  Contact Us
                  <svg 
                    className="h-4 w-4 lg:h-5 lg:w-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-4 lg:pt-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-cyan-400">A+</p>
                  <p className="text-xs text-gray-400 uppercase">BBB Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-cyan-400">24/7</p>
                  <p className="text-xs text-gray-400 uppercase">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease-out 0.2s both;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}