import React from "react";
import about from "../assets/gallery/about-us.jpg";
import { GiCheckMark } from "react-icons/gi";
import { FaCertificate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaBreadSlice } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";

const Aboutus = () => {
  return (
    <div>
      <div className="text-2xl text-amber-900 flex justify-center mt-2 underline decoration-2 decoration-dashed underline-offset-4 mb-2">
        Aboutus
      </div>
      <div className=" flex w-full sm:flex-row flex-col">
        <div className=" sm:w-2/5 w-5/6 mx-10 mt-5 flex justify-center">
          <img src={about} alt="/" className="w-full h-full  " />
        </div>
        <div className="sm:w-1/2 w-5/6 mx-auto sm:mx-10  border-2 sm:p-5 mt-5 rounded-2xl border-amber-900 pb-5">
          <h1 className="text-4xl text-amber-900 font-bold px-3 sm:px-0 pt-3 sm:pt-0">
            We Bake Every Item From The Core Of Our Hearts
          </h1>
          <p className="text-amber-900 indent-4 mx-5 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            similique voluptates consequatur fuga beatae rerum, nulla doloremque
            optio dicta itaque, laboriosam autem, labore tenetur.
          </p>
          <p className="text-amber-900 indent-4 mx-5 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            similique voluptates consequatur fuga beatae rerum, nulla doloremque
            optio dicta itaque, laboriosam autem, labore tenetur.
          </p>

          <div className="mx-5 mt-10 flex flex-row ">
            <div className="w-1/2 flex items-center">
              <div className="text-2xl text-amber-900 ">
                <GiCheckMark />
              </div>
              <p className=" text-amber-900 ml-3">Quality Products</p>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="text-2xl text-amber-900 ">
                <GiCheckMark />
              </div>
              <p className=" text-amber-900 ml-3">Custom Products</p>
            </div>
          </div>
          <div className="mx-5 mt-10 flex flex-row ">
            <div className="w-1/2 flex items-center">
              <div className="text-2xl text-amber-900 ">
                <GiCheckMark />
              </div>
              <p className=" text-amber-900 ml-3">Online Order</p>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="text-2xl text-amber-900 ">
                <GiCheckMark />
              </div>
              <p className=" text-amber-900 ml-3">Home Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-2 py-16 sm:py-6 sm:sm-24 lg:max-w-7xl lg:px-9 ">
        <div className="grid grid-cols-2 gap-x-1 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6">
          {/* card1 */}
          <div className=" w-full mb-[30px] px-[15px] flex   ">
            <div className=" group  w-full style-3 rounded-[10px] bg-slate-100 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px] hover:border-slate-400">
              <div className=" w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                <div className=" bg-amber-900 p-4 rounded-full">
                  <div className="text-5xl text-white font-bold">
                    <LiaCertificateSolid />
                  </div>
                </div>
              </div>
              <div className="icon-content">
                <div className="cursor-pointer">
                  <h6 className="mb-2 hover:text-red-500">
                    Years of Experience
                    {/* <div onClick={() => navigate("/idp/environments")}>
                          Environments
                        </div> */}
                  </h6>
                </div>
                <p className="text-2xl la-font-awesome-flag">50</p>
              </div>
            </div>
          </div>
          {/* end card 1 */}
          {/* card2*/}
          <div className=" w-full mb-[30px] px-[15px] flex   ">
            <div className=" group w-full style-3 rounded-[10px] bg-slate-100 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px] hover:border-slate-400">
              <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                <div className=" bg-amber-900 p-4 rounded-full">
                  <div className="text-5xl text-white font-bold ">
                    <HiUserGroup />
                  </div>
                </div>
              </div>
              <div className="icon-content">
                <div className="cursor-pointer">
                  <h6 className="mb-2 hover:text-red-500">
                    Skilled Professionals
                    {/* <div onClick={() => navigate("/idp/environments")}>
                          Environments
                        </div> */}
                  </h6>
                </div>
                <p className="text-2xl la-font-awesome-flag">75</p>
              </div>
            </div>
          </div>
          {/* end card 2 */}
          {/* card3 */}
          <div className=" w-full mb-[30px] px-[15px] flex   ">
            <div className=" group w-full style-3 rounded-[10px] bg-slate-100 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px] hover:border-slate-400">
              <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                <div className=" bg-amber-900 p-4 rounded-full">
                  <div className="text-5xl text-white font-bold  ">
                    <FaBreadSlice />
                  </div>
                </div>
              </div>
              <div className="icon-content">
                <div className="cursor-pointer">
                  <h4 className="mb-2 hover:text-red-500">
                    Total Products
                    {/* <div onClick={() => navigate("/idp/environments")}>
                          Environments
                        </div> */}
                  </h4>
                </div>
                <p className="text-2xl la-font-awesome-flag">135</p>
              </div>
            </div>
          </div>
          {/* end card 3 */}
          {/* card4 */}
          <div className="w-full mb-[30px] px-[15px] flex   ">
            <div className=" group w-full style-3 rounded-[10px] bg-slate-100 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px] hover:border-slate-400">
              <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                <div className=" bg-amber-900 p-4 rounded-full">
                  <div className="text-5xl text-white font-bold   ">
                    <FaCartPlus />
                  </div>
                </div>
              </div>
              <div className="icon-content">
                <div className="cursor-pointer">
                  <h5 className="mb-2 hover:text-red-500">
                    Order Everyday
                    {/* <div onClick={() => navigate("/idp/environments")}>
                          Environments
                        </div> */}
                  </h5>
                </div>
                <p className="text-2xl la-font-awesome-flag">9537</p>
              </div>
            </div>
          </div>
          {/* end card 4 */}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
