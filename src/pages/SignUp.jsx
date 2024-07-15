import React from "react";
import { Link } from "react-router-dom";
import "../pages/SignUp.css";

function SignUp() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="image.jpg" />
          <h1>Pet Finder</h1>
        </div>
        <div className="content">
          <img src="bigpicture.jpg" />
          <div className="text-content">
            <h1>A wagging tail is the best welcome Home!</h1>
            <p>Sign up with email address</p>
            <input type="text" placeholder="Yourname@gmail.com" />
            <Link to="/Explore">Sign up!</Link>
            <p>or continue with</p>
            <button>google</button>
            <button>facebook</button>
          </div>
        </div>
        <footer>
          <p>Find & adopt</p>
        </footer>
      </div>
    </>
  );
}
export default SignUp;
