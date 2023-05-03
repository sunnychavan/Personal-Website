import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../Assets/BlackStoneHeadShotBackGroundRemoved.png";
import Me2 from "../../Assets/Prof_photo_upperHalf_450_300.png";
import MeCircle from "../../Assets/blackstone_headshot_circle.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className=".container header__container">
        {/* <h5>Hello! I'm </h5> */}
        <h1> Sunny Chavan </h1>
        <h5 className="text-light"> Computer Science @ Cornell University</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me2} alt="me" />
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
