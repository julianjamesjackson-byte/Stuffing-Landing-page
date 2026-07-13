import Navbar from '../Navbar';
import FacilityIntakeForm from '../forms/FacilityIntakeForm';

export default function FacilityIntakePage() {
  return (
    <div className="flex h-screen w-full flex-col bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <Navbar />
      
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Left Column (Scrollable Form) */}
        <div className="w-full md:w-[65%] h-full overflow-y-auto p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center bg-gradient-to-br from-slate-50 to-[#E8F2F2] dark:from-slate-900 dark:to-slate-950">
          <div className="w-full max-w-4xl">
            <FacilityIntakeForm />
          </div>
        </div>

        {/* Right Column (Fixed Trust Sidebar) */}
        <div className="hidden md:flex md:w-[35%] h-full bg-[#0B2038] dark:bg-slate-950 flex-col justify-center px-10 lg:px-16 text-white border-l border-slate-200 dark:border-slate-800 transition-colors duration-300">
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
    </div>
  );
}
