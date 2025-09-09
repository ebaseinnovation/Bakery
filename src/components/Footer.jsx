import React from "react";
import { MdPhonelinkRing } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-amber-800 z-20">
      {/* <div
        className="sticky bottom-0 left-0 flex flex-row items-center h-10 py-3  text-white w-full transition-all bg-amber-800 justify-between"       
      > */}
      <div className="sticky bottom-0 left-0 flex items-center h-10 w-full justify-between pl-6 pr-8 text-white  transition-all  ">
        <div className="float-left items-center flex flex-row">
          <div className="flex text-2xl text-white sm:ml-10 ml-5">
            <MdPhonelinkRing />
          </div>
          <h1 className="sm:ml-3 ml-1">9444944445, 8610735182</h1>

          <div className="flex flex-row float-right absolute right-10 gap-5">
            <button className="flex    text-2xl text-white cursor-pointer">
              <FaFacebook />
            </button>
            <button className="flex    text-2xl text-white cursor-pointer">
              <FaInstagramSquare />
            </button>
          </div>
        </div>

        {/* <h5 className="text-white p-3 ">&copy; </h5>
        <p className="text-white text-sm font-bold"> Copyright 2024</p> */}
      </div>
    </div>
  );
};

export default Footer;
