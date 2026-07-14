import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#051A2E] pt-12 sm:pt-20 pb-8 px-4 lg:px-12 text-white font-sans">
      <h2 className="sr-only">Footer Directory</h2>
      <div className="mx-auto max-w-7xl">
        {/* Top Link Grids */}
        <h3 className="sr-only">Directory Sections</h3>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4 border-b border-[#1A334D] pb-10 sm:pb-16">
          {/* Col 1 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Our Story</a></li>
              <li><a href="/#contact-us" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Contact Us</a></li>
              <li><Link to="/privacy-policy" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Facilities</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <li><a href="/#request-talent" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Request Talent</a></li>
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Credentialing Support</a></li>
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Contingent Search</a></li>
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Direct Placement</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Clinicians</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <li><a href="/#explore-careers" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Explore Careers</a></li>
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Travel & Contract</a></li>
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Career Support</a></li>
              <li><a onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Licensing</a></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Corporate Headquarters</h4>
            <div className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <p>1755 Argyle Ave #609<br />Los Angeles, CA 90028</p>
              <p>(708) 397-9503</p>
              <p>info@argylestaffing.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
              <span className="text-xl font-bold" style={{ color: '#ffffff' }}>A</span>
            </div>
            <span className="font-display text-[17px] font-bold text-white leading-tight">
              Argyle Medical<br />Staffing
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-[17px] tracking-tight">Trustpilot</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-bold text-white uppercase tracking-wider">Follow Us On</span>
              <div className="flex gap-4 items-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1A334D] flex flex-col items-center justify-between gap-4 md:flex-row text-[13px] text-slate-400">
          <div>© 2026 Argyle Staffing and Recruiting</div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">Terms of Use</Link>
            <a href="/#contact-us" className="hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
