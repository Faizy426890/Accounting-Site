"use client";

import { useEffect, useRef } from "react";

const expertise = [
  { icon: "🏢", num: "01", title: "Business Advisory", text: "Guiding entrepreneurs and established businesses through strategic decisions — from entity formation and structuring to growth planning and operational efficiency." },
  { icon: "📊", num: "02", title: "Tax Strategy", text: "Developing comprehensive tax plans that minimize liabilities while maintaining full compliance. Expertise spanning personal, corporate, and cross-border taxation." },
  { icon: "⚖️", num: "03", title: "Regulatory Compliance", text: "Navigating the ever-shifting regulatory landscape, ensuring businesses remain compliant while operating with confidence and clarity." },
  { icon: "🚀", num: "04", title: "Startup Consulting", text: "Working closely with founders in the early stages — structuring cap tables, advising on funding rounds, and building financial infrastructure for sustainable growth." },
  { icon: "📋", num: "05", title: "Financial Planning", text: "Crafting long-term financial roadmaps aligned with personal and professional goals — covering budgeting, forecasting, and wealth management strategies." },
  { icon: "🤝", num: "06", title: "Corporate Governance", text: "Establishing robust governance frameworks that promote accountability, transparency, and ethical practices across organizations of all sizes." },
];

const values = [
  { num: "01", name: "Integrity", desc: "Honesty and ethics underpin every recommendation and relationship I build." },
  { num: "02", name: "Clarity", desc: "Complex ideas distilled into language everyone can confidently act on." },
  { num: "03", name: "Precision", desc: "Details matter — especially where money and law intersect." },
  { num: "04", name: "Growth", desc: "Every engagement is designed to move clients meaningfully forward." },
];

const timeline = [
  { year: "2023–Now",  role: "Principal Consultant", org: "Independent Practice",   desc: "Leading an independent advisory practice serving high-net-worth individuals, family offices, and growth-stage companies across taxation, compliance, and corporate strategy." },
  { year: "2019–2023", role: "Senior Tax Advisor",   org: "Global Advisory Firm",   desc: "Managed a portfolio of 60+ corporate clients, driving significant cumulative tax savings through restructuring and strategic planning." },
  { year: "2016–2019", role: "Business Consultant",  org: "Mid-Market Consultancy", desc: "Guided 40+ SMEs through regulatory transitions, operational restructuring, and financial planning initiatives." },
  { year: "2013–2016", role: "Junior Analyst",        org: "Boutique Tax Practice",  desc: "Built foundational expertise in compliance, filing, and tax code interpretation. Recognized for delivering insights beyond expected scope." },
];

const trustPoints = [
  { title: "Experienced Professionals", desc: "Work with a certified consultant who understands your unique business needs and delivers tailored guidance." },
  { title: "Accurate & Transparent", desc: "Every number matters. Clear communication, precise reporting, and full compliance — every step of the way." },
  { title: "Tailored Solutions", desc: "From startups to corporations, strategies adapt to fit your unique goals, structure, and growth stage." },
];

const marqueeItems = ["Tax Strategy", "Business Advisory", "Compliance", "Startup Consulting", "Financial Planning", "Corporate Governance"];

export default function AmanKhanBio() {
  const revealRefs = useRef([]);
  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.08 }
    );
    revealRefs.current.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-slate-100 text-slate-900 overflow-x-hidden font-sans">

      {/* ── Hero ── */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-16 items-center pt-16 pb-10">

        {/* Left */}
        <div>
          {/* Tag */}
          <div className="mb-7">
            <span className="font-mono text-xs tracking-widest text-cyan-600 bg-cyan-50 border border-cyan-200 border-l-4 border-l-cyan-500 px-3 py-1">
              Business · Taxes · Compliance
            </span>
          </div>

          {/* Name */}
          <h1 className="font-serif text-7xl lg:text-8xl font-thin leading-none tracking-tight text-slate-900">
            Aman<br />
            <span className="italic text-cyan-500 font-extralight">Khan</span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex items-center gap-4">
            <div className="w-9 h-0.5 bg-cyan-500" />
            <span className="text-xs tracking-widest uppercase text-slate-400 font-medium">Consultant · Advisor · Strategist</span>
          </div>

          {/* Para */}
          <p className="mt-5 text-base leading-relaxed text-slate-600 font-light max-w-md">
            A trusted professional helping businesses and individuals master the intersection of finance, taxation, and regulatory compliance. With extensive experience, Aman transforms complexity into confident, actionable strategy.
          </p>

          {/* Buttons */}
         
        </div>

        {/* Right — trust panel */}
        <div className="border border-slate-200 shadow-lg divide-y divide-slate-200 bg-slate-200 flex flex-col gap-px">
          {trustPoints.map((tp) => (
            <div key={tp.title} className="bg-white px-8 py-9 flex flex-col gap-2 hover:bg-slate-50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center mb-1 shrink-0">
                <svg className="w-4 h-4 stroke-white fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="text-base font-semibold text-slate-900">{tp.title}</div>
              <div className="text-sm leading-relaxed text-slate-500 font-light">{tp.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative z-10 border-t border-b border-slate-200 bg-white overflow-hidden py-5">
        <div className="flex gap-12 w-max" style={{ animation: "marqueeScroll 28s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 italic font-light text-slate-400 whitespace-nowrap font-serif text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
              {item}
            </span>
          ))}
        </div>
        <style>{`@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ── Expertise ── */}
      <section id="expertise" className="relative z-10 px-6 lg:px-16 py-24 bg-white border-b border-slate-200">
        <div ref={addRef}>
          <p className="font-mono text-xs tracking-widest uppercase text-cyan-500 mb-5">What I Do</p>
          <h2 className="font-serif text-5xl font-extralight leading-tight text-slate-900">
            Areas of <em className="italic text-cyan-500">Expertise</em>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 font-light max-w-xl">
            A comprehensive suite of services designed to give businesses and individuals the clarity, strategy, and protection they need to thrive.
          </p>
        </div>

        <div ref={addRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {expertise.map((e) => (
            <div key={e.title} className="bg-white px-8 py-10 hover:bg-slate-50 transition-colors group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="font-serif italic text-6xl font-thin text-cyan-500 opacity-10 group-hover:opacity-25 leading-none mb-[-1rem] transition-opacity">{e.num}</div>
              <div className="text-2xl mb-3 relative z-10">{e.icon}</div>
              <div className="font-serif text-xl font-light text-slate-900 mb-2 relative z-10">{e.title}</div>
              <div className="text-sm leading-relaxed text-slate-500 font-light relative z-10">{e.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative z-10 px-6 lg:px-16 py-24">
        <div ref={addRef}>
          <p className="font-mono text-xs tracking-widest uppercase text-cyan-500 mb-5">Core Values</p>
          <h2 className="font-serif text-5xl font-extralight leading-tight text-slate-900">
            Principles That <em className="italic text-cyan-500">Guide</em> My Work
          </h2>
        </div>

        <div ref={addRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {values.map((v) => (
            <div key={v.num} className="bg-white px-7 py-9 hover:bg-slate-50 transition-colors">
              <div className="font-mono text-xs text-cyan-500 tracking-widest mb-5">{v.num}</div>
              <div className="font-serif text-2xl font-extralight italic text-slate-900 mb-2">{v.name}</div>
              <div className="text-sm leading-relaxed text-slate-400 font-light">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote band ── */}
      <div ref={addRef} className="relative z-10 px-6 lg:px-16 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-900 overflow-hidden">
        <p className="font-serif text-3xl lg:text-4xl font-thin italic text-slate-100 leading-snug relative z-10">
          "Navigating business and tax law shouldn't feel like a burden. My mission is to give every client the{" "}
          <span className="text-cyan-400">clarity and confidence</span> to make their best financial decisions — every single time."
        </p>
        <div className="relative z-10">
          <p className="font-mono text-xs tracking-widest uppercase text-cyan-400 mb-6">— Aman Khan</p>
          <p className="text-base leading-relaxed text-slate-500 font-light mb-8">
            Ready to take control of your financial future? Let's build a strategy that works for you — not against you.
          </p>
         
        </div>
      </div>    

      {/* ── Email / Contact ── */}
      <div ref={addRef} id="contact" className="relative z-10 px-6 lg:px-16 py-20 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-cyan-500 mb-3">Get In Touch</p>
          <h2 className="font-serif text-4xl font-extralight text-slate-900">
            Ready to work <em className="italic text-cyan-500">together?</em>
          </h2>
          <a
            href="mailto:Aman@khanlegalgroup.com"
            className="mt-6 inline-flex items-center gap-3 px-8 py-3 bg-cyan-500 text-white text-xs font-semibold tracking-widest uppercase hover:bg-cyan-400 transition-colors"
          >
            <svg className="w-4 h-4 stroke-white fill-none" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            Send an Email
          </a>
        </div>
        <div className="font-mono text-base text-slate-400 tracking-wide">
          Aman@khanlegalgroup.com
        </div>
      </div>

    </div>
  );
}