// import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../App.css";
import Controls from "./Controls";
import ThemeButton from "./ThemeButton";
import Vaibhav from "../assets/Vaibhav.JPG";
function Header() {
  return (
    <>
      <header className="section sec1 header active" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img alt="" src={Vaibhav} />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span>Vaibhav Tulshidas Chakole.</span> A Web Developer.
            </h1>
            <p>
              I'm a Web Developer, I love to create beautiful and functional
              websites.
            </p>
            <div className="btn-con">
              <a
                href="https://drive.google.com/file/d/1dLYCrsz3nIOn4m85g7l8Y0LFyljhC1yK/view?usp=sharing"
                className="main-btn"
                target="_blank"
              >
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
