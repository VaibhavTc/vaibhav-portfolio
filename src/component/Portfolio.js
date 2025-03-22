import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrands } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

import port2 from "../assets/port2.jpg";
import resume from "../assets/build-a-resume.svg";
import eccom from "../assets/ecommerce-website-builder-india.png";
import connect from "../assets/connect.jpg";
import cassette from "../assets/cassette.jpg";
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
            <img src={resume} alt="" />
          </div>
          <div className="hover-items">
            <h3>AI Resume Builder</h3>
            <div className="icons">
              <a
                href="https://github.com/VaibhavTc/buildofy-resume-client"
                className="icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                href="https://buildofy-resume-client.vercel.app/"
                className="icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={eccom} alt="" />
          </div>
          <div className="hover-items">
            <h3>E-commerce Website</h3>
            <div className="icons">
              <a
                href="https://github.com/VaibhavTc/MERN-Eccommerce"
                className="icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                href="https://mern-eccommerce.vercel.app/"
                className="icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={connect} alt="" />
          </div>
          <div className="hover-items">
            <h3>Connectverse</h3>
            <div className="icons">
              <a
                href="https://github.com/VaibhavTc/connectverse"
                target="_blank"
                className="icon"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                href="https://connectverse-bitt.onrender.com/"
                className="icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={cassette} alt="" />
          </div>
          <div className="hover-items">
            <h3>Spotify Playlist Sorter</h3>
            <div className="icons">
              <a
                href="https://github.com/VaibhavTc/Spotify-sort"
                className="icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                href="https://spotify-sort.vercel.app/"
                target="_blank"
                className="icon"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src={port2} alt="" />
          </div>
          <div className="hover-items">
            <h3>Photo Gallary</h3>
            <div className="icons">
              <a
                href="https://github.com/VaibhavTc/Photo-gallary"
                className="icon"
                target="_blank"
              >
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
