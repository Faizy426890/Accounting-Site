"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AchievementSection() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [counts, setCounts] = useState({
    businesses: 0,
    transactions: 0,
    satisfaction: 0,
    strategies: 0
  });

  const sectionRef = useRef(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        });
      },
      { threshold: 0.3 }
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

  // Counter animation
  useEffect(() => {
    if (!visibleStats) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      businesses: 500,
      transactions: 12,
      satisfaction: 95,
      strategies: 300
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        businesses: Math.floor(targets.businesses * progress),
        transactions: Math.floor(targets.transactions * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        strategies: Math.floor(targets.strategies * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [visibleStats]);

  return (
    <div className="bg-gradient-to-br from-[#2c3a49] via-[#435b72] to-[#394a59] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div 
          ref={sectionRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className={`transition-all duration-700 ${
            visibleStats ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-[#26C5F3] font-semibold text-sm tracking-wider mb-4 uppercase">
              Proven Results
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Achievement Speak for Themselves
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              We take pride in delivering measurable financial results. With years of 
              expertise and trusted service, our firm has supported businesses of all 
              sizes to stay compliant, efficient, and financially strong.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/about-us" className="bg-[#26C5F3] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1fb3e0] transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
                More About Us
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
              </Link>
              
              <div className="flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex -space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm leading-tight">Satisfied</p>
                  <p className="text-gray-300 text-sm leading-tight">Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className={`transition-all duration-700 delay-200 ${
            visibleStats ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stat Card 1 - Businesses Served */}
              <div className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4">
                  <span className="text-6xl lg:text-7xl font-bold text-white inline-block">
                    {counts.businesses}
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-[#26C5F3] ml-1">+</span>
                </div>
                <p className="text-white font-semibold text-lg mb-1">Businesses</p>
                <p className="text-gray-300 text-base">Served</p>
                <div className="mt-6 h-1 w-16 bg-[#26C5F3] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>

              {/* Stat Card 2 - Transactions Processed */}
              <div className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4">
                  <span className="text-6xl lg:text-7xl font-bold text-white inline-block">
                    {counts.transactions}M
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-[#26C5F3] ml-1">+</span>
                </div>
                <p className="text-white font-semibold text-lg mb-1">Transactions</p>
                <p className="text-gray-300 text-base">Processed</p>
                <div className="mt-6 h-1 w-16 bg-[#26C5F3] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>

              {/* Stat Card 3 - Client Satisfaction */}
              <div className="rounded-2xl p-8  transition-all duration-300 hover:scale-105 group">
                <div className="mb-4">
                  <span className="text-6xl lg:text-7xl font-bold text-white inline-block">
                    {counts.satisfaction}
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-[#26C5F3] ml-1">%</span>
                </div>
                <p className="text-white font-semibold text-lg mb-1">Client Satisfaction</p>
                <p className="text-gray-300 text-base">Rate</p>
                <div className="mt-6 h-1 w-16 bg-[#26C5F3] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>

              {/* Stat Card 4 - Tax Strategies */}
              <div className="rounded-2xl p-8  transition-all duration-300 hover:scale-105 group">
                <div className="mb-4">
                  <span className="text-6xl lg:text-7xl font-bold text-white inline-block">
                    {counts.strategies}
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-[#26C5F3] ml-1">+</span>
                </div>
                <p className="text-white font-semibold text-lg mb-1">Tax Strategies</p>
                <p className="text-gray-300 text-base">Implemented</p>
                <div className="mt-6 h-1 w-16 bg-[#26C5F3] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>

            {/* Additional Stats Bar */}
            <div className="mt-6 bg-white bg-opacity-5  text-gray-600 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-between hover:bg-opacity-10 transition-all duration-300">
              <div className="flex items-center text-gray-600  gap-4">
                <div className="w-12 h-12 bg-[#26C5F3] bg-opacity-20 text-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#26C5F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-base">Certified Professionals</p>
                  <p className="text-gray-500 text-sm">With 15+ Years Experience</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-[#26C5F3]">50+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}