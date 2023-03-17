import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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
      <a href="mailto:sc2448@cornell.edu" target="_blank">
        {" "}
        <AiOutlineMail size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
