import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-container">
      <div className="footer-section" id="footer-brand-section">
        <div className="brand">CROWN</div>
        <div>&#169; {date.getFullYear()} Crown Store</div>
      </div>

      <div className="footer-section">
        <div className="footer-section-title">Quick Links</div>
        <div className="footer-subsection">
          <p>
            <a href="/checkout">Checkout</a>
          </p>
          <p>
            <a href="/shop">Shop</a>
          </p>
          {/* <p>
            <a href="/">Contact</a>
          </p> */}
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-section-title">Contact Us</div>
        <div className="footer-subsection">
          <p style={{ cursor: "default" }}>Email: ibukunoluwa.jide@gmail.com</p>
          <p style={{ cursor: "default" }}>Phone: +234 111 1111 234</p>
          {/* <p>social media</p> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
