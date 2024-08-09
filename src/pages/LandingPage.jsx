import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "../pages/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/Explore");

  return (
    <div className="Container">
      <h1>Welcome to Dogs 101</h1>
      <div className="body">
        {/* <p>
            Discover Every Dog Breed and Learn About Their Unique
            Characteristics
          </p> */}
        <img src="https://th.bing.com/th/id/OIP.MtHeHyNlk8Rc-VOtLwD_CQHaLG?rs=1&pid=ImgDetMain" />
        <div className="content">
          <h2>Why Learn About Dog Breeds?</h2>
          <h3>Find Your Perfect Match</h3>
          <p>
            Explore different dog breeds to find the one that suits your
            lifestyle.
          </p>
          <h3>Understand Their Needs</h3>
          <p>
            Learn about the specific care requirements and temperaments of each
            breed.
          </p>
          <h3>Become a Dog Expert</h3>
          <p>
            Expand your knowledge about dogs and impress your friends with fun
            facts.
          </p>
          <button className="navigateButton" onClick={handleClick}>
            Start Learning!
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="xs" style={{ color: "black" }} />{" "}
          2024 Dogs 101. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
