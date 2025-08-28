import React from "react";
import { ArrowRight } from "lucide-react";
import '../App.css';

const Header = () => {
  return (
    <>
      <div className="bg-[#242424] text-sm text-white px-4 py-3 md:py-0">
  <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
    {/* Left Section */}
    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
      <span className="text-white">77, Universal Industrial Estate,</span>
      <span className="hidden md:inline text-gray-400">|</span>
      <span className="text-white">
        B. Patel Road, Goregaon (East), Mumbai - 400 063.
      </span>
      <span className="hidden md:inline text-gray-400">|</span>
      <span className="text-white">satish@shaktienterprises.in</span>
    </div>

    {/* Right Section */}
    <div className="flex flex-col md:flex-row items-center gap-3">
      <button className="bg-[#4D5FC3] text-white px-6 py-3 flex items-center gap-2">
        GET A QUOTE
        <ArrowRight className="w-5 h-5" />
      </button>
      <div className="flex gap-4 text-[#CFD3D7] text-lg">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Header;
