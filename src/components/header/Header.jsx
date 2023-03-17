import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../Assets/BlackStoneHeadShotBackGroundRemoved.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className=".container header__container">
        <h5>Hello! I'm </h5>
        <h1> Sunny Chavan </h1>
        <h5 className="text-light"> Software Engineer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
