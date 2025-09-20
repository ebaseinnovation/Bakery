import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllCarts } from "../features/newcartSlice";
import emailjs from "@emailjs/browser";
import { SiShopee } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const newcarts = useSelector(selectAllCarts);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [cname, setCname] = useState("");
  const [cmobile, setCmobile] = useState("");
  const [caddress, setCaddress] = useState("");
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   newcarts.forEach((icart) => {
  //     setItems((items) => [
  //       ...items,
  //       {
  //         id: items.length,
  //         item_name: icart.name,
  //         qty: icart.qty,
  //         amount: icart.amount,
  //       },
  //     ]);
  //   });
  // }, []);

  const handleEmail = () => {
    // newcarts.forEach((icart) => {
    //   setItems([
    //     ...items,
    //     {
    //       id: items.length,
    //       item_name: icart.name,
    //       qty: icart.qty,
    //       amount: icart.amount,
    //     },
    //   ]);
    // });
    var templateParams = {
      name: cname,
      mobile: cmobile,
      address: caddress,
      message: JSON.stringify(newcarts),
    };
    console.log(newcarts);
    emailjs
      .send("service_a3rwmfr", "template_yi1b9df", templateParams, {
        publicKey: "iG0-wAsJTQMmvJH0h",

        //publickey:"iG0-wAsJTQMmvJH0h"
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    setModal(true);
  };
  return (
    <div className="w-full flex justify-center flex-col ">
      {modal ? (
        <div className="flex flex-col mx-auto items-center w-4/5  sm:w-2/5 h-3/5 bg-gray-200 mt-20 border rounded-lg">
          <SiShopee className="text-6xl text-amber-800 mt-3" />
          <p className="mx-auto mt-3 text-lg">
            {" "}
            Thanking You for Shopping with Us
          </p>
          <p className="mx-auto mt-2 text-lg mb-2"> We will contact you soon</p>
          <button
            onClick={() => navigate("/home")}
            className=" cursor-pointer bg-amber-800 text-white px-2 py-1 mx-auto rounded mb-3"
          >
            Home
          </button>
        </div>
      ) : (
        <div className="flex justify-center flex-col">
          <p className="mx-auto   flex justify-center"> Order</p>
          <div className="bg-gray-100 sm:px-10 py-10  mx-auto flex flex-col mt-3 mb-1">
            <input
              type="text"
              placeholder="Enter Full Name"
              value={cname}
              onChange={(e) => setCname(e.target.value)}
              className="p-[10px] mt-[10px] border-solid bg-gray-50 font-semibold w-[380px] rounded-lg border-2 border-gray-400"
            />
            <input
              type="text"
              placeholder="Mobile No."
              value={cmobile}
              onChange={(e) => setCmobile(e.target.value)}
              className="p-[10px] mt-[10px] border-solid bg-gray-50 font-semibold w-[380px] rounded-lg border-2 border-gray-400"
            />
            <textarea
              name="message"
              id=""
              cols={50}
              rows={5}
              className="p-[10px] mt-[10px] border-solid font-semibold w-[380px] border-2 border-gray-400 bg-gray-50 rounded-lg"
              value={caddress}
              placeholder="Address"
              onChange={(e) => setCaddress(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleEmail}
            className="bg-amber-800 text-white px-2 py-1 mx-auto rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
