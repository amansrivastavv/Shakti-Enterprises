import React from 'react'
import "../App.css";
import Product from "../assets/Product_img.png";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
   <>
  {/* Section Heading */}

<div className="bg-[#ffff] px-10 pb-10  lg:px-14">
  {/* Section Heading */}
    <div className="text-left max-w-3xl  mb-12">
    <h1 className="text-3xl md:text-5xl font-bold text-[#363636] mb-4">
      Our Products
    </h1>
    <p className="text-gray-600 text-base md:text-sm leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum aspernatur
      ducimus corrupti qui, maxime officia itaque eius libero harum.
    </p>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Card 1 */}
    <div className="flex-1">
      <img src={Product} alt="Product Image" className="w-full h-auto max-h-[414px] object-contain"/>
      <div className="border-l-3 border-[#E8564C] pl-4 mt-4">
        <h3 className="text-lg font-semibold text-[#363636]">ARCHITECTURAL SEALING SYSTEM</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="mt-3 flex items-center gap-2 bg-[#E8564C]  p-2 text-white font-medium">
          READ MORE <ArrowRight size={16}/>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex-1">
      <img src={Product} alt="Product Image" className="w-full h-auto max-h-[414px] object-contain"/>
      <div className="border-l-3 border-[#4D5FC3] pl-4 mt-4">
        <h3 className="text-lg font-semibold text-[#363636]">ARCHITECTURAL SEALING SYSTEM</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="mt-3 flex items-center gap-2 bg-[#4D5FC3] p-2 text-white font-medium">
          READ MORE <ArrowRight size={16}/>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex-1">
      <img src={Product} alt="Product Image" className="w-full h-auto max-h-[414px] object-contain"/>
      <div className="border-l-3 border-[#E8564C] pl-4 mt-4">
        <h3 className="text-lg font-semibold text-[#363636]">ARCHITECTURAL SEALING SYSTEM</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="mt-3 flex items-center gap-2 bg-[#E8564C] p-2 text-white font-medium">
          READ MORE <ArrowRight size={16}/>
        </button>
      </div>
    </div>

    {/* Card 4 (sirf image) */}
    <div className="flex-1">
      <img src={Product} alt="Product Image" className="w-full h-auto max-h-[414px] object-contain"/>
      <div className="border-l-3 border-[#4D5FC3] pl-4 mt-4">
        <h3 className="text-lg font-semibold text-[#363636]">ARCHITECTURAL SEALING SYSTEM</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="mt-3 flex items-center gap-2 bg-[#4D5FC3] p-2 text-white font-medium">
          READ MORE <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  </div>
</div>



   </>
  )
}

export default Products
