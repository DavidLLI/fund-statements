import React, { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import {
  DocumentCheckIcon,
  InboxArrowDownIcon,
  DocumentDuplicateIcon,
  Squares2X2Icon,
  ClockIcon,
  TableCellsIcon,
  DocumentMagnifyingGlassIcon,
  ArrowsRightLeftIcon,
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

function App() {
  const [formStatus, setFormStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xovgklpe', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="AltOpsLab" 
                className="h-8 w-auto"
              />
              <span className="font-semibold text-lg text-slate-900 tracking-tight">AltOpsLab</span>
            </div>
            <button 
              onClick={scrollToForm}
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Call
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200 mb-8">
              <DocumentCheckIcon className="w-4 h-4 text-slate-600" strokeWidth={2} />
              <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Operations Service</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 leading-[1.05] tracking-tight">
            Clean, Consolidated Alternative Investment Reporting — Done for You
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl leading-relaxed font-light">
            We help outsourced CFOs, CPA private client teams, and boutique wealth operations providers turn messy PE/VC/RE/HF statements into clean, structured reporting — without hiring extra staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              Request Free Sample Cleanup
            </button>
            <a href="/Consolidated_Fund_Tracking_Template.xlsx" download="Consolidated_Fund_Tracking_Template.xlsx" className="text-slate-600 hover:text-slate-900 font-medium py-4 px-2 transition-colors border-b border-slate-300 hover:border-slate-900">
              Download Excel Template
            </a>
          </div>
        </div>
      </section>

      {/* Trust Note */}
      <section className="py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-slate-400 uppercase tracking-wider">
            No investment advice. No portfolio management. Pure operations and data consolidation.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
            The Hidden Work in Alternative Investments
          </h2>
          <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto font-light">
            Operations teams spend countless hours on tasks that could be automated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="group">
              <div className="mb-6">
                <DocumentDuplicateIcon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Too Many PDFs</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Capital calls, distributions, NAVs, and quarterly reports scattered across inboxes.
              </p>
            </div>
            <div className="group">
              <div className="mb-6">
                <Squares2X2Icon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Inconsistent Formats</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Every manager reports differently — nothing lines up.
              </p>
            </div>
            <div className="group">
              <div className="mb-6">
                <ClockIcon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Slow, Manual Consolidation</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Hours lost copying data into Excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
            What You Get
          </h2>
          <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto font-light">
            Professional data consolidation tailored to your operations workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="group">
              <div className="mb-6">
                <TableCellsIcon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Clean Monthly Excel</h3>
              <ul className="text-slate-500 space-y-3 leading-relaxed font-light">
                <li>Standardized data across all investments</li>
                <li>Automated summaries</li>
                <li>Ready for reporting</li>
              </ul>
            </div>
            <div className="group">
              <div className="mb-6">
                <DocumentMagnifyingGlassIcon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Full Statement Processing</h3>
              <ul className="text-slate-500 space-y-3 leading-relaxed font-light">
                <li>We gather, categorize, parse, and extract</li>
                <li>You receive structured outputs</li>
              </ul>
            </div>
            <div className="group">
              <div className="mb-6">
                <ArrowsRightLeftIcon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Fits Your Workflow</h3>
              <ul className="text-slate-500 space-y-3 leading-relaxed font-light">
                <li>Works with Excel, Google Sheets, or your reporting tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg p-12 md:p-16">
            <div className="flex justify-center mb-8">
              <ArrowDownTrayIcon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
              Free Excel Template for Alternative Investments
            </h2>
            <p className="text-lg text-slate-500 mb-12 text-center max-w-2xl mx-auto leading-relaxed font-light">
              Download a professional prebuilt Excel template that consolidates capital calls, NAVs, and distributions into one dashboard. Use it internally or as a preview of our workflow.
            </p>
            <div className="text-center">
              <a href="/Consolidated_Fund_Tracking_Template.xlsx" download="Consolidated_Fund_Tracking_Template.xlsx" className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2">
                <ArrowDownTrayIcon className="w-5 h-5" strokeWidth={2} />
                Download Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto font-light">
            Get started in minutes, see results within 24 hours.
          </p>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-base">
                  1
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-3">
                  <PaperAirplaneIcon className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-slate-900">Send Sample PDFs</h3>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">Provide 2–3 statements from any investment.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-base">
                  2
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-3">
                  <SparklesIcon className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-slate-900">We Clean & Standardize</h3>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">Receive a clean Excel file within 24 hours.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-base">
                  3
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-3">
                  <CalendarDaysIcon className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-slate-900">Monthly Processing</h3>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">Choose one-time cleanup or ongoing monthly service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <CurrencyDollarIcon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto font-light">
            Simple, straightforward pricing with no hidden fees.
          </p>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border border-slate-200 rounded-lg p-10 text-center hover:border-slate-300 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">One-time Cleanup: $500–$1,500</h3>
              <p className="text-slate-500 font-light">Perfect for one-off projects</p>
            </div>
            <div className="border-2 border-slate-900 rounded-lg p-10 text-center hover:bg-slate-50 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Monthly Processing: Starting at $1,500/mo</h3>
              <p className="text-slate-500 font-light">Ongoing monthly service</p>
            </div>
            <p className="text-sm text-slate-400 mt-10 text-center uppercase tracking-wider">
              Pricing varies by complexity and number of investments.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8 mb-12">
            <BriefcaseIcon className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
            <ShieldCheckIcon className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 text-center tracking-tight">
            Built for Alternative Investment Professionals
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto text-center leading-relaxed font-light">
            AltOpsLab is a boutique operations service dedicated to consolidating alternative investment statements for firms who serve HNW clients. We remove manual work, reduce errors, and help operations teams scale without adding headcount.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <EnvelopeIcon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
            Book a Call or Request Free Sample Cleanup
          </h2>
          <p className="text-lg text-slate-500 text-center mb-12 max-w-xl mx-auto font-light">
            Fill out the form below to schedule a call or request a free sample cleanup. We'll get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Name <span className="text-slate-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 text-slate-900 bg-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Email <span className="text-slate-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 text-slate-900 bg-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Request Details <span className="text-slate-400 text-xs font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 text-slate-900 bg-white resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>
            
            {formStatus === 'success' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                <p className="text-sm text-slate-900 text-center">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-900 text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white rounded-md px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.01] inline-flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" strokeWidth={2} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 md:py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-medium text-base mb-4 tracking-tight text-slate-300">AltOpsLab</p>
          <p className="text-xs text-slate-500 mb-6 uppercase tracking-wider">Alternative Investment Operations Services</p>
          <p className="text-xs text-slate-500 mb-8 uppercase tracking-wider">No investment advice.</p>
          <p className="text-sm text-slate-400 mb-8">
            <a href="mailto:david.li@altopslab.com" className="hover:text-white transition-colors border-b border-slate-600 hover:border-slate-400">david.li@altopslab.com</a>
          </p>
          <p className="text-xs text-slate-500">© 2025 AltOpsLab</p>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App

