import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Explore.css";

const apiKey =
  "live_q6ZhEhSkaPuepErdMOcF6I27l23u9lFrmN9d5MX4cbaMzPhwCgReyZ8XnGQBdAwp";
const baseUrl = "https://api.thedogapi.com/v1/images/search?limit=10";

function fetchPets() {
  return fetch(baseUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    return response.json();
  });
}

function Explore() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchPets()
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  function PetComponent() {
    return (
      <div className="pet-container">
        {images.map((image, i) => (
          <img key={i} src={image.url} alt={`Pet ${i}`} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="Header">
          <img
            src="https://th.bing.com/th?id=OIP.lON_KKE1mwC7yYXeSjwvtAHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Header Image"
          />
          <h1>Pet Finder</h1>
        </div>
        <div className="text-and-button">
          <p>
            Furever home, furever friend. Level up your happiness: Adopt a pet
            today!
          </p>
        </div>
        <div className="pet-list">
          <PetComponent />
          <Link to="/MoreInfo">click a card to learn more about pet!</Link>
        </div>
        <div className="footer">
          <p>Find & Adopt</p>
        </div>
      </div>
    </>
  );
}

export default Explore;
