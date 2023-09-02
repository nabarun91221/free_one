import React from "react";
import dynamic from "next/dynamic";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-upper-left">
          <div className="footer-title">Free Subscribe To US</div>
          <div className="footer-description">
            We Will Update You With Our Newsletter & Events
          </div>
        </div>
        <div className="footer-upper-right">
          <div class="news__form">
            <input type="email" placeholder="Enter your email address" />
            <button class="news__btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <img
          src="/facebook.jpg"
          width={28}
          height={28}
          className="footer-soial-profile"
        />
        <div className="footer-copywrite">
          Nihongo Kaiwa Kyookai Society © 2023. Designed by Autocrat Studio
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
