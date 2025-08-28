import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../App.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "PRODUCTS", href: "#products" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT US", href: "#about" },
      { label: "MANUFACTURING", href: "#manufacturing" },
        { label: "FACILITY", href: "#facilities" },
          { label: "CAREER", href: "#career" },
            { label: "CONTACT US", href: "#contact" },
             { label: "DOWNLOAD CATALOG", href: "#catalog" },
  ];

  return (
    <nav className="bg-white">
      <div className="max-w-[1400px]  flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black text-[14px] text-base">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="hover:text-[#4D5FC3] transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-black font-medium">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="block hover:text-[#4D5FC3] transition"
                  onClick={() => setOpen(false)} // closes menu on click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
