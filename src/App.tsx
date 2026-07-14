import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import BartonClone from './components/BartonClone';
import ScrollToTop from './components/ScrollToTop';
import FacilityIntakePage from './components/pages/FacilityIntakePage';
import ClinicianRegistrationPage from './components/pages/ClinicianRegistrationPage';
import PartnerRegistrationPage from './components/pages/PartnerRegistrationPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsOfServicePage from './components/pages/TermsOfServicePage';

function LandingPage() {
  return (
    <>
      <Hero />
      <BartonClone />
    </>
  );
}

import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/request-talent" element={<FacilityIntakePage />} />
          <Route path="/explore-careers" element={<ClinicianRegistrationPage />} />
          <Route path="/partner-with-us" element={<PartnerRegistrationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
