import React from "react";
import HomeSlider from "../components/HomeSlider";
import About from "../assets/gallery/about-us.jpg";
import Aboutus from "./Aboutus";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeSlider />
      <Aboutus />
    </div>
  );
};

export default Home;
