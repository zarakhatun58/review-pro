import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <h1 className="text-center">Contact Services</h1>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                <h4>Our Code Education</h4>
                <small>Code &copy; Education</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Contact</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-footer-container">
                <h6>Contact</h6>
                <p>+919874294319</p>
                <p>India, Kolkata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
