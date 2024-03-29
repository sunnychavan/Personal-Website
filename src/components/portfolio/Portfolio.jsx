import React from "react";
import "./portfolio.css";
import Monopoly from "../../Assets/Monopoly.png";
import AirportTravel from "../../Assets/CS3300AirportTravel.png";
import Covid19Report from "../../Assets/Covid19StockMarket.png";
import EWBwebsite from "../../Assets/EWBWebsite.png";
import EWBgui from "../../Assets/EWBGUI.png";
import MilestoneBoard from "../../Assets/MilestoneCommandLineBoard.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        <div className="portfolio__column">
          <div class="portfolio__title"> Personal Projects </div>
          <div className="portfolio__category">
            <article className="portfolio__item" id="c1_header">
              <div className="portfolio__item-image">
                <img
                  src={Monopoly}
                  alt=""
                  className="portfolio__item-image-monopoly"
                />
              </div>
              <h3> Monopoly </h3>
              <div className="portfolio__item-cta">
                {" "}
                <a
                  href="https://github.com/sunnychavan/Monopoly"
                  className="btn"
                  target="_blank"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
            </article>
            <article className="portfolio__item" id="c1_header">
              <div className="portfolio__item-image">
                <img
                  src={MilestoneBoard}
                  alt=""
                  className="portfolio__item-image-milestone"
                />
              </div>
              <h3> Milestone Board Game AI </h3>
              <div className="portfolio__item-cta">
                {" "}
                <a
                  href="https://github.com/sunnychavan/Milestone"
                  className="btn"
                  target="_blank"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="portfolio__column">
          <div class="portfolio__title"> Data Analysis </div>
          <div className="portfolio__category">
            <article className="portfolio__item" id="c2_header">
              <div className="portfolio__item-image">
                <img
                  src={AirportTravel}
                  alt=""
                  className="portfolio__item-image-airport_travel"
                />
              </div>
              <h3> Airport Travel </h3>
              <div className="portfolio__item-cta">
                {" "}
                <a
                  href="https://github.com/sunnychavan/AirportTravel"
                  className="btn"
                  target="_blank"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={Covid19Report}
                  alt=""
                  className="portfolio__item-image-covid19report"
                />
              </div>
              <h3> Covid-19 Stock Market Data </h3>
              <div className="portfolio__item-cta">
                {" "}
                <a
                  href="https://github.com/sunnychavan/COVID-19-US-Stock-Market"
                  className="btn"
                  target="_blank"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="portfolio__column">
          <div class="portfolio__title">Sustainable Design</div>
          <div className="portfolio__category">
            <article className="portfolio__item" id="c3_header">
              <div className="portfolio__item-image">
                <img
                  src={EWBwebsite}
                  alt=""
                  className="portfolio__item-image-EWBwebsite"
                />
              </div>
              <h3> EWB Website </h3>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com/juhi135/ewb-dig-ag-site"
                  className="btn"
                  target="_blank"
                >
                  Github{" "}
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={EWBgui}
                  alt=""
                  className="portfolio__item-image-EWBwebsite"
                />
              </div>
              <h3> EWB GUI </h3>
              <div className="portfolio__item-cta">
                {" "}
                <a
                  href="https://github.com/sunnychavan/EWB-GUI"
                  className="btn"
                  target="_blank"
                >
                  Github{" "}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
