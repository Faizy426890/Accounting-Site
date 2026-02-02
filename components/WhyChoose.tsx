"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function AccountingExpertise() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
      }
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

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      {/* Main Section */}
      <section ref={sectionRef} className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Content - Animates from LEFT */}
            <div className="space-y-6">
              <p className={`text-cyan-500 font-medium text-sm tracking-wide transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              } delay-100`}>
                Why Choose Us
              </p>
              
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              } delay-200`}>
                Why Businesses Trust Our Accounting & Tax Expertise
              </h1>
              
              {/* Team Image */}
              <div className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              } delay-300`}>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop" 
                  alt="Team meeting"
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Blue CTA Box */}
              <div className={`bg-cyan-500 text-white p-8 rounded-lg shadow-lg transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              } delay-[400ms]`}>
                <p className="text-lg font-normal leading-relaxed mb-6">
                  Our team is always ready to provide expert guidance & real solutions.
                </p>
                <button className="bg-white text-cyan-500 px-6 py-3 rounded font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Content - Animates from RIGHT */}
            <div className="space-y-8">
              {/* Top Image */}
              <div className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              } delay-[500ms]`}>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                  alt="Business professionals working"
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Description Text */}
              <div className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              } delay-[600ms]`}>
                <p className="text-gray-600 text-base leading-relaxed">
                  We combine professional expertise with a personalized approach to deliver reliable accounting and tax services. Our mission is to help businesses stay financially confident, compliant, and ready to grow.
                </p>
              </div>

              {/* Features with Blue Checkmarks */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className={`flex gap-4 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                } delay-[700ms]`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Experienced Accounting Professionals
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Work with a team of certified accountant & tax consultant who understand your business needs.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className={`flex gap-4 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                } delay-[800ms]`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Accurate & Transparent Processes
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Every number matters. We ensure precise reporting, clear communication, and full compliance.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className={`flex gap-4 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                } delay-[900ms]`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Tailored Financial Solutions
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      From startups to corporations, our services adapt to fit your unique goals and structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}