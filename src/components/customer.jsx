import React from 'react';
import '../App.css';
import Customer1 from '../assets/customer1.png';
import Customer3 from '../assets/customer3.png';
import Customer4 from '../assets/customer4.png';
import Customer5 from '../assets/customer5.png';
import Customer6 from '../assets/customer6.png';

const Customer = () => {
  return (
    <>
      <div className="Our-customer px-4 py-12 md:px-16 bg-white text-center md:text-left">
        {/* Heading */}
        <h1 className="text-3xl md:text-[45px] font-bold text-[#363636] mb-2">
          Our Proud Customers
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, eaque?
        </p>

        {/* Customer Logos */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10">
          <img src={Customer1} alt="Customer1" className="h-12 md:h-16 object-contain" />
                   <img src={Customer6} alt="Customer6" className="h-12 md:h-16 object-contain" />
          <img src={Customer3} alt="Customer3" className="h-12 md:h-16 object-contain" />
          <img src={Customer4} alt="Customer4" className="h-12 md:h-16 object-contain" />

          <img src={Customer5} alt="Customer6" className="h-12 md:h-16 object-contain" />
                    <img src={Customer6} alt="Customer6" className="h-12 md:h-16 object-contain" />
                    <img src={Customer3} alt="Customer3" className="h-12 md:h-16 object-contain" />
          <img src={Customer4} alt="Customer4" className="h-12 md:h-16 object-contain" />
        </div>
      </div>
    </>
  );
};

export default Customer;
