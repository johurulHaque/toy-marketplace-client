import React from "react";
import Banner from "../Banner/Banner";
import TabItem from "./TapItem";
import useTitle from "../../Hooks/useTitle";
import Gallery from "./Gallery";
import Marquee from "react-fast-marquee";
import ClientTalk from "./ClientTalk";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center mt-6 font-bold text-2xl link-a">
        Shop by category
      </h2>
      <TabItem></TabItem>
      <h2 className="text-center mt-6 font-bold text-2xl link-a">
        Toy's Gallery
      </h2>
      <Gallery></Gallery>

     <ClientTalk></ClientTalk>

      <Marquee style={{ marginBottom: "25px" }}>
        <img src="./toy/logo1.jpg" className="w-32 h-24" />
        <img src="./toy/logo2.jpg" className="w-32 h-24" />
        <img src="./toy/logo3.jpg" className="w-32 h-24" />
        <img src="./toy/logo4.png" className="w-32 h-24" />
        <img src="./toy/logo5.png" className="w-32 h-24" />
        <img src="./toy/logo6.png" className="w-32 h-24" />
        <img src="./toy/logo7.jpg" className="w-32 h-24" />
        <img src="./toy/logo8.png" className="w-32 h-24" />
        <img src="./toy/logo9.png" className="w-32 h-24" />
      </Marquee>
    </div>
  );
};

export default Home;
