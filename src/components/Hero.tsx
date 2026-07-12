import { Link } from 'react-router-dom';
import argyleLogo from '../assets/argyle-logo.jpeg';
import hospitalBg from '../assets/hospital-bg.png';

export default function Hero() {
  return (
    <>
      {/* ── Navigation (Exact Clone) ─────────────────────────────────── */}
      <nav className="relative z-20 flex w-full items-center justify-between bg-white px-8 py-5 shadow-sm lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={argyleLogo} alt="Argyle Medical Staffing Logo" className="h-24 w-24 rounded-full object-contain shadow-sm" />
          <span className="font-display text-2xl font-bold text-slate-900">
            Argyle
            <span className="block text-[10px] font-normal uppercase tracking-widest text-slate-500">Medical Staffing</span>
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#specialties" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            Specialties
          </a>
          <a href="#facilities" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            For Facilities
          </a>
          <a href="#clinicians" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            For Clinicians
          </a>
          <a href="#about" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            About
          </a>
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/request-talent"
            className="rounded bg-brand-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Request Talent
          </Link>
          <Link
            to="/explore-careers"
            className="rounded border border-brand-primary bg-white px-6 py-2.5 text-sm font-bold text-brand-primary transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Explore Careers
          </Link>
        </div>
      </nav>

      {/* ── Hero Section (Full Background) ───────────────────────────── */}
      <main
        className="relative flex min-h-[75vh] w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hospitalBg})` }}
      >
        {/* Solid white fade at the bottom */}
        <div className="absolute inset-0 bg-white/30"></div>
        
        {/* Solid white overlay on the left to make text readable */}
        <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-white/75"></div>

        {/* ── Hero Content ── */}
        <div className="relative z-10 w-full px-8 pb-20 pt-16 lg:px-24">
          <div className="max-w-[640px]">
            
            {/* Eyebrow Pill */}
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-ink/15 bg-white/95 py-2.5 pl-3 pr-6 text-sm font-medium text-brand-ink shadow-sm">
              <div className="mr-3.5 flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=33" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/100?img=47" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              </div>
              Trusted by 2,400+ healthcare professionals
            </div>

            <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-brand-ink md:text-[2.75rem]">
              Connecting Exceptional Healthcare Talent with Organizations That Care
            </h1>

            <p className="mb-8 max-w-[500px] font-sans text-sm font-medium leading-[1.6] text-brand-ink/80 md:text-[15px]">
              Hiring the right healthcare professionals shouldn't slow down patient care. We help hospitals, clinics, and healthcare facilities quickly connect with qualified medical talent while helping clinicians find rewarding opportunities with leading employers. Whether you need permanent hires or flexible staffing, we're here to deliver the right fit—every time.
            </p>

            {/* CTAs - The Tri-Funnel */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/request-talent"
                className="inline-flex items-center justify-center rounded bg-brand-primary px-8 py-3 text-base font-bold text-white transition-colors hover:bg-brand-primary-dk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Request Talent
              </Link>
              <Link
                to="/explore-careers"
                className="inline-flex items-center justify-center rounded border border-brand-primary bg-white px-8 py-3 text-base font-bold text-brand-primary transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Explore Careers
              </Link>
            </div>
            
            <div className="mt-5">
              <Link to="/partner-with-us" className="inline-flex items-center text-sm font-bold text-brand-ink/70 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                Partner With Us &rarr;
              </Link>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}
