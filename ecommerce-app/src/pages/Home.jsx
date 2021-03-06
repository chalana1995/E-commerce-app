import React from "react";
import Announcement from "../components/Announcement";
import Catergories from "../components/Catergories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Catergories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
