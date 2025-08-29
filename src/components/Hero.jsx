import React from "react";
import HeroBg from "../assets/forklift.png";
import HeroImg from "../assets/hero-img.png";
import "../App.css";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-section bg-[#F2F2F2] flex flex-col md:flex-row max-h-[800px]">
      {/* Left Section */}
      <div
        className="flex-1 flex flex-col items-center md:items-start justify-center px-6 md:px-12 text-center md:text-left"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[#363636] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6   md:pl-24 py-2">
          We Have Our Manufacturing
        </h1>

        <p
          className="
    text-[#363636]           
    font-roboto           
    font-light              
    text-[18px]             
    leading-[1.2]          
    tracking-[-0.18px]       
    text-left              
    mb-6 max-w-2xl
    md:px-24 
    
  "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <button className="bg-[#E8564C] text-white px-6 py-2 md:px-8 md:py-4 md:ml-24 font-medium flex items-center gap-2 hover:bg-[#d2443a] transition">
          VIEW OUR RANGE OF PRODUCTS
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center mt-4 mb-4">
    <img
  src={HeroImg}
  alt="Hero Image"
  className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[600px] object-contain "
/>
      </div>
    </div>
  );
};

export default Hero;
