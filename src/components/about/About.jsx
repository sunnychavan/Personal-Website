import React from "react";
import "./about.css";
import about_me_headshot from "../../Assets/About_me_headshot.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {" "}
      <h5> Get To Know </h5>
      <h2> About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about_me_headshot} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience </h5>
              <small> 3+ years working </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> TEST </h5>
              <small> TEST </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects </h5>
              <small> 5+ </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex
            iusto nostrum dolorem est nulla cupiditate, rem nemo, quas debitis
            accusamus obcaecati delectus at esse repellendus? Eum cum est
            reiciendis.
          </p>

          <a href="#contacts" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
