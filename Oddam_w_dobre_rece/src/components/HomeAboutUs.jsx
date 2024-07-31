import React from "react";
import decoration from "../assets/Decoration.svg";
import signatureImg from "../assets/Signature.svg";

const HomeAboutUs = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContent">
        <h2 className="aboutContent-title">O nas</h2>
        <img src={decoration} alt="decoration" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signatureImg} className="aboutSignature" alt="people" />
      </div>
      <div className="aboutImg"></div>
    </section>
  );
};

export default HomeAboutUs;
