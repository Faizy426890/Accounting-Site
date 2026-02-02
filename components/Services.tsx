'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedWords, setAnimatedWords] = useState([]);
  const sectionRef = useRef(null);

  const headingText = "Expert Financial Solutions for Your Business";
  const words = headingText.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      words.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedWords(prev => [...prev, index]);
        }, index * 150);
      });
    }
  }, [isVisible]);

  const services = [
    {
      icon: (
        <svg className="h-8 w-8 text-cyan-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 4h4v2h-4V9zm6 10H8v-2h8v2zm2-4H6v-2h12v2z"/>
        </svg>
      ),
      title: 'Bookkeeping &',
      subtitle: 'Accounting',
      image: 'https://milestone.inc/wp-content/webp-express/webp-images/uploads/2024/09/7-differences-between-book-keeping-and-accounting-1.jpeg.webp',
      description: 'Maintain accurate financial records with professional bookkeeping services, ensuring clarity and compliance.',
      delay: '0.2s'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-cyan-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3h2v2h-2V6zm0 4h2v2h-2v-2zm-4-4h2v2H8V6zm0 4h2v2H8v-2zM6 6h2v2H6V6zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm10 6H8v-2h8v2zm2-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z"/>
        </svg>
      ),
      title: 'Tax Preparation',
      subtitle: '& Filing',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      description: 'Simplify your tax season with expert tax consultants who handle everything from planning to filing on time.',
      delay: '0.4s'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-cyan-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-10-7h2v5h-2v-5zm4 0h2v5h-2v-5zm-8 0h2v5H6v-5z"/>
        </svg>
      ),
      title: 'Payroll',
      subtitle: 'Management',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      description: 'Streamline payroll processes, reduce errors, and ensure your employees are paid accurately and on schedule.',
      delay: '0.6s'
    }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-6 text-center sm:mb-16">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500"></span>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 sm:text-sm">Our Services</p>
          </div>

          {/* Layout with Description and Heading */}
          <div className="mb-8 flex flex-col items-start justify-between gap-6 text-left sm:mb-12 lg:flex-row lg:gap-8">
            {/* Left Side Description */}
            <div className="w-full space-y-3 animate-fade-in-left sm:space-y-4 lg:w-1/3">
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                We provide tailored accounting and tax services designed to help businesses stay organized, compliant, and financially secure.
              </p>
              <a 
                href="#" 
                className="group inline-flex items-center gap-2 font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
              >
                View all Services
                <svg 
                  className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right Side - Animated Heading */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`mr-2 inline-block transition-all duration-700 sm:mr-3 ${
                      animatedWords.includes(index)
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-12 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden  bg-white  transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: service.delay }}
            >
              {/* Icon */}
              <div className="absolute left-4 top-4 z-10 rounded-xl bg-white p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:left-6 sm:top-6 sm:p-4">
                {service.icon}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden sm:h-56 lg:h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 sm:text-2xl">
                    {service.title}
                  </h3>
                  <h4 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 sm:text-2xl">
                    {service.subtitle}
                  </h4>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="group/btn mt-3 flex items-center gap-2 font-semibold text-gray-700 transition-colors hover:text-cyan-600 sm:mt-4">
                  Learn More
                  <svg 
                    className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l4 4m0 0l-4 4m4-4H8" />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Border */}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out both;
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
    </section>
  );
}