import { useState } from "react";
import { Link } from "react-router-dom";

export default function ClinicianRegistrationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    // Section 1: Meta
    applicantName: "",
    dateSubmitted: "",
    recruiter: "",
    
    // Section 2A: Personal Info
    fullName: "",
    preferredName: "",
    email: "",
    phone: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    
    // Section 2B: Professional Info
    profession: "",
    specialty: "",
    yearsExperience: "",
    currentEmployer: "",
    usWorkAuth: "",
    
    // Section 3A: Licenses
    licenseNumber: "",
    statesLicensed: "",
    certifications: "",
    highestDegree: "",
    resume: null as File | null,
    
    // Section 3B: Preferences
    employmentType: [] as string[],
    preferredShift: "",
    preferredLocations: "",
    desiredRate: "",
    travelInterest: "",
    
    // Section 4: Experience & References
    departmentsWorked: "",
    ehrSystems: "",
    languages: "",
    professionalReferences: "",
    
    // Section 5: Authorization
    signature: "",
    authDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const current = new Set(prev.employmentType);
      if (checked) current.add(value);
      else current.delete(value);
      return { ...prev, employmentType: Array.from(current) };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'resume') {
        if (value instanceof File) {
          data.append('resume', value);
        }
      } else if (key === 'employmentType') {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, (value ?? "") as string);
      }
    });

    try {
      const response = await fetch("https://n8n.argylemedicalstaffing.com/webhook/argyle-clinician-registration", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Webhook not found. Please ensure n8n HTTP Method is POST and 'Listen for test event' is clicked.");
        }
        throw new Error(`Server returned status ${response.status}`);
      }
      setStatus('success');
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus('error');
      setErrorMessage(error.message === "Failed to fetch" 
        ? "Network error (Failed to fetch). Ensure n8n is active." 
        : error.message || "An unknown error occurred.");
    }
  };

  const inputClass = "w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-sans text-sm text-[#0B2038] outline-none transition-all focus:ring-2 focus:ring-[#008080] focus:border-transparent placeholder-slate-400";
  const labelClass = "mb-1.5 block font-sans text-sm font-semibold text-[#0B2038]";
  const radioClass = "h-4 w-4 text-[#008080] focus:ring-[#008080] border-slate-300 cursor-pointer";
  const checkboxClass = "h-4 w-4 rounded border-slate-300 text-[#008080] focus:ring-[#008080] cursor-pointer";

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
          Thank you for registering with Argyle Medical Staffing. Our recruiting team has received your registration packet and will contact you within 24 hours to match you with rewarding opportunities.
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
          <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-[#008080]">Healthcare Professional Registration Packet</p>
          <h2 className="font-display text-2xl font-bold text-[#0B2038] sm:text-3xl md:text-4xl">Your Next Opportunity Starts Here</h2>
        </div>
        
        <p className="font-sans text-slate-600 leading-relaxed mb-4">
          Welcome to Argyle Medical Staffing. Complete this registration packet so our recruiters can match you with healthcare opportunities that fit your skills, experience, and career goals.
        </p>
        <p className="font-sans text-slate-600 leading-relaxed mb-8">
          Thank you for trusting Argyle Medical Staffing with your career. We partner with hospitals, clinics, long-term care facilities, and healthcare organizations to connect exceptional clinicians with rewarding opportunities.
        </p>
        
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-display text-lg font-bold text-[#0B2038] mb-3">What You Can Expect</h3>
          <ul className="list-inside list-disc space-y-2 font-sans text-sm text-slate-600">
            <li>Dedicated recruiter</li>
            <li>Personalized job matching</li>
            <li>Competitive pay opportunities</li>
            <li>Flexible scheduling</li>
            <li>Credentialing assistance</li>
            <li>Ongoing career support</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* SECTION 1: Applicant Information (Meta tracking) */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="mb-4 font-display text-lg font-bold text-[#0B2038]">Applicant Information</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Applicant Name</label>
              <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} className={inputClass} placeholder="Full Name" />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Date</label>
              <input type="date" name="dateSubmitted" value={formData.dateSubmitted} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Recruiter</label>
              <input type="text" name="recruiter" value={formData.recruiter} onChange={handleChange} className={inputClass} placeholder="Assigned Recruiter (if known)" />
            </div>
          </div>
        </div>

        {/* SECTION 2: Professional Profile */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Professional Profile</h3>
          
          {/* Sub-section A: Personal Information */}
          <h4 className="mb-4 font-sans text-[15px] font-bold text-slate-500 uppercase tracking-wide">Personal Information</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Preferred Name</label>
              <input type="text" name="preferredName" value={formData.preferredName} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Emergency Contact</label>
              <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Emergency Phone</label>
              <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} className={inputClass} required />
            </div>
          </div>

          {/* Sub-section B: Professional Information */}
          <h4 className="mb-4 font-sans text-[15px] font-bold text-slate-500 uppercase tracking-wide">Professional Information</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Profession (e.g. RN, MD, allied)</label>
              <input type="text" name="profession" value={formData.profession} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Specialty</label>
              <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Years of Experience</label>
              <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} className={inputClass} min="0" required />
            </div>
            <div>
              <label className={labelClass}>Current Employer</label>
              <input type="text" name="currentEmployer" value={formData.currentEmployer} onChange={handleChange} className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Authorized to Work in U.S.?</label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                  <input type="radio" name="usWorkAuth" value="Yes" onChange={handleChange} className={radioClass} required /> Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                  <input type="radio" name="usWorkAuth" value="No" onChange={handleChange} className={radioClass} required /> No
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Licenses & Employment Preferences */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Licenses & Employment Preferences</h3>
          
          {/* Sub-section A: Licenses & Certifications */}
          <h4 className="mb-4 font-sans text-[15px] font-bold text-slate-500 uppercase tracking-wide">Licenses & Certifications</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
            <div>
              <label className={labelClass}>License Number(s)</label>
              <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>State(s) Licensed</label>
              <input type="text" name="statesLicensed" value={formData.statesLicensed} onChange={handleChange} className={inputClass} required />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Certifications (e.g. BLS, ACLS, PALS)</label>
              <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Highest Degree</label>
              <input type="text" name="highestDegree" value={formData.highestDegree} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Resume Attached?</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="block w-full font-sans text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-[#008080]/10 file:px-4 file:py-2.5 file:font-sans file:text-sm file:font-semibold file:text-[#008080] hover:file:bg-[#008080]/20 cursor-pointer" />
            </div>
          </div>

          {/* Sub-section B: Employment Preferences */}
          <h4 className="mb-4 font-sans text-[15px] font-bold text-slate-500 uppercase tracking-wide">Employment Preferences</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass}>Employment Type</label>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Direct Hire", "Contract", "Travel", "Per Diem", "PRN"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                    <input type="checkbox" name="employmentType" value={type} checked={formData.employmentType.includes(type)} onChange={handleCheckbox} className={checkboxClass} /> {type}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Preferred Shift</label>
              <select name="preferredShift" value={formData.preferredShift} onChange={handleChange} className={inputClass} required>
                <option value="">Select Shift</option>
                <option value="Days">Days</option>
                <option value="Evenings">Evenings</option>
                <option value="Nights">Nights</option>
                <option value="Rotating">Rotating</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Preferred Locations</label>
              <input type="text" name="preferredLocations" value={formData.preferredLocations} onChange={handleChange} className={inputClass} placeholder="Cities, States, or regions" />
            </div>
            <div>
              <label className={labelClass}>Desired Hourly Rate</label>
              <input type="text" name="desiredRate" value={formData.desiredRate} onChange={handleChange} className={inputClass} placeholder="e.g. $80/hr" />
            </div>
            <div>
              <label className={labelClass}>Interested in Travel Assignments?</label>
              <div className="flex gap-6 mt-3">
                <label className="flex items-center gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                  <input type="radio" name="travelInterest" value="Yes" onChange={handleChange} className={radioClass} required /> Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-sans text-sm text-[#0B2038]">
                  <input type="radio" name="travelInterest" value="No" onChange={handleChange} className={radioClass} required /> No
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Experience & References */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Experience & References</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass}>Departments Worked</label>
              <input type="text" name="departmentsWorked" value={formData.departmentsWorked} onChange={handleChange} className={inputClass} placeholder="e.g. ICU, ER, OR" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>EHR Systems</label>
              <input type="text" name="ehrSystems" value={formData.ehrSystems} onChange={handleChange} className={inputClass} placeholder="e.g. Epic, Cerner, Meditech" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Languages</label>
              <input type="text" name="languages" value={formData.languages} onChange={handleChange} className={inputClass} placeholder="e.g. English, Spanish" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Professional References</label>
              <textarea name="professionalReferences" value={formData.professionalReferences} onChange={handleChange} rows={3} className={inputClass} placeholder="Please provide Name, Title, Phone, and Email for 2-3 references" />
            </div>
          </div>
        </section>

        {/* SECTION 5: Authorization & Next Steps */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="mb-4 font-display text-xl font-bold text-[#0B2038]">Authorization & Next Steps</h3>
          <p className="mb-8 font-sans text-sm leading-relaxed text-[#0B2038]/80 italic">
            "I certify that the information provided is accurate and authorize Argyle Medical Staffing to verify my credentials, licenses, employment history, and references."
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Applicant Signature (Typed Name)</label>
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

        {/* Next Steps List */}
        <div className="mt-12 border-t border-slate-200 pt-10">
          <h4 className="mb-6 text-center font-display text-lg font-bold text-[#0B2038]">Next Steps</h4>
          <ol className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row sm:gap-6 font-sans text-sm font-semibold text-slate-600">
            <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">1</span> Recruiter Review</li>
            <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">2</span> Credential Verification</li>
            <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">3</span> Job Matching</li>
            <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">4</span> Interview Coordination</li>
            <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">5</span> Offer & Onboarding</li>
            <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008080]/10 text-xs text-[#008080]">6</span> Start Your Assignment</li>
          </ol>
        </div>

      </form>
    </div>
  );
}
