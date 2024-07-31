import React from "react";
import icone1 from "../assets/Icon-1.svg";
import icone2 from "../assets/Icon-2.svg";
import icone3 from "../assets/Icon-3.svg";
import icone4 from "../assets/Icon-4.svg";

const HomeMainIdea = () => {
  return (
    <section className="ideaSection" id="idea">
      <div className="home-idea-boxes">
        <div className="box">
          <img src={icone1} />
          <p className="home-idea-actions">Wybierz rzeczy</p>
          <span className="border"></span>
          <p className="home-idea-text">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="box">
          <img src={icone2} />
          <p className="home-idea-actions">Spakuj je</p>
          <span className="border"></span>
          <p className="home-idea-text">skorzystaj z worków na śmieci</p>
        </div>
        <div className="box">
          <img src={icone3} />
          <p className="home-idea-actions">Zdecyduj komu chcesz pomóc</p>
          <span className="border"></span>
          <p className="home-idea-text">wybierz zaufane miejsce</p>
        </div>
        <div className="box">
          <img src={icone4} />
          <p className="home-idea-actions">Zamów kuriera</p>
          <span className="border"></span>
          <p className="home-idea-text">
            kurier przyjedzie w dogodnym terminie
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeMainIdea;
