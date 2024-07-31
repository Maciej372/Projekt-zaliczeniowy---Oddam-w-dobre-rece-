import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDecoration from "./HomeDecoration";
import HomeMainIdea from "./HomeMainIdea";
import HomeButton from "./HomeButton";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizations from "../components/HomeOrganizations/HomeOrganizations";
import HomeContact from "./HomeContact";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeDecoration />
      <HomeMainIdea />
      <HomeButton />
      <HomeAboutUs />
      <HomeOrganizations />
      <HomeContact />
    </div>
  );
};

export default Home;
