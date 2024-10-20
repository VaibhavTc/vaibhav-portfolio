import React, { useState } from "react";
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
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // State to track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_txr476r";
    const templateId = "template_0zz5veh";
    const userId = "-HRL03MKR-SeeO4ZJ";
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    setStatus("pending");

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setStatus("error");
      });
  };

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
              <a href="mailto:vaibhavchakole79@gmail.com">
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
                info="Indian Institute of Technology Kharagpur"
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-control i-c-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="input-control">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className="input-control">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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
            {status === "success" && (
              <p className="success-message">Email sent successfully!</p>
            )}
            {status === "error" && (
              <p className="error-message">
                Failed to send email. Please try again later.
              </p>
            )}
            {status === "pending" && (
              <p className="pending-message">Sending email...</p>
            )}
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
      <div>
        <p>: {info}</p>
      </div>
    </div>
  );
};

export default Contact;
