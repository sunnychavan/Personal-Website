import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5> Technologies I Know </h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3> Frontend Development </h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> HTML </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> CSS </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> JavaScript </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> React </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> Tailwind </h4>
                <small className="text-light"> Beginner </small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3> Backend Development </h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> Python </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Java </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> C </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> GraphQL </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> OCaml </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4> Rust </h4>
                <small className="text-light"> Beginner </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
