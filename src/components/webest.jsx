import React from "react";
import WebestImg from '../assets/webest.png'

const Webest = () => {
  return (
    <>
    <div className="bg-[#F3F3F3] flex flex-col lg:flex-row gap-10 mt-20 mb-16 px-4 md:px-12 lg:px-24 pt-16 pb-16">
  {/* Left Text Section */}
  <div className="flex-2">
    <h3 className="text-[#9f9f9f] text-xl md:text-2xl lg:text-3xl mb-2">
      World's Leading Industry Corporation!
    </h3>
    <h1 className="text-[#363636] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
      What Are We Best At?
    </h1>
    <p className="font-roboto text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-[-0.2px] text-[#363636] text-justify mt-6">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repellat
      error accusantium quam? Sint praesentium odio alias quae similique, totam
      voluptatibus ex adipisci accusantium pariatur sapiente sed. Cupiditate,
      vitae ut. Minus, dolores qui facere quidem delectus ab aliquid odio dolore!
      Totam voluptatibus ex adipisci accusantium pariatur sapiente sed.
      Cupiditate, vitae ut. Minus, dolores qui facere quidem delectus ab aliquid
      odio dolore! Vitae ut. Minus, dolores qui facere quidem delectus ab aliquid
      odio dolore!
    </p>

    {/* Stats Section */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-8 pt-10">
      <div className="flex-1 flex items-start gap-4 min-w-[200px]">
        <div className="border-l-[3px] border-[#363636] h-full"></div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#363636]">250+</h1>
          <p className="text-lg md:text-xl text-[#E8564C]">
            NO'S OF MOLDS IN A YEAR
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-start gap-4 min-w-[200px]">
        <div className="border-l-[3px] border-[#363636] h-full"></div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#363636]">06</h1>
          <p className="text-lg md:text-xl text-[#E8564C]">
            LOCATION ACROSS INDIA
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-start gap-4 min-w-[200px]">
        <div className="border-l-[3px] border-[#363636] h-full"></div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#363636]">1,000+</h1>
          <p className="text-lg md:text-xl text-[#E8564C]">EMPLOYEES</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Image Section */}
  <div className="flex-1">
    <img
      src={WebestImg}
      alt="Webest"
      className="w-full h-auto object-cover  max-h-[518px] max-w-[555px]"
    />
  </div>
</div>

    </>
  );
};

export default Webest;
