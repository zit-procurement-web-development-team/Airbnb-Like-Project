import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import './BookingPage.css';

const Navigation = () => (
  <nav className="nav-container">
    <div className="nav-content">
      <FontAwesomeIcon icon={faAngleLeft} />
      <span>Confirm and pay</span>
    </div>
  </nav>
);

const BookingDetails = () => (
  <div className="booking-details">
    <h2>Your trip</h2>
    
    <div className="dates-section">
      <h2>Dates</h2>
      <div className="date-edit">
        <span>Dec 8 – 13</span>
        <button>Edit</button>
      </div>
    </div>

    <div className="login-section">
      <h3>Log in or sign up to book</h3>
      <div className="phone-inputs">
        <select className="country-code">
          <option value="+1">+1 (US)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+91">+91 (IN)</option>
        </select>
        <input type="tel" placeholder="Phone number" className="phone-number" />
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faApple} />
      </div>
      <button className="continue-btn">Continue with phone</button>
    </div>
  </div>
);

const PropertyDetails = () => (
  <div className="property-details">
    <div className="property-header">
      <img src="https://via.placeholder.com/150" alt="House" className="property-image" />
      <div className="property-info">
        <h3>Refúgio dos Ventos - 15km from downtown Gonçalves</h3>
        <p>Entire place</p>
        <div className="rating">
          <span>Rating 4.98 out of 5; 63 reviews</span>
          <span>4.98 (63 reviews)</span>
        </div>
      </div>
    </div>

    <div className="price-details">
      <h3>Price details</h3>
      <div className="price-breakdown">
        <div className="price-row">
          <span>$198.52 USD x 5 nights</span>
          <span>$992.60 USD</span>
        </div>
        <div className="price-row">
          <span>Cleaning fee</span>
          <span>$24.82 USD</span>
        </div>
        <div className="price-row">
          <span>Airbnb service fee</span>
          <span>$166.86 USD</span>
        </div>
        <div className="price-row total">
          <span>Total (USD)</span>
          <span>$1,184.28 USD</span>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <a href="#">Terms</a>
        <span>·</span>
        <a href="#">Sitemap</a>
        <span>·</span>
        <a href="#">Privacy</a>
        <span>·</span>
        <a href="#">Your Privacy Choices</a>
      </div>
      <div className="footer-right">
        <select className="language-select">
          <option>English (US)</option>
        </select>
        <select className="currency-select">
          <option>$ USD</option>
        </select>
      </div>
    </div>
  </footer>
);

const BookingPage = () => {
  return (
    <>
      <Navigation />
      <main className="main-container">
        <BookingDetails />
        <PropertyDetails />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
