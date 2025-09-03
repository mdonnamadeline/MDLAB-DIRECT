import "../style/landingPage.css";
import ogLogo from "../images/oglogo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useRef } from 'react';

export default function LandingPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={ogLogo} alt="MDLAB Logo" />
          MDLAB DIRECT
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Location</li>
          <li>Services</li>
          <li>About Us</li>
        </ul>
        <div className="nav-buttons">
          <div className="dropdown-container"
               onMouseEnter={() => {
                 if (timeoutRef.current) clearTimeout(timeoutRef.current);
                 setShowDropdown(true);
               }}
               onMouseLeave={() => {
                 timeoutRef.current = setTimeout(() => {
                   setShowDropdown(false);
                 }, 200);
               }}>
            <button className="btn small">Online Results</button>
            {showDropdown && (
              <div className="dropdown-menu"
                   onMouseEnter={() => {
                     if (timeoutRef.current) clearTimeout(timeoutRef.current);
                   }}
                   onMouseLeave={() => {
                     timeoutRef.current = setTimeout(() => {
                       setShowDropdown(false);
                     }, 200);
                   }}>
                <div className="dropdown-item"
                     onClick={() => window.location.href = '/login/patient'}>
                  Patient
                </div>
                
                <div className="dropdown-item"
                     onClick={() => window.location.href = '/login/pathologist'}>
                  Pathologist
                </div>
                
                <div className="dropdown-item"
                     onClick={() => window.location.href = '/login/medtech'}>
                  Med Technician
                </div>
                
                <div className="dropdown-item"
                     onClick={() => window.location.href = '/login/admin'}>
                  Admin
                </div>
              </div>
            )}
          </div>
          <button className="btn small">Contact: 0999 994 8372</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>MDLAB - Your Trusted Diagnostic Laboratory</h2>
            <p>Comprehensive laboratory services in Almaguer North, Bambang, Philippines</p>
          </div>
          <div className="hero-actions">
            <button className="btn blue">Blood Test</button>
            <button className="btn pink">Hematology</button>
            <button className="btn teal">Serology</button>
            <button className="btn green">Urinalysis</button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="whats-new">
        <div className="whats-text">
          <h3>Services Offered by MDLAB DIRECT</h3>
          <p><strong>Complete Diagnostic Solutions</strong></p>
          
          <div className="service-category">
            <h4>Chem 10 (Clinical Chemistry Profile)</h4>
            <ul className="service-list">
              <li>• Fasting Blood Sugar</li>
              <li>• Cholesterol</li>
              <li>• Triglyceride</li>
              <li>• HDL (High-Density Lipoprotein)</li>
              <li>• LDL (Low-Density Lipoprotein)</li>
              <li>• Uric Acid</li>
              <li>• Blood Urea</li>
              <li>• Creatinine</li>
              <li>• AST (Aspartate Aminotransferase)</li>
              <li>• ALT (Alanine Aminotransferase)</li>
            </ul>
          </div>

          <div className="service-category">
            <h4>CBC (Complete Blood Count)</h4>
            <ul className="service-list">
              <li>• Red Blood Cell Count</li>
              <li>• White Blood Cell Count</li>
              <li>• Hemoglobin & Hematocrit</li>
              <li>• Platelet Count</li>
              <li>• Differential Count</li>
            </ul>
          </div>

          <div className="service-category">
            <h4>UA (Urinalysis)</h4>
            <ul className="service-list">
              <li>• Physical Examination (Color, Clarity, Specific Gravity, pH)</li>
              <li>• Chemical Examination (Protein, Glucose, Ketones, Bilirubin, Urobilinogen, Blood)</li>
              <li>• Microscopic Examination (Red Blood Cells, White Blood Cells, Casts, Crystals, Bacteria, Parasites)</li>
            </ul>
          </div>

          <div className="whats-buttons">
            <button className="btn red">Book Test</button>
            <button className="btn gray">View Results</button>
          </div>
          <div className="app-info">
            <p><LocationOnIcon style={{marginRight: '8px', verticalAlign: 'middle'}} /> Located at: Almaguer North, Bambang, Philippines</p>
            <p><PhoneIcon style={{marginRight: '8px', verticalAlign: 'middle'}} /> Contact: 0999 994 8372</p>
            <p><EmailIcon style={{marginRight: '8px', verticalAlign: 'middle'}} /> Email: mdlab_diagnostics@yahoo.com.ph</p>
          </div>
        </div>
        <div className="whats-image">
          {/* Replace with your own image */}
          {/* <img src="/images/fitness-checkup.png" alt="Laboratory Services" /> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>MDLAB - Your Trusted Diagnostic Laboratory Partner</p>
        <p>Almaguer North, Bambang, Philippines | Contact: 0999 994 8372</p>
        <p>Email: mdlab_diagnostics@yahoo.com.ph</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a> | 
          <a href="/">Contact Us</a> |
          <a href="/">Location</a>
        </div>
      </footer>
    </div>
  );
}

