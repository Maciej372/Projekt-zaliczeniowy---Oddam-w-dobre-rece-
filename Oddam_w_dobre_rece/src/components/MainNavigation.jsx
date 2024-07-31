import React from "react";
import { scroller } from "react-scroll";

const navLinks = [
  { name: "Start", to: "start" },
  { name: "O co chodzi?", to: "idea" },
  { name: "O nas", to: "about" },
  { name: "Fundacja i organizacje", to: "organizations" },
  { name: "Kontakt", to: "contact" },
];

const MainNavigation = () => {
  const handleScroll = (to) => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  return (
    <nav>
      <ul className="navigationList">
        {navLinks.map((link) => (
          <li key={link.name}>
            <button className="navButton" onClick={() => handleScroll(link.to)}>
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
