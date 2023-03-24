import React from "react";
import "./footer.css";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {" "}
        Sunny Chavan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#skills"> Skills </a>
        </li>
        <li>
          <a href="#experience"> Experience </a>
        </li>
        <li>
          <a href="#portfolio"> Portfolio </a>
        </li>
        <li>
          <a href="#contacts"> Contacts </a>
        </li>
      </ul>
      <FooterSocials />
    </footer>
  );
};

export default Footer;
