import React from "react";
import Certificate1 from "../assets/Certificate1.png";
import Certificate2 from "../assets/Certificate2.png";
import Certificate3 from "../assets/Certificate3.png";
import Certificate4 from "../assets/Certificate4.png";

const Certificate = () => {
  return (
    <div className="bg-[#F3F3F3] px-6 py-12 md:px-12 lg:px-20">
      {/* Heading Section */}
      <div className=" mb-10 md:ml-18">
        <h1 className="text-[32px] md:text-[45px] text-[#363636] font-bold">
          QMS Certificates
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          placeat.
        </p>
      </div>

      {/* Certificates Section */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <img
          src={Certificate1}
          alt="Certificate 1"
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-h-[317px] object-contain "
        />
        <img
          src={Certificate2}
          alt="Certificate 2"
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-h-[317px] object-contain "
        />
        <img
          src={Certificate3}
          alt="Certificate 3"
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-h-[317px] object-contain"
        />
        <img
          src={Certificate4}
          alt="Certificate 4"
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-h-[317px] object-contain "
        />
      </div>
    </div>
  );
};

export default Certificate;
