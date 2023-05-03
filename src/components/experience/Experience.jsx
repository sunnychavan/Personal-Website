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
            <h3> Blackstone Inc. (Tech and Innovations) </h3>
            <h5> Software Engineer Intern</h5>
            <h5> June-August 2022 </h5>
          </div>
          <div className="experience__example__content">
            <div className="experience__example__content__overview">
              <h4>Overview</h4>
              <h5>
                I{" "}
                <span class="underline">
                  {" "}
                  created a common library to standardize and simplify
                </span>{" "}
                the implementation of the{" "}
                <span class="underline">
                  {" "}
                  publish/subscribe messaging{" "}
                </span>{" "}
                protocol across the company. This library{" "}
                <span class="underline">
                  {" "}
                  enables seamless integration with various event streaming
                  platforms
                </span>{" "}
                such as Kafka, GraphQL Server, and Amazon SNS/SQS within the
                same service. I utilized Docker, Ansible, and Jenkins to deploy
                the library to the company's AWS "dev" server.
              </h5>
            </div>
          </div>
        </div>
        <div className="experience__example">
          <div className="experience__example__header">
            {" "}
            <h3> Balyasny Asset Management L.P. </h3>
            <h5> Python Developer Intern</h5>
            <h5> January-May 2022 </h5>
          </div>

          <div className="experience__example__content">
            <div className="experience__example__content__overview">
              <h4>Overview</h4>
              <h5>
                During my co-op, I completed{" "}
                <span class="underline"> three Python projects:</span> The first
                involved{" "}
                <span class="underline">
                  {" "}
                  creating a script that fetched energy price data
                </span>{" "}
                from a government website and{" "}
                <span class="underline">
                  {" "}
                  visualized price changes across different timescales.
                </span>{" "}
                For the second project, I{" "}
                <span class="underline">
                  {" "}
                  developed an "Event-Driven Back-Tester"
                </span>{" "}
                to assess the accuracy and persistence of proprietary investment
                models across various sector portfolios. Thirdly, I{" "}
                <span class="underline">
                  {" "}
                  optimized BAM's model parameter testing
                </span>{" "}
                process by introducing multi-processing.
              </h5>
            </div>
          </div>
        </div>
        <div className="experience__example">
          <div className="experience__example__header">
            <h3> Regeneron Pharmaceuticals Inc. </h3>
            <h5> Applications Developer Intern</h5>
            <h5> June-August 2021 </h5>
          </div>
          <div className="experience__example__content">
            <div className="experience__example__content__overview">
              <h4>Overview</h4>
              <h5>
                I{" "}
                <span class="underline">
                  developed an executive-facing automated dashboard
                </span>{" "}
                that centralized, cleaned, and analyzed UI Path Bot data from
                various sources and{" "}
                <span class="underline">
                  {" "}
                  displayed visualizations on metrics
                </span>{" "}
                such as earnings, success rates, and hours saved -- tailored to
                each department.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
