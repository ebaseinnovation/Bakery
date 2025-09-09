import React from "react";
import BdayCake1 from "../assets/gallery/birthday-cake1.jpg";
import BdayCake2 from "../assets/gallery/birthday-cake2.jpg";
import CustCake1 from "../assets/gallery/Custom-cake.jpg";
import CustCake2 from "../assets/gallery/princes-cake1.jpg";
import WedCake1 from "../assets/gallery/wedding-cake.jpg";
import WedCake2 from "../assets/gallery/Wedding-cake2.jpg";
import Service from "../assets/gallery/Services.jpg";
import { FaBreadSlice } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

const Services = () => {
  return (
    <div className="mx-auto">
      <div className="text-2xl text-amber-900 flex justify-center mt-2 underline decoration-2 decoration-double underline-offset-4 mb-2">
        Birthday Cakes
      </div>
      <div className=" flex w-full sm:flex-row flex-col">
        <div className=" sm:w-2/5 w-5/6 mx-auto mt-5 flex justify-center ">
          <img src={BdayCake1} alt="/" className="w-full h-full  rounded-2xl" />
        </div>
        <div className=" sm:w-2/5 w-5/6 mx-auto mt-5 flex justify-center">
          <img src={BdayCake2} alt="/" className="w-full h-full rounded-2xl " />
        </div>
      </div>
      <div className="text-2xl text-amber-900 flex justify-center mt-2 underline decoration-2 decoration-double underline-offset-4 mb-2">
        Wedding Cakes
      </div>
      <div className=" flex w-full sm:flex-row flex-col">
        <div className=" sm:w-2/5 w-5/6 mx-auto mt-5 flex justify-center ">
          <img src={WedCake1} alt="/" className="w-full h-full  rounded-2xl" />
        </div>
        <div className=" sm:w-2/5 w-5/6 mx-auto mt-5 flex justify-center">
          <img src={WedCake2} alt="/" className="w-full h-full rounded-2xl " />
        </div>
      </div>
      <div className="text-2xl text-amber-900 flex justify-center mt-2 underline decoration-2 decoration-double underline-offset-4 mb-2">
        Custom Cakes
      </div>
      <div className=" flex w-full sm:flex-row flex-col">
        <div className=" sm:w-2/5 w-5/6 mx-auto mt-5 flex justify-center ">
          <img src={CustCake1} alt="/" className="w-full h-full  rounded-2xl" />
        </div>
        <div className=" sm:w-2/5 w-5/6 mx-auto mt-5 flex justify-center">
          <img src={CustCake2} alt="/" className="w-full h-full rounded-2xl " />
        </div>
      </div>
      <div className=" flex w-full sm:flex-row flex-col">
        <div className="sm:w-1/2 w-5/6 mx-auto sm:mx-10  border-2 sm:p-5 mt-5 rounded-2xl border-amber-900 pb-5">
          <h1 className="text-4xl text-amber-900 font-bold px-3 sm:px-0 pt-3 sm:pt-0">
            What We Do Offer For You?
          </h1>
          <p className="text-amber-900 indent-4 mx-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            similique voluptates consequatur fuga beatae rerum, nulla doloremque
            optio dicta itaque, laboriosam autem, labore tenetur.
          </p>

          <div className="pl-5 mt-3 flex flex-col ">
            {/* Card 1 */}
            <div className="w-1/2 flex items-center flex-row">
              <div className=" bg-amber-900 p-3 rounded-full">
                <div className="text-2xl text-white font-bold ">
                  <FaBreadSlice />
                </div>
              </div>

              <p className=" text-amber-900 pl-3 font-semibold ">
                Quality Products
              </p>
            </div>
            <p className="text-amber-900 indent-4 mx-5 mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              necessitatibus, ab enim quis nihil temporibus.
            </p>
            {/* end card 1 */}
            {/* Card 2 */}
            <div className="w-1/2 flex items-center flex-row mt-1.5">
              <div className=" bg-amber-900 p-3 rounded-full">
                <div className="text-2xl text-white font-bold ">
                  <FaBirthdayCake />
                </div>
              </div>
              <p className=" text-amber-900 ml-3 font-semibold">
                Custom Products
              </p>
            </div>
            <p className="text-amber-900 indent-4 mx-5 mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              necessitatibus, ab enim quis nihil temporibus.
            </p>
            {/* end card 2*/}
            {/* Card 3 */}
            <div className="w-1/2 flex items-center flex-row mt-1.5">
              <div className=" bg-amber-900 p-3 rounded-full">
                <div className="text-2xl text-white font-bold ">
                  <FaCartPlus />
                </div>
              </div>
              <p className=" text-amber-900 ml-3 font-semibold">Online Order</p>
            </div>
            <p className="text-amber-900 indent-4 mx-5 mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              necessitatibus, ab enim quis nihil temporibus.
            </p>
            {/* end card 3 */}
            {/* Card 4 */}
            <div className="w-1/2 flex items-center flex-row mt-1.5">
              <div className=" bg-amber-900 p-3 rounded-full">
                <div className="text-2xl text-white font-semibold ">
                  <FaTruck />
                </div>
              </div>
              <p className=" text-amber-900 ml-3 font-bold">Door Delivery</p>
            </div>
            <p className="text-amber-900 indent-4 mx-5 mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              necessitatibus, ab enim quis nihil temporibus.
            </p>
            {/* end card 4 */}
          </div>
        </div>
        <div className=" sm:w-2/5 w-5/6 mx-10 mt-5 flex justify-center">
          <img src={Service} alt="/" className="w-full h-full  " />
        </div>
      </div>
    </div>
  );
};

export default Services;
