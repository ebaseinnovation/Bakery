import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex overflow-hidden h-screen w-screen top-0">
        <div className="flex flex-col w-full ">
          <Header />
          <div className=" h-5/6 overflow-y-auto overflow-x-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
