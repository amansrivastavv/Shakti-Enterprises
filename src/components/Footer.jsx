import React from "react";
import "../App.css";
import FooterLogo from "../assets/footer_logo.png";
import MapImg from "../assets/mapimge.png";

const Footer = () => {
  return (
    <footer className="bg-[#4D5FC3] text-white">
      {/* Top Footer */}
      <div className="py-12 px-6 md:py-16 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Section*/}
          <div className="flex-1">
            <img src={FooterLogo} alt="Footer Logo" className="w-48 h-auto mb-4" />
            <p className="text-[16px] font-normal leading-[1.88] tracking-[-0.32px] mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-white text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-white text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-white text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Pinterest" className="text-white text-2xl">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="mb-3 text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-sm tracking-[-0.32px]">
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Manufacturing</li>
              <li>Facilities</li>
              <li>My Perfect Resume</li>
              <li>Career</li>
              <li>Contact Us</li>
              <li>Download Catalog</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex-1">
            <h3 className="mb-3 text-lg">Support Links</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-sm tracking-[-0.32px]">
              <li>Feedback</li>
              <li>Vigilance</li>
              <li>Website Policies</li>
              <li>Disclaimer</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Address + Map */}
          <div className="flex-1">
            <h3 className="mb-3 text-lg">
              Address: Office & Unit 1 : 77, Universal Industrial Estate, L. B. Patel Road
            </h3>
            <img src={MapImg} alt="Map Image" className="w-full max-h-[239px] max-w-[536px] object-cover " />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/40 ml-16 mr-16" />

      {/* Copyright text */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10 lg:px-20 text-white text-sm">
        <p>© 2025 <span className="text-red-400"> Shakti EnterPrises.</span>  All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <p>Email: info@Shakti.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
