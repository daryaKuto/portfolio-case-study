import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contact">
          <p>
            <FaEnvelope /> email@example.com
          </p>
          <p>
            <FaPhone /> 123-456-7890
          </p>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
