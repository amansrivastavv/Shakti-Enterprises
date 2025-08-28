import React from "react";
import "../App.css";
import MumaiImg from "../assets/mumbaiImg.png";

const Mumbai = () => {
  return (
    <>
<div className="mumbai-plant px-4 py-8 sm:py-12 md:px-16 md:py-16 lg:p-[100px] flex justify-center">
  <img
    src={MumaiImg}
    alt="Mumbai Image"
    className="w-full max-w-[1580px] h-auto max-h-[668px] object-cover"
  />
</div>

    </>
  );
};

export default Mumbai;
