import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        {" "}
        <BsLinkedin size={30} />{" "}
      </a>
      <a href="https://github.com" target="_blank">
        {" "}
        <BsGithub size={30} />
      </a>
      <a href="https://instagram.com" target="_blank">
        {" "}
        <BsInstagram size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
