import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectAllCarts,
  productIncrement,
  productDecrement,
} from "../features/newcartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const newcarts = useSelector(selectAllCarts);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [newName, setNewNAme] = useState("");

  useEffect(() => {
    let newTotal = 0;
    newcarts.forEach((icart) => {
      newTotal = newTotal + icart.amount;
      setTotal(newTotal);
    });
  }, [newcarts]);

  return (
    <div className="w-full">
      <div className="flex justify-center text-2xl font-semibold">
        Cart Items
      </div>
      <hr className="border mb-2" />
      <div>
        {/* {newcarts.id ? (
          <p className="flex justify-center text-2xl"> No Cart Added</p>
        ) : (
          ""
        )} */}
        {newcarts.map((newcart, id) => (
          <div key={id} className="flex flex-row ml-5 w-full">
            <p className=" flex w-2/5">{newcart.name} </p>
            <div className="flex flex-row w-1/5 mx-auto">
              <button
                onClick={() =>
                  dispatch(
                    productDecrement({
                      cartId: newcart.id,
                      quantity: newcart.qty,
                    })
                  )
                }
                className="px-2 bg-gray-100 text-2xl border cursor-pointer"
              >
                -
              </button>
              <p className="flex p-1">{newcart.qty} </p>
              <button
                onClick={() =>
                  dispatch(
                    productIncrement({
                      cartId: newcart.id,
                      quantity: newcart.qty,
                    })
                  )
                }
                className="px-2 bg-gray-100 text-2xl border cursor-pointer"
              >
                +
              </button>
            </div>
            <p className="flex w-1/5 ">{`₹ ${newcart.amount} `}</p>
          </div>
        ))}
      </div>
      <hr className="border my-2" />
      <div className="flex justify-center flex-row">
        <p className="text-2xl">Total : ₹ </p>
        <p className="text-2xl pl-2">{total}</p>
      </div>
      <div className="w-full flex justify-center mt-2">
        {total > 0 ? (
          <button
            onClick={() => navigate("/order")}
            className="bg-amber-800 text-white px-3 py-1 rounded mx-auto"
          >
            Order
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
