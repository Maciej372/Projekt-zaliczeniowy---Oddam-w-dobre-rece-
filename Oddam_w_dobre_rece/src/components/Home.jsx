// components/Home/Home.js
import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDecoration from "./HomeDecoration";
import HomeMainIdea from "./HomeMainIdea";
import HomeButton from "./HomeButton";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeDecoration />
      <HomeMainIdea />
      <HomeButton />
    </div>
  );
};

export default Home;
