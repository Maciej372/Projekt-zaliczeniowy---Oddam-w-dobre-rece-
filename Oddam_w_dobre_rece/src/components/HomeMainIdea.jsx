import React from "react";

const HomeMainIdea = () => {
  return (
    <div className="home-idea-boxes">
      <div className="box">
        <div className="home-idea-icone">10</div>
        <p className="home-idea-actions">Wybierz rzeczy</p>
        <p className="home-idea-text">ubrania, zabawki, sprzęt i inne</p>
      </div>
      <div className="box">
        <div className="home-idea-icone">5</div>
        <p className="home-idea-actions">Spakuj je</p>
        <p className="home-idea-text">skorzystaj z worków na śmieci</p>
      </div>
      <div className="box">
        <div className="home-idea-icone">7</div>
        <p className="home-idea-actions">Zdecyduj komu chcesz pomóc</p>
        <p className="home-idea-text">wybierz zaufane miejsce</p>
      </div>
      <div className="box">
        <div className="home-idea-icone">7</div>
        <p className="home-idea-actions">Zamów kuriera</p>
        <p className="home-idea-text">kurier przyjedzie w dogodnym terminie</p>
      </div>
    </div>
  );
};

export default HomeMainIdea;
