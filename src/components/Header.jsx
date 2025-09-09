import React, { useState } from "react";
import logo from "../assets/BakLogo3.jpg";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { alertOff, increment } from "../features/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState(true);
  const count = useSelector((state) => state.counter.count);
  const cartAlert = useSelector((state) => state.counter.cartAlert);

  const handleClick = () => {
    dispatch(increment());
    dispatch(alertOff());
  };

  return (
    <>
      <div className="relative">
        <div
          className={`w-full flex justify-center absolute z-10  ${
            cartAlert ? "top-20" : "top-0"
          } duration-300`}
        >
          <div className="flex justify-center items-center ">
            <div className="mx-auto items-center bg-white flex flex-row rounded-xl border-2 border-black">
              <h1 className=" px-10 py-5">Added to Cart</h1>
              <button
                className="py-2 px-3 h-10 bg-slate-300 mr-5 rounded-md"
                // onClick={() => setAddCart(false)}
                onClick={handleClick}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-amber-800 z-20">
        <div className="sticky top-0 left-0 flex items-center h-20 w-full justify-between pl-6 pr-8 text-white  transition-all  ">
          <div className="float-left flex flex-row items-center gap-4 text-2xl font-bold">
            <img src={logo} alt="/" className="w-18 h-14" />
            <h1 className="font-poppins">ABC Bakery</h1>
          </div>
          {/* Desktop Button */}
          <div className="hidden sm:block">
            <ul className="text-white text-lg float-right flex flex-row gap-6">
              <li>
                <div
                  className="cursor-pointer hover:text-gray-300 "
                  onClick={() => navigate("/home")}
                >
                  Home
                </div>
              </li>
              <li>
                <div
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => navigate("/product")}
                >
                  Products
                </div>
              </li>
              <li>
                <div
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => navigate("/services")}
                >
                  Our Services
                </div>
              </li>
              <li>
                <div
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </div>
              </li>
              <li>
                <div className="relative inline-flex">
                  <button
                    onClick={() => navigate("/cart")}
                    className="flex items-center rounded-md py-1 px-1 border border-transparent text-center text-2xl text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    {<BsCart3 />}
                  </button>
                  <span className="absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']">
                    {count}
                  </span>
                  {/* <div className="absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']">
                    {count}
                  </div>*/}
                </div>
              </li>
            </ul>
          </div>
          <div className="relative sm:hidden block">
            <button
              onClick={() => setMobile(!mobile)}
              className="flex items-center rounded-md py-1 px-1 border border-transparent text-center text-3xl text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              {mobile ? <GiHamburgerMenu /> : <IoMdClose />}
            </button>
          </div>
        </div>
      </nav>

      {/* //Mobile button */}

      <div className="sm:hidden block ">
        {/* <div
        className={`w-full flex justify-center absolute z-10  ${
          cartAlert ? "top-20" : "top-0"
        } duration-300`}
      ></div> */}

        <ul
          className={`text-white text-lg float-right flex flex-col gap-y-2 p-3 bg-amber-600 mr-0 right-0 absolute z-10 ${
            mobile ? "top-[-130px]" : "top-20"
          } duration-300`}
        >
          <li>
            <div
              className="cursor-pointer hover:text-gray-300 "
              onClick={() => navigate("/home")}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer hover:text-gray-300"
              onClick={() => navigate("/product")}
            >
              Products
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer hover:text-gray-300"
              onClick={() => navigate("/services")}
            >
              Our Services
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer hover:text-gray-300"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </div>
          </li>
          <li>
            <div className="relative inline-flex">
              <button
                onClick={() => navigate("/cart")}
                className="flex items-center rounded-md py-1 px-1 border border-transparent text-center text-2xl text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                {<BsCart3 />}
              </button>
              <span className="absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']">
                {count}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
