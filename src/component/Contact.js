import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faS,
  faMapMarkerAlt,
  faEnvelope,
  faUserGraduate,
  faGlobeAfrica,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <section className="section sec4 contact active" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>
              Want to work together, get in touch or shoot me an email directly
              on{" "}
              <a href="mailto:ritikbehera109@gmail.com">
                vaibhavchakole79@gmail.com
              </a>
            </p>
            <div className="contact-info">
              <ContactItem
                icon={(faS, faMapMarkerAlt)}
                title="Location"
                info="Kharagpur West Bengal, India"
              />
              <ContactItem
                icon={(faS, faEnvelope)}
                title="Email"
                info="vaibhavchakole79@gmail.com"
              />
              <ContactItem
                icon={(faS, faUserGraduate)}
                title="Education"
                info="IIT Kharagpur"
              />
              <ContactItem
                icon={faGlobeAfrica}
                title="Languages"
                info="English, Hindi, Marathi"
              />
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a
                  href="https://www.facebook.com/Vaibhav1710"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/VaibhavTc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.instagram.com/vaibhav.chakole_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-chakole-0309a825a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <form action="" className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="Your Name" />
                <input type="email" required placeholder="Your Email" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="Subject" />
              </div>
              <div className="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="main-btn">
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon">
                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, info }) => {
  return (
    <div className="contact-item">
      <div className="icon">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <span>{title}</span>
      </div>
      <p>: {info}</p>
    </div>
  );
};

export default Contact;
