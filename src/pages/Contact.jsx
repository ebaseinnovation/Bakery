import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead, MdEditLocationAlt } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-center">
        <div className="w-1/2 bg-black h-[375px] mr-6 mt-3 rounded-r-2xl relative">
          <div className="flex flex-row gap-4 justify-center mt-2">
            <p className="text-3xl text-white mt-1">ABC Bakery</p>
          </div>
          {/* {sendMail ? ( */}
          <div>
            <div className="flex flex-row gap-8 mt-5 items-center">
              <FaUserTie className="text-3xl text-orange-300 mt-4 ml-10" />
              <p className="text-xl text-orange-300 mt-4">Rajan</p>
            </div>
            <div className="flex flex-row gap-8 mt-2">
              <FaPhoneVolume className="text-3xl text-orange-300 mt-4 ml-10" />
              <p className="text-xl text-orange-300 mt-4">
                91-9444944445, 91-8610735182
              </p>
            </div>
            <div className="flex flex-row gap-8 mt-2">
              <MdMarkEmailRead className="text-3xl text-orange-300 mt-4 ml-10" />
              <p className="text-xl text-orange-300 mt-4">
                abcbakery@gmail.com
              </p>
            </div>
            <div className="flex flex-row gap-8 mt-2">
              <MdEditLocationAlt className="text-3xl text-orange-300 mt-4 ml-10" />
              <p className="text-xl text-orange-300 mt-4">
                10, Paddy field 1st lane, kosapet,{" "}
              </p>
            </div>
            <div>
              {" "}
              <p className="text-xl text-orange-300 mt-1 ml-28">
                Chennai-600012, Tamilnadu, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
