import React from "react";
import OurLocationBG from "../assets/our_location-bg.png";
import IndiaImg from "../assets/india_map.png";

const Ourlocation = () => {
  return (
    <div className="OurLocation relative bg-[#f3f3f3] py-12 px-6 md:py-16 md:px-10 lg:px-20 text-[#363636]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={OurLocationBG}
          alt="Location Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#f3f3f3]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
       {/* Heading */}
<div className="text-center md:text-left mb-10">
  <h1 className="text-2xl md:text-4xl font-bold mb-3">
    Our Location
  </h1>
  <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perferendis, accusantium!
  </p>
</div>


        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Cards (Always vertical) */}
          <div className="flex-1 w-full flex flex-col gap-6">
            <div className="bg-[#FAF7F8]  hover:shadow-md transition p-5 ">
              <h1 className="text-lg font-bold mb-2">Pune Unit : 2 & 3</h1>
              <p className="text-sm leading-relaxed">
                Gat No. 444 / 2, Plot No. 43, Nighoje, Chakan,
              </p>
              <p className="text-sm">Dist. PUNE - 410 501.</p>
            </div>

            <div className="bg-[#FAF7F8]  hover:shadow-md transition p-5">
              <h1 className="text-lg font-bold mb-2">Pune Unit : 4</h1>
              <p className="text-sm leading-relaxed">
                Gat No. 444 / 2, Plot No. 43, Nighoje, Chakan,
              </p>
              <p className="text-sm">Dist. PUNE - 410 501.</p>
            </div>

            <div className="bg-[#FAF7F8]  hover:shadow-md transition p-5 ">
              <h1 className="text-lg font-bold mb-2">Pune Unit : 5</h1>
              <p className="text-sm leading-relaxed">
                Gat No. 444 / 2, Plot No. 43, Nighoje, Chakan,
              </p>
              <p className="text-sm">Dist. PUNE - 410 501.</p>
            </div>

            <div className="bg-[#FAF7F8]  hover:shadow-md transition p-5 ">
              <h1 className="text-lg font-bold mb-2">Pune Unit : 6</h1>
              <p className="text-sm leading-relaxed">
                Gat No. 444 / 2, Plot No. 43, Nighoje, Chakan,
              </p>
              <p className="text-sm">Dist. PUNE - 410 501.</p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src={IndiaImg}
              alt="India Map"
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourlocation;
