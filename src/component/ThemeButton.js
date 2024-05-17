import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

function ThemeButton({ isLightMode, toggleTheme }) {
  return (
    <div className="theme-btn" onClick={toggleTheme}>
      <FontAwesomeIcon icon={faCircleHalfStroke} />
    </div>
  );
}

export default ThemeButton;
