import React from "react";
import decoration from "../assets/Decoration.svg";
import MainNavigation from "./MainNavigation";
import LoginNavigation from "./LoginForm/LoginNavigation";

const HomeHeader = () => {
  return (
    <section className="header" id="start">
      <div className="heroImg"></div>
      <div className="headerContent">
        <LoginNavigation />

        <MainNavigation />
        <h1>
          Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img src={decoration} alt="decoration" />
        <div className="heroBtns">
          <button className="headerBtn" href="/login">
            Oddaj rzeczy
          </button>
          <button className="headerBtn" href="/">
            Zorganizuj zbiórkę
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
