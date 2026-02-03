'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/diml90c1y/image/upload/v1769895122/logo_1_kk76ps.png" 
            alt="Nexus Logo" 
            className="h-24 w-auto lg:h-24"
          />
        </div>

        <ul className="hidden items-center gap-10 text-white lg:flex">
          <li className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">Home</li>
          <li className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">About Us</li>
          <li className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">Services</li>
          <li className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">Case Studies</li>
          <li className="cursor-pointer text-base font-semibold transition-all hover:text-cyan-400 hover:scale-105">Pages</li>
        </ul>

        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <div className="text-left">
            <p className="text-xs font-medium text-cyan-100">Phone Number</p>
            <p className="text-base font-bold text-white">+(469) 472-2311</p>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-center px-8 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 backdrop-blur-sm animate-fade-in">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <p className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">Professional Accounting Services</p>
              </div>
              <h1 className="text-6xl font-bold leading-tight text-white lg:text-8xl animate-slide-up">
                Accounting &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bookkeeping</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-delay">
                Streamline your financial operations with our comprehensive accounting and bookkeeping solutions. From daily transactions to year-end close, we handle every detail with precision and expertise.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-delay-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Full-Cycle Bookkeeping</h3>
                  <p className="text-sm text-gray-400">Daily, weekly, and monthly financial management</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Bank Reconciliations</h3>
                  <p className="text-sm text-gray-400">Accurate matching of all transactions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Financial Statements</h3>
                  <p className="text-sm text-gray-400">P&L, Balance Sheet, and Cash Flow reports</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Payroll Management</h3>
                  <p className="text-sm text-gray-400">Complete payroll processing and compliance</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-bold text-white">1,200</span>
                  <span className="text-4xl text-cyan-400">+</span>
                </div>
                <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Clients Served</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-bold text-white">5,000</span>
                  <span className="text-4xl text-cyan-400">+</span>
                </div>
                <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Transactions Processed</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-bold text-white">98</span>
                  <span className="text-4xl text-cyan-400">%</span>
                </div>
                <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Client Retention</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-end space-y-8">
            <div className="max-w-xl space-y-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 p-10 backdrop-blur-xl border border-white/20 shadow-2xl animate-fade-in-delay-3">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Why Choose Nexus?</h3>
                <p className="text-lg leading-relaxed text-gray-200">
                  At Nexus, we understand that managing your finances can be overwhelming. That's why we've built our practice around one simple principle: making accounting and bookkeeping accessible, accurate, and stress-free for businesses of all sizes.
                </p>
                <p className="text-base leading-relaxed text-gray-300">
                  Our team of certified professionals brings expertise across full-cycle bookkeeping, payroll management, and financial compliance. Whether you're catching up on previous books, managing daily transactions, or preparing critical financial statements, we handle every detail with precision and care. From AP/AR management to payroll tax filings, we provide end-to-end solutions that give you clarity, confidence, and control over your financial health.
                </p>
                <p className="text-base leading-relaxed text-gray-300">
                  We don't just crunch numbers—we become your trusted financial partner, dedicated to helping your business thrive through accurate reporting, strategic insights, and unwavering support every step of the way.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105">
                  Explore Services
                  <svg 
                    className="h-5 w-5 transition-transform group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button className="group flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  Contact Us
                  <svg 
                    className="h-5 w-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">A+</p>
                  <p className="text-xs text-gray-400 uppercase">BBB Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">24/7</p>
                  <p className="text-xs text-gray-400 uppercase">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      {/* <div className="relative z-10 px-8 pb-12 lg:px-16">
        <div className="rounded-3xl bg-gradient-to-r from-white/95 via-white/98 to-white/95 px-12 py-10 backdrop-blur-xl shadow-2xl border border-white/50">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Trusted by Leading Companies</p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="flex items-center gap-3 transition-all hover:scale-110 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-gray-800">bravix</span>
            </div>
            <div className="flex items-center gap-3 transition-all hover:scale-110 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-gray-800">Adstrix</span>
            </div>
            <div className="flex items-center gap-3 transition-all hover:scale-110 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-gray-800">zenvix</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">Join 500+ satisfied clients who trust us with their accounting needs</p>
        </div>
      </div> */}

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