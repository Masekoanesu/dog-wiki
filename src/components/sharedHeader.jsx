import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./sharedHeader.css";

function Header() {
  return (
    <header className="header">
      <Link to="../pages/LandingPage.jsx" className="headerLink">
        <FontAwesomeIcon icon={faPaw} size="2x" style={{ color: "#735751" }} />
        <h1 className="headerText">Woof Wiki</h1>
      </Link>
    </header>
  );
}

export default Header;
