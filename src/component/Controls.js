import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faHouse,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    if (isLightMode) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className="controls">
      <div className="control" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </div>
      <NavLinkWithIcon to="/" icon={faHouse} label="Home" />
      <NavLinkWithIcon to="/about" icon={faUser} label="About" />
      <NavLinkWithIcon to="/portfolio" icon={faBriefcase} label="Portfolio" />
      <NavLinkWithIcon to="/contact" icon={faEnvelope} label="Contact" />
    </div>
  );
}

function NavLinkWithIcon({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`control control-${label.toLowerCase()} ${
        isActive ? "active-btn" : ""
      }`}
      data-id={label.toLowerCase()}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}

export default Controls;
