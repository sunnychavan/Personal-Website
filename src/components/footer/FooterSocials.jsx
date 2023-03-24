import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <a
        href="https://www.linkedin.com/in/sunny-chavan-120482177/"
        target="_blank"
      >
        {" "}
        <BsLinkedin size={20} />{" "}
      </a>
      <a href="https://github.com/sunnychavan" target="_blank">
        {" "}
        <BsGithub size={20} />
      </a>
      <a href="mailto:sc2448@cornell.edu" target="_blank">
        {" "}
        <AiOutlineMail size={20} />
      </a>
    </div>
  );
};

export default FooterSocials;
