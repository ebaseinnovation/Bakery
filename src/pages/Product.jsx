import React, { useState } from "react";
import ProductsData from "../components/Datas.json";
import { useDispatch } from "react-redux";
import { increment, alertOn } from "../features/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const dataSamples = ProductsData.products;
  const [items, setItems] = useState(dataSamples);

  const filterItems = (catItem) => {
    const updateItem = dataSamples.filter((curItem) => {
      return curItem.category === catItem;
    });
    setItems(updateItem);
  };

  const handleClick = () => {
    dispatch(alertOn());
  };

  return (
    <div>
      {/* <div className=" grid grid-cols-3 sm:grid-cols-6 gap-4 mt-2   h-full bg-gray-100 py-3 px-3 mx-auto rounded-2xl w-full "> */}

      <div className="flex flex-row sm:justify-center gap-5 mt-2  px-3 overflow-x-auto  ">
        <button
          onClick={() => setItems(dataSamples)}
          className="bg-amber-200 text-sm px-5 py-2 rounded-2xl text-amber-900 font-semibold font-poppins cursor-pointer focus:border-1 "
        >
          All
        </button>
        <button
          onClick={() => filterItems("Biscuits")}
          className="bg-amber-200 text-sm px-5 py-2 rounded-2xl text-amber-900 font-semibold font-poppins cursor-pointer focus:border-1 "
        >
          Biscuits
        </button>

        <button
          onClick={() => filterItems("puffs")}
          className="bg-amber-200 text-sm px-5 py-2 rounded-2xl text-amber-900 font-semibold font-poppins  cursor-pointer focus:border-1"
        >
          puffs
        </button>

        <button
          onClick={() => filterItems("Cakes")}
          className="bg-amber-200 text-sm px-5 py-2 rounded-2xl text-amber-900 font-semibold font-poppins cursor-pointer focus:border-1"
        >
          Cakes
        </button>
        <button
          onClick={() => filterItems("Bread")}
          className="bg-amber-200 text-sm px-5 py-2 rounded-2xl text-amber-900 font-semibold font-poppins cursor-pointer focus:border-1"
        >
          Breads
        </button>
        <button className="bg-amber-200 text-sm px-5 py-2 rounded-2xl text-amber-900 font-semibold font-poppins cursor-pointer focus:border-1">
          Rolls
        </button>
        {/* <button className="bg-amber-200 text-sm px-3 py-2 rounded-2xl text-amber-900 font-semibold font-poppins cursor-pointer focus:border-1">
          Regional and fusion
        </button> */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2  mx-5 pl-2">
        {items.map((item, id) => (
          <div
            className="w-full px-2 bg-gray-100 border h-full py-2 flex flex-col  "
            key={id}
          >
            <img
              className="w-64 sm:h-64 h-40 mx-auto rounded-2xl"
              src={item.image}
              alt="/"
            />
            <p className="sm:text-2xl mx-auto ">{item.name}</p>
            <div className="flex flex-row justify-around items-center">
              <p className="sm:text-2xl font-semibold ">{`₹${item.Price}`}</p>
              <button
                onClick={handleClick}
                className="px-1 py-1 bg-amber-800 hover:bg-amber-500 focus:bg-amber-500 rounded cursor-pointer text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
