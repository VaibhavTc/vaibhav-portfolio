import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrands } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCode, faDuoTone } from "@fortawesome/free-solid-svg-icons";

import port1 from "../assets/port1.jpg";
function PortfolioSection() {
  return (
    <section className="section sec3 portfolio active" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="image">
            <img src={port1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={port1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={port1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={port1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
