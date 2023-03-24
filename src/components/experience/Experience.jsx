import React from "react";
import BlackstoneLogo from "../../Assets/BlackstoneLogo.png";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5> Places I Have Worked </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__example">
          <div className="experience__example__header">
            <h3> Blackstone Inc. </h3>
            <h5> Software Engineer Intern</h5>
            <h5> June-August 2022 </h5>
          </div>
          <div className="experience__example__content">
            <div className="experience__example__content__overview">
              <h4>Overview</h4>
              <h5 className="experience__example__content__overview_h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae doloribus aliquam? Iusto ratione distinctio labore
                praesentium cupiditate nisi voluptates aut repellat beatae.
                Atque mollitia esse harum labore, eos deleniti.
              </h5>
            </div>
            <div className="experience__example__content__significance">
              <h4 className="experience__example__content__overview_h4">
                Significance
              </h4>
              <h5 className="experience__example__content__overview_h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente laborum libero, optio et ipsam quas animi modi eum,
                consequatur eligendi harum amet repudiandae impedit! Atque quos
                repellat cumque ducimus earum?
              </h5>
            </div>
          </div>
        </div>
        <div className="experience__example">
          <div className="experience__example__header">
            {" "}
            <h3> Balyasny Asset Management (BAM) </h3>
            <h5> Python Developer Intern</h5>
            <h5> June-August 2022 </h5>
          </div>

          <div className="experience__example__content">
            <div className="experience__example__content__overview">
              <h4>Overview</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae doloribus aliquam? Iusto ratione distinctio labore
                praesentium cupiditate nisi voluptates aut repellat beatae.
                Atque mollitia esse harum labore, eos deleniti.
              </h5>
            </div>
            <div className="experience__example__content__significance">
              <h4>Significance</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente laborum libero, optio et ipsam quas animi modi eum,
                consequatur eligendi harum amet repudiandae impedit! Atque quos
                repellat cumque ducimus earum?
              </h5>
            </div>
          </div>
        </div>
        <div className="experience__example">
          <div className="experience__example__header">
            <h3> Regeneron Pharmaceuticals </h3>
            <h5> Applications Developer Intern</h5>
            <h5> June-August 2022 </h5>
          </div>
          <div className="experience__example__content">
            <div className="experience__example__content__overview">
              <h4>Overview</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae doloribus aliquam? Iusto ratione distinctio labore
                praesentium cupiditate nisi voluptates aut repellat beatae.
                Atque mollitia esse harum labore, eos deleniti.
              </h5>
            </div>
            <div className="experience__example__content__significance">
              <h4>Significance</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente laborum libero, optio et ipsam quas animi modi eum,
                consequatur eligendi harum amet repudiandae impedit! Atque quos
                repellat cumque ducimus earum?
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
