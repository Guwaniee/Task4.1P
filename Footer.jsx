import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact us: 0123456789</p>
        <p>Email: example@example.com</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
      <div className="checkout-cart">
        <button>Checkout Cart</button>
      </div>
      <div className="signup-email">
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </div>
    </footer>
  );
}

export default Footer;