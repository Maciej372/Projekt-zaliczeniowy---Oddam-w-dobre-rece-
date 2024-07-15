// components/Home/Home.js
import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns />
      {/* Tutaj dodaj inne komponenty sekcji Home */}
    </div>
  );
};

export default Home;
