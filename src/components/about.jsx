import React from "react";
import "../App.css";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <>
      <div className="About-section flex flex-col lg:flex-row items-start gap-10 mt-16 mb-16 px-4 md:px-8 lg:px-16">
        {/* Left Stats Section */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-col gap-18 text-center lg:text-left ">
          <div className="border-l-4 border-[#363636] pl-4">
            <h1 className="text-3xl md:text-8xl font-bold text-[#363636] m-0 ">
              250+
            </h1>

            <p className="text-[#E8564C] md:text-3xl m-0  ">
              NO'S OF MOLDS IN INDIA
            </p>
          </div>

          <div className="border-l-4 border-[#363636] pl-4  ">
            <h1 className="text-3xl md:text-8xl font-bold text-[#363636] m-0">
              06
            </h1>
            <p className="text-[#E8564C] md:text-3xl m-0">
              LOCATIONS ACROSS INDIA
            </p>
          </div>

          <div className="border-l-4 border-[#363636] pl-4">
            <h1 className="text-3xl md:text-8xl font-bold text-[#363636] m-0">
              1,000+
            </h1>
            <p className="text-[#E8564C] md:text-3xl m-0">EMPLOYEES</p>
          </div>
        </div>

        {/* Middle Image Section */}
        <div className="flex-1 w-full max-h-[580px]">
          <img
            src={AboutImg}
            alt="About Shakti Enterprises"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Right About Text Section */}
        <div className="flex-1">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 m-0">
              About Shakti <span className="text-[#E8564C]">Enterprises</span>
            </h1>
            <p className="font-roboto text-base md:text-lg font-light leading-relaxed tracking-[-0.2px] text-[#363636] text-justify m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
