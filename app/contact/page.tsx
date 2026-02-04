"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" 
import Footer from "@/components/Footer"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: "",
    type: "success"
  })

  const services = [
    "Accounting Services",
    "Tax Preparation",
    "Bookkeeping",
    "Financial Consulting",
    "Business Advisory",
    "Payroll Services",
    "Other"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" })
    }, 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        showToast("Message sent successfully! We'll get back to you soon.", "success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        showToast(data.message || "Failed to send message. Please try again.", "error")
      }
    } catch (error) {
      showToast("An error occurred. Please try again later.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return ( 
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Sophisticated background pattern */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }}></div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-4 sm:left-8 z-40"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 sm:px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-slate-200/50 transition-all duration-300"
          >
            <svg 
              className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              Back to Home
            </span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-6 right-4 sm:right-8 z-50 max-w-sm w-full mx-4 sm:mx-0"
          >
            <div className={`px-4 sm:px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md ${
              toast.type === 'success' 
                ? 'bg-emerald-50/95 border-emerald-200 text-emerald-900' 
                : 'bg-red-50/95 border-red-200 text-red-900'
            }`}>
              <div className="flex items-center gap-3">
                {toast.type === 'success' ? (
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
                <p className="font-medium text-sm">{toast.message}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 mt-12 sm:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/5 text-slate-700 text-xs sm:text-sm font-bold tracking-wider border border-slate-200/50">
              GET IN TOUCH
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's Start a Conversation
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            Our team of financial experts is ready to help your business reach its full potential
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-6 lg:space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {/* Phone */}
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <div className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-xl shadow-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Phone
                    </p>
                    <a 
                      href="tel:972-744-9881" 
                      className="text-xl sm:text-2xl font-semibold text-slate-900 hover:text-slate-700 transition-colors block"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      972-744-9881
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <div className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-xl shadow-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Email
                    </p>
                    <a 
                      href="mailto:Info@nexusacct.com" 
                      className="text-xl sm:text-2xl font-semibold text-slate-900 hover:text-slate-700 transition-colors block break-all"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Info@nexusacct.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <div className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-xl shadow-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Office Location
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      555 Republic Drive<br />
                      Suite 214<br />
                      Plano, TX 75074
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Business Hours */}
            

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/80"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15+</div>
                  <div className="text-xs sm:text-sm text-slate-600" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Years Experience</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>500+</div>
                  <div className="text-xs sm:text-sm text-slate-600" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>24h</div>
                  <div className="text-xs sm:text-sm text-slate-600" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Response Time</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-slate-200/80">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-sm sm:text-base" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition-all outline-none text-slate-900 bg-white text-sm sm:text-base"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition-all outline-none text-slate-900 bg-white text-sm sm:text-base"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition-all outline-none text-slate-900 bg-white text-sm sm:text-base"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition-all outline-none text-slate-900 bg-white text-sm sm:text-base"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition-all outline-none text-slate-900 resize-none bg-white text-sm sm:text-base"
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white font-bold py-4 sm:py-5 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:from-slate-800 hover:to-slate-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-wider text-xs sm:text-sm"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-slate-500 text-center mt-4" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
    </div>  
    <Footer/>
    </> 
  )
}