import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "../pages/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/SignUp");

  return (
    <>
      <div className="container">
        <div className="header">
          <FontAwesomeIcon icon={faPaw} size="3x" style={{ color: "black" }} />
          <h1>Pet Finder</h1>
        </div>
        <div className="content">
          <div className="image">
            <img src="https://th.bing.com/th?id=OIP.S4ioYMEFICkTukKEaRMf4AHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          </div>
          <div className="text-and-paragraph">
            <p>
              Adopting a pet may not change the world, but for that pet, the
              world changes forever.
            </p>
            <button onClick={handleClick}>View Dog Pictures!</button>
          </div>
        </div>
        <div className="footer">
          <p>Find & Adopt</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
