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
              <h5 className="experience__example__content__overview_h5">
                I streamlined the publish/subscribe messaging protocol
                companywide, by creating a common library that enables
                standardization, easy implementation and extensibility when
                leveraging multiple event streaming platforms (Kafka, GraphQL
                Server, Amazon SNS/SQS) within the same service. I deployed this
                code to a company AWS “dev” server using Docker, Ansible and
                Jenkins.
              </h5>
            </div>
            {/* <div className="experience__example__content__significance">
              <h4 className="experience__example__content__overview_h4">
                Significance
              </h4>
              <h5 className="experience__example__content__overview_h5">
                This common library is now offered as a .NET “NuGet” package
                which can be used by any Blackstone engineer looking for a more
                streamlined approach to pub/sub messaging between microservices.
              </h5>
            </div> */}
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
                I worked on three separate python projects during this co-op.
                The first was a script that fetched energy price data files from
                a government website and visualized the price changes for
                different timescales (years, months, days). The second was an
                “Event-Driven Back-Tester” that quantified the accuracy and
                persistence of various proprietary investment models on
                different types of sector portfolios. The third was an
                optimization of BAM’s model parameter testing by introducing
                multi-processing.
              </h5>
            </div>
            {/* <div className="experience__example__content__significance">
              <h4>Significance</h4>
              <h5>
                Using crontab, I scheduled the energy price script (first
                project) to run automatically, every week, on the specific day
                and time when new energy data becomes available. The script
                sends the outputted visualizations to my mentor via email, who
                required this up to date data for his work. The “Event-Driven
                Back-Tester” (second project) will be extended and potentially
                used company wide. Finally the optimizations made in the third
                project decreased the model parameter testing by 93%.
              </h5>
            </div> */}
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
                I developed an executive-facing automated dashboard that
                centralized, cleaned, and analyzed UI Path Bot data from various
                sources and displayed visualizations on metrics such as
                earnings, success rates, and hours saved -- tailored to each
                department.
              </h5>
            </div>
            {/* <div className="experience__example__content__significance">
              <h4>Significance</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente laborum libero, optio et ipsam quas animi modi eum,
                consequatur eligendi harum amet repudiandae impedit! Atque quos
                repellat cumque ducimus earum?
              </h5>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
