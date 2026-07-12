import { useState } from "react";

export default function FacilityIntakeForm() {
  const [formData, setFormData] = useState({
    // Section 1: Meta
    preparedFor: "",
    dateSubmitted: "",
    assignedRecruiter: "",
    referenceNumber: "",
    
    // Section 2: Organization Profile
    facilityName: "",
    facilityType: "",
    address: "",
    contactName: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    billingName: "",
    billingEmail: "",
    departmentsNeedingSupport: "",
    previousAgency: "",
    ehrSystem: "",
    
    // Section 3: Staffing Request
    positionTitle: "",
    department: "",
    openings: "",
    employmentType: "",
    urgency: "",
    
    // Section 4: Logistics & Requirements
    startDate: "",
    assignmentLength: "",
    requiredLicenses: "",
    requiredCertifications: "",
    minExperience: "",
    shift: "",
    scheduleHours: "",
    compensation: "",
    interviewPreferences: "",
    onboardingRequirements: "",
    additionalNotes: "",
    
    // Section 5: Service Agreement
    authorizedRep: "",
    authTitle: "",
    authDate: "",
    digitalSignature: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Facility Intake Form Payload:", JSON.stringify(formData, null, 2));
    alert("Form submitted! Check console for payload.");
  };

  const inputClass = "w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-sans text-sm text-[#0B2038] outline-none transition-all focus:ring-2 focus:ring-[#008080] focus:border-transparent placeholder-slate-400";
  const labelClass = "mb-1.5 block font-sans text-sm font-semibold text-[#0B2038]";

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-5 sm:p-8 md:p-12 shadow-xl">
      <div className="mb-10 text-center">
        <h2 className="font-display text-2xl font-bold text-[#0B2038] sm:text-3xl md:text-4xl">Request Talent</h2>
        <p className="mt-3 font-sans text-[#0B2038]/70">Complete the official intake form below to request staffing coverage for your facility.</p>
      </div>

      <div className="mb-10 text-left">
        <p className="font-sans text-slate-600 leading-relaxed mb-8">
          Thank you for choosing Argyle Medical Staffing. We understand that every hire impacts patient care. Our mission is to connect healthcare organizations with highly qualified professionals through responsive service, rigorous credentialing, and long-term partnerships.
        </p>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-display text-lg font-bold text-[#0B2038] mb-3">What You Can Expect</h3>
          <ul className="list-inside list-disc space-y-2 font-sans text-sm text-slate-600">
            <li>Dedicated recruiter assigned to your account</li>
            <li>Candidate sourcing within 24–72 hours (role dependent)</li>
            <li>Credentialing, compliance, and reference verification</li>
            <li>Interview coordination and onboarding support</li>
            <li>Ongoing communication throughout the assignment</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Section 1: Meta & Reference Details */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="mb-4 font-display text-lg font-bold text-[#0B2038]">Internal Reference</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Prepared For</label>
              <input type="text" name="preparedFor" value={formData.preparedFor} onChange={handleChange} className={inputClass} placeholder="Client Name" />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Date Submitted</label>
              <input type="date" name="dateSubmitted" value={formData.dateSubmitted} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Assigned Recruiter</label>
              <input type="text" name="assignedRecruiter" value={formData.assignedRecruiter} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex flex-col justify-end">
              <label className={labelClass}>Reference #</label>
              <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className={inputClass} placeholder="REQ-000" />
            </div>
          </div>
        </div>

        {/* Section 2: Organization Profile */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Organization Profile</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Facility / Organization Name</label>
              <input type="text" name="facilityName" value={formData.facilityName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Facility Type</label>
              <select name="facilityType" value={formData.facilityType} onChange={handleChange} className={inputClass} required>
                <option value="">Select Type</option>
                <option value="Hospital">Hospital</option>
                <option value="Clinic">Clinic</option>
                <option value="LTC">LTC</option>
                <option value="SNF">SNF</option>
                <option value="Home Health">Home Health</option>
                <option value="Rehab">Rehab</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className={inputClass} required />
            </div>
            
            {/* Contacts */}
            <div>
              <label className={labelClass}>Primary Contact Name</label>
              <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Primary Contact Title</label>
              <input type="text" name="contactTitle" value={formData.contactTitle} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Primary Contact Email</label>
              <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Primary Contact Phone</label>
              <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Billing Contact Name</label>
              <input type="text" name="billingName" value={formData.billingName} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Billing Contact Email</label>
              <input type="email" name="billingEmail" value={formData.billingEmail} onChange={handleChange} className={inputClass} />
            </div>

            {/* Additional Org Details */}
            <div className="md:col-span-2">
              <label className={labelClass}>Departments Needing Support</label>
              <input type="text" name="departmentsNeedingSupport" value={formData.departmentsNeedingSupport} onChange={handleChange} className={inputClass} placeholder="e.g. ICU, ER, Med-Surg" />
            </div>
            <div>
              <label className={labelClass}>Previous Staffing Agency Used?</label>
              <input type="text" name="previousAgency" value={formData.previousAgency} onChange={handleChange} className={inputClass} placeholder="Yes/No or Agency Name" />
            </div>
            <div>
              <label className={labelClass}>EHR/EMR System Used</label>
              <input type="text" name="ehrSystem" value={formData.ehrSystem} onChange={handleChange} className={inputClass} placeholder="e.g. Epic, Cerner" />
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Staffing Request */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Detailed Staffing Request</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Position Title</label>
              <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Department</label>
              <input type="text" name="department" value={formData.department} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Number of Openings</label>
              <input type="number" name="openings" value={formData.openings} onChange={handleChange} className={inputClass} min="1" required />
            </div>
            <div>
              <label className={labelClass}>Employment Type</label>
              <select name="employmentType" value={formData.employmentType} onChange={handleChange} className={inputClass} required>
                <option value="">Select Type</option>
                <option value="Direct Hire">Direct Hire</option>
                <option value="Contract">Contract</option>
                <option value="Temp">Temp</option>
                <option value="Per Diem">Per Diem</option>
                <option value="Contract-to-Hire">Contract-to-Hire</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Urgency</label>
              <select name="urgency" value={formData.urgency} onChange={handleChange} className={inputClass} required>
                <option value="">Select Urgency</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 Weeks">1-2 Weeks</option>
                <option value="30 Days">30 Days</option>
                <option value="Future">Future</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section 4: Logistics & Requirements */}
        <section>
          <h3 className="mb-5 border-b border-slate-200 pb-2 font-display text-xl font-bold text-[#0B2038]">Logistics & Requirements</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Start Date</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Assignment Length</label>
              <input type="text" name="assignmentLength" value={formData.assignmentLength} onChange={handleChange} className={inputClass} placeholder="e.g. 13 weeks" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Required Licenses</label>
              <input type="text" name="requiredLicenses" value={formData.requiredLicenses} onChange={handleChange} className={inputClass} placeholder="e.g. RN License (CA)" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Required Certifications</label>
              <input type="text" name="requiredCertifications" value={formData.requiredCertifications} onChange={handleChange} className={inputClass} placeholder="e.g. BLS, ACLS, PALS" />
            </div>
            <div>
              <label className={labelClass}>Minimum Experience (Years)</label>
              <input type="text" name="minExperience" value={formData.minExperience} onChange={handleChange} className={inputClass} placeholder="e.g. 2 years" />
            </div>
            <div>
              <label className={labelClass}>Shift</label>
              <select name="shift" value={formData.shift} onChange={handleChange} className={inputClass} required>
                <option value="">Select Shift</option>
                <option value="Days">Days</option>
                <option value="Evenings">Evenings</option>
                <option value="Nights">Nights</option>
                <option value="Rotating">Rotating</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Schedule / Hours</label>
              <input type="text" name="scheduleHours" value={formData.scheduleHours} onChange={handleChange} className={inputClass} placeholder="e.g. 3x12s, Mon-Fri 8-5" />
            </div>
            <div>
              <label className={labelClass}>Compensation / Bill Rate</label>
              <input type="text" name="compensation" value={formData.compensation} onChange={handleChange} className={inputClass} placeholder="e.g. $85/hr" />
            </div>
            
            <div className="md:col-span-2">
              <label className={labelClass}>Interview Preferences</label>
              <textarea name="interviewPreferences" value={formData.interviewPreferences} onChange={handleChange} rows={2} className={inputClass} placeholder="e.g. Phone screen first, then video interview..." />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Onboarding Requirements</label>
              <textarea name="onboardingRequirements" value={formData.onboardingRequirements} onChange={handleChange} rows={2} className={inputClass} placeholder="e.g. Drug screen, background check, orientation dates..." />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Additional Notes</label>
              <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={3} className={inputClass} placeholder="Any other details..." />
            </div>
          </div>
        </section>

        {/* Section 5: Service Agreement & Authorization */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="mb-4 font-display text-xl font-bold text-[#0B2038]">Service Agreement & Authorization</h3>
          <p className="mb-8 font-sans text-sm leading-relaxed text-[#0B2038]/80 italic">
            "I certify that the information provided is accurate and authorize Argyle Medical Staffing to recruit candidates on behalf of our organization. I acknowledge that placement terms and fees, if applicable, will be governed by the executed service agreement."
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Authorized Representative</label>
              <input type="text" name="authorizedRep" value={formData.authorizedRep} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Title</label>
              <input type="text" name="authTitle" value={formData.authTitle} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>Digital Signature (Typed Name)</label>
              <input type="text" name="digitalSignature" value={formData.digitalSignature} onChange={handleChange} className={inputClass} placeholder="Type your full name" required />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="authDate" value={formData.authDate} onChange={handleChange} className={inputClass} required />
            </div>
          </div>
        </section>

        <div className="pt-6 text-center">
          <button
            type="submit"
            className="w-full md:w-auto rounded-lg bg-[#008080] px-12 py-4 font-sans text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006666] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:ring-offset-2"
          >
            Request Talent
          </button>
        </div>
      </form>
    </div>
  );
}
