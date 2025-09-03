import "../style/landingPage.css";
import ogLogo from "../images/oglogo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
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
          <li>Contact Us</li>
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
          <button className="btn small">Download App</button>
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

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          <Card className="mui-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140/40C4B4/ffffff?text=Quick+Results"
                alt="Quick Results"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quick Results
                </Typography>
                <Typography variant="body2" className="card-description">
                  Get your lab results fast and securely online. No more waiting in lines.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <Card className="mui-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140/FF69B4/ffffff?text=Book+Appointment"
                alt="Book Appointment"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Book Appointment
                </Typography>
                <Typography variant="body2" className="card-description">
                  Schedule your lab tests at your convenience. Easy online booking system.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <Card className="mui-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140/007BFF/ffffff?text=Home+Service"
                alt="Home Service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Home Service
                </Typography>
                <Typography variant="body2" className="card-description">
                  Lab tests at your doorstep. Safe and convenient sample collection.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <Card className="mui-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140/28A745/ffffff?text=Health+Packages"
                alt="Health Packages"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Health Packages
                </Typography>
                <Typography variant="body2" className="card-description">
                  Comprehensive health check-up packages at affordable prices.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <Card className="mui-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140/DC3545/ffffff?text=Emergency+Tests"
                alt="Emergency Tests"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Emergency Tests
                </Typography>
                <Typography variant="body2" className="card-description">
                  24/7 emergency laboratory services for urgent medical needs.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <Card className="mui-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140/FFC107/ffffff?text=Corporate+Wellness"
                alt="Corporate Wellness"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Corporate Wellness
                </Typography>
                <Typography variant="body2" className="card-description">
                  Workplace health programs and employee wellness check-ups.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>

      

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
              <li>CBC (Complete Blood Count)</li>
              <li>UA (Urinalysis)</li>
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
        <p>
          <FacebookIcon style={{marginRight: '8px', verticalAlign: 'middle', color: '#1877F2'}} /> 
          <a href="https://www.facebook.com/vizcayalab" target="_blank" rel="noopener noreferrer" style={{color: '#1877F2', textDecoration: 'none'}}>
            Follow us on Facebook
          </a>
        </p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a> | 
          <a href="/">Contact Us</a> |
          <a href="/">Location</a>
        </div>
      </footer>
    </div>
  );
}

