import { Link } from 'react-router-dom';
import argyleLogo from '../../assets/argyle-logo.jpeg';
import FacilityIntakeForm from '../forms/FacilityIntakeForm';

export default function FacilityIntakePage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-gradient-to-br from-slate-50 to-[#E8F2F2]">
      {/* Left Column (Form) */}
      <div className="w-full md:w-[65%] p-3 sm:p-6 md:p-12 lg:p-16 flex flex-col items-center">
        <div className="w-full max-w-4xl mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={argyleLogo} alt="Argyle Medical Staffing" className="h-20 w-20 rounded-full object-contain shadow-sm" />
            <span className="font-display text-xl font-bold text-slate-900">
              Argyle
              <span className="block text-[10px] font-normal uppercase tracking-widest text-slate-500">Medical Staffing</span>
            </span>
          </div>
          <Link to="/" className="inline-flex items-center text-sm font-bold text-[#008080] transition-colors hover:text-[#006666]">
            &larr; Back to Home
          </Link>
        </div>
        <div className="w-full max-w-4xl">
          <FacilityIntakeForm />
        </div>
      </div>

      {/* Right Column (Trust Sidebar) */}
      <div className="hidden md:flex md:w-[35%] sticky top-0 h-screen bg-[#0B2038] flex-col justify-center px-10 lg:px-16 text-white">
        <div className="mb-12">
          {/* Logo Placeholder / Brand */}
          <div className="flex items-center gap-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xl font-bold text-white">
               A
             </div>
             <span className="font-display text-xl font-bold tracking-tight text-white">
               Argyle Medical Staffing
             </span>
          </div>
        </div>
        <div className="mb-6">
          {/* Shield Icon */}
          <svg className="h-12 w-12 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold mb-4 text-white">Secure & Confidential</h3>
        <p className="font-sans text-white/80 leading-relaxed text-lg">
          Your information is secure. Our team reviews all facility staffing requests within 24 hours to ensure the fastest possible coverage match.
        </p>
      </div>
    </div>
  );
}
