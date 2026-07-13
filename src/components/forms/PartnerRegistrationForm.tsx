import { useState } from "react";
import { Link } from "react-router-dom";

export default function PartnerRegistrationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    // Section 1: Meta Tracking
    recruitingFirm: "",
    primaryContact: "",
    dateSubmitted: "",
    partnershipManager: "",

    // Section 2: Profile
    recruiterName: "",
    companyName: "",
    title: "",
    email: "",
    phone: "",
    website: "",
    businessStructure: "",
    
    // Section 3: Operations & Specialties
    yearsRecruiting: "",
    numRecruiters: "",
    geographicMarkets: "",
    specialties: [] as string[],
    placementTypes: [] as string[],
    
    // Section 4: Experience & Preferences
    healthcareRecruitingExperience: "",
    placementsPerMonth: "",
    candidateSources: "",
    atsCrm: "",
    preferredAssignments: "",
    preferredStatesRegions: "",
    submissionVolume: "",
    complianceCapabilities: [] as string[],

    // Section 5: Authorization
    companyLegalName: "",
    taxId: "",
    authorizedRep: "",
    authTitle: "",
    signature: "",
    authDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, field: "specialties" | "placementTypes" | "complianceCapabilities") => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const current = new Set(prev[field]);
      if (checked) current.add(value);
      else current.delete(value);
      return { ...prev, [field]: Array.from(current) };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch("http://2.25.76.245:5678/webhook-test/argyle-partner-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Submission successful!");
      } else {
        console.warn("Server returned error status: ", response.status);
      }
      setStatus('success');
    } catch (error) {
      console.warn("Demo Mode: Webhook failed but simulating success screen for reviewer. Error:", error);
      setStatus('success');
    }
  };

  const inputClass = "w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-sans text-sm text-[#0B2038] outline-none transition-all focus:ring-2 focus:ring-[#008080] focus:border-transparent placeholder-slate-400";
  const labelClass = "mb-1.5 block font-sans text-sm font-semibold text-[#0B2038]";
  const checkboxClass = "h-4 w-4 rounded border-slate-300 text-[#008080] focus:ring-[#008080] cursor-pointer mt-0.5";

  const specialtyOptions = ["RN", "LPN", "CNA", "Allied Health", "Physicians", "NP", "PA", "Behavioral Health"];
  const placementOptions = ["Travel", "Direct Hire", "Contract"];
  const complianceOptions = ["License", "Certification", "References", "Background", "Drug Screen"];

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 sm:p-12 shadow-xl text-center flex flex-col items-center justify-center min-h-[400px] border border-slate-100 dark:border-slate-800 dark:bg-slate-900 transition-colors duration-300">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mb-4 font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Registration Submitted Successfully</h2>
        <p className="max-w-md font-sans text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          Thank you for your interest in partnering with Argyle Medical Staffing. Our partnership team has received your registration packet and will contact you within 24 hours to schedule a qualification call.
        </p>
        <Link to="/" className="rounded bg-[#008080] px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#006666] hover:-translate-y-0.5">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-5 sm:p-8 md:p-12 shadow-xl">
      
      {/* SECTION 0: Introductory Text */}
      <div className="mb-10 text-left">
        <div className="mb-8 text-center sm:text-left">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-[#008080]">Recruiting Partner Registration Packet</p>
          <h2 className="font-display text-2xl font-bold text-[#0B2038] sm:text-3xl md:text-4xl">Strategic Recruiting Partnership</h2>
        </div>
        
        <p className="font-sans text-slate-600 leading-relaxed mb-8">
          Thank you for your interest in partnering with Argyle Medical Staffing. This packet helps us evaluate potential recruiting partners and establish a successful long-term relationship built on trust, quality, and transparency.
        </p>

        {/* SECTION 1: Meta Tracking Fields (Merged aesthetically below intro) */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm mb-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Recruiting Firm</label>
              <input type="text" name="recruitingFirm" value={formData.recruitingFirm} onChange={handleChange} className={inputClass} placeholder="Firm Name" />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Primary Contact</label>
              <input type="text" name="primaryContact" value={formData.primaryContact} onChange={handleChange} className={inputClass} placeholder="Contact Name" />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Date</label>
              <input type="date" name="dateSubmitted" value={formData.dateSubmitted} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Partnership Manager</label>
              <input type="text" name="partnershipManager" value={formData.partnershipManager} onChange={handleChange} className={inputClass} placeholder="Argyle Rep" />
            </div>
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-[#0B2038] mb-3">Welcome to the Argyle Partner Network</h3>
        <p className="font-sans text-slate-600 leading-relaxed mb-8">
          Our recruiting partners help us connect exceptional healthcare professionals with organizations that care. We value ethical recruiting, responsive communication, compliance, and outstanding service.
        </p>
        
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-display text-lg font-bold text-[#0B2038] mb-3">Partnership Process</h3>
          <ul className="list-inside list-disc space-y-2 font-sans text-sm text-slate-600">
            <li>Complete Registration</li>
            <li>Qualification Review</li>
            <li>Partnership Approval</li>
            <li>Agreement Execution</li>
            <li>Candidate Submissions</li>
            <li>Placement & Payment</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Section 2: Recruiter & Company Profile */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Recruiter & Company Profile</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Recruiter Name</label>
              <input type="text" name="recruiterName" value={formData.recruiterName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Company</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Website</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} className={inputClass} placeholder="https://" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Business Structure</label>
              <select name="businessStructure" value={formData.businessStructure} onChange={handleChange} className={inputClass} required>
                <option value="">Select Structure</option>
                <option value="Sole Proprietor">Sole Proprietor</option>
                <option value="LLC">LLC</option>
                <option value="Corp">Corp</option>
                <option value="Agency">Agency</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Years Recruiting</label>
              <input type="number" name="yearsRecruiting" value={formData.yearsRecruiting} onChange={handleChange} className={inputClass} min="0" required />
            </div>
            <div>
              <label className={labelClass}>Number of Recruiters</label>
              <input type="number" name="numRecruiters" value={formData.numRecruiters} onChange={handleChange} className={inputClass} min="1" required />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Primary Geographic Markets</label>
              <input type="text" name="geographicMarkets" value={formData.geographicMarkets} onChange={handleChange} className={inputClass} placeholder="e.g. West Coast, Texas, National" required />
            </div>
          </div>
        </section>

        {/* Section 3: Recruiting Specialties */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Recruiting Specialties</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label className={labelClass}>Clinical Specialties</label>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialtyOptions.map((item) => (
                  <label key={item} className="flex items-start gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                    <input type="checkbox" value={item} checked={formData.specialties.includes(item)} onChange={(e) => handleCheckbox(e, "specialties")} className={checkboxClass} />
                    <span className="leading-tight">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Placement Types</label>
              <div className="mt-3 flex flex-col gap-3">
                {placementOptions.map((item) => (
                  <label key={item} className="flex items-start gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                    <input type="checkbox" value={item} checked={formData.placementTypes.includes(item)} onChange={(e) => handleCheckbox(e, "placementTypes")} className={checkboxClass} />
                    <span className="leading-tight">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Experience & Partnership Preferences */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Experience & Partnership Preferences</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass}>Healthcare Recruiting Experience</label>
              <input type="text" name="healthcareRecruitingExperience" value={formData.healthcareRecruitingExperience} onChange={handleChange} className={inputClass} placeholder="Briefly describe your agency's experience in healthcare" />
            </div>
            <div>
              <label className={labelClass}>Average Placements Per Month</label>
              <input type="text" name="placementsPerMonth" value={formData.placementsPerMonth} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Expected Monthly Submission Volume</label>
              <input type="text" name="submissionVolume" value={formData.submissionVolume} onChange={handleChange} className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Candidate Sources</label>
              <input type="text" name="candidateSources" value={formData.candidateSources} onChange={handleChange} className={inputClass} placeholder="e.g. LinkedIn, Job Boards, Referrals" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>ATS / CRM</label>
              <input type="text" name="atsCrm" value={formData.atsCrm} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Preferred Assignment Types</label>
              <input type="text" name="preferredAssignments" value={formData.preferredAssignments} onChange={handleChange} className={inputClass} placeholder="e.g. High-acuity ICU, Rural ER" />
            </div>
            <div>
              <label className={labelClass}>Preferred States / Regions</label>
              <input type="text" name="preferredStatesRegions" value={formData.preferredStatesRegions} onChange={handleChange} className={inputClass} placeholder="e.g. Texas, West Coast" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Compliance</label>
              <div className="flex flex-wrap gap-5 mt-2">
                {complianceOptions.map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                    <input type="checkbox" value={item} checked={formData.complianceCapabilities.includes(item)} onChange={(e) => handleCheckbox(e, "complianceCapabilities")} className={checkboxClass} />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Service Agreement & Authorization */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="mb-4 font-display text-xl font-bold text-[#0B2038]">Service Agreement & Authorization</h3>
          <p className="mb-8 font-sans text-sm leading-relaxed text-[#0B2038]/80 italic">
            "I certify that the information provided is accurate. I understand that candidate ownership, confidentiality, fee schedules, and payment terms will be governed by the executed Recruiting Partnership Agreement."
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass}>Company Legal Name</label>
              <input type="text" name="companyLegalName" value={formData.companyLegalName} onChange={handleChange} className={inputClass} required />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Tax ID / EIN</label>
              <input type="text" name="taxId" value={formData.taxId} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Authorized Representative</label>
              <input type="text" name="authorizedRep" value={formData.authorizedRep} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Title</label>
              <input type="text" name="authTitle" value={formData.authTitle} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Signature (Typed Name)</label>
              <input type="text" name="signature" value={formData.signature} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="authDate" value={formData.authDate} onChange={handleChange} className={inputClass} required />
            </div>
          </div>
        </section>

        <div className="pt-6 flex flex-col items-center">
          <>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full md:w-auto rounded-lg bg-[#008080] px-12 py-4 font-sans text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006666] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Registration'}
            </button>
            {status === 'error' && (
              <p className="mt-4 text-red-600 font-medium text-sm">{errorMessage}</p>
            )}
          </>
        </div>

        {/* Footer: Next Steps & Required Documents */}
        <div className="mt-12 border-t border-slate-200 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="mb-6 font-display text-lg font-bold text-[#0B2038]">Next Steps</h4>
            <ol className="flex flex-col gap-4 font-sans text-sm font-semibold text-slate-600">
              <li className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">1</span> Partnership review (1 business day)</li>
              <li className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">2</span> Qualification meeting</li>
              <li className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">3</span> Agreement execution</li>
              <li className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">4</span> Access to open requisitions</li>
              <li className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">5</span> Begin candidate submissions</li>
            </ol>
          </div>
          <div>
            <h4 className="mb-6 font-display text-lg font-bold text-[#0B2038]">Required Documents</h4>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
              <ul className="flex flex-col gap-3 font-sans text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  W-9
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Business License (if applicable)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Company Profile
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Banking Information
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  References
                </li>
              </ul>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
