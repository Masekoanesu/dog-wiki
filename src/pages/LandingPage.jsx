import React from "react";
import { Link } from "react-router-dom";
import "../pages/LandingPage.css";
import "../fetching-data.jsx";

function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="https://th.bing.com/th?id=OIP.lON_KKE1mwC7yYXeSjwvtAHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
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
            <Link to="/SignUp">Adopt today!</Link>
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
