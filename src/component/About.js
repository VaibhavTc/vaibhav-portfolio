import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUser,
  faBriefcase,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Controls from "./Controls";
import ThemeButton from "./ThemeButton";
function About() {
  return (
    <>
      <section className="section sec2 about active" id="about">
        <div className="main-title">
          <h2>
            About <span>me</span>
          </h2>
        </div>
        <div className="about-container">
          <div className="left-about">
            <h4>Information About me</h4>
            <p>
              I'm Vaibhav, a web developer passionate about crafting
              user-friendly digital experiences. With more than 3 years of
              experience, I specialize in both front-end and back-end
              development, proficient in MERN stack.
              <br />
              <br />I believe in creating solutions that exceed expectations. By
              staying updated with the latest technologies, I ensure my work
              remains innovative and future-proof. Let's collaborate to bring
              your digital vision to life!
            </p>
          </div>
          <div className="right-about">
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">15+</p>
                <p className="small-text">
                  Projects <br />
                  Completed
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">4+</p>
                <p className="small-text">
                  Years of <br />
                  experience
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">1000+</p>
                <p className="small-text">
                  DSA questions <br />
                  Solved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
