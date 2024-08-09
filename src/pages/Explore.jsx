import React, { useEffect, useState } from "react";
import { fetchBreeds, fetchImagesByBreed } from "./FetchingData";
import { Link } from "react-router-dom";
import "../pages/Explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function Explore() {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    async function loadData() {
      const breedData = await fetchBreeds();
      setBreeds(breedData);

      const imagePromises = breedData.map(async (breed) => {
        const imageData = await fetchImagesByBreed(breed.id);
        return { breed, image: imageData[0] };
      });

      const imageResults = await Promise.all(imagePromises);
      const imageMap = imageResults.reduce((acc, { breed, image }) => {
        acc[breed.id] = image;
        return acc;
      }, {});

      setImages(imageMap);
    }

    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Dog Breeds with Images</h1>
      <div className="dogList">
        {breeds.map((breed) => (
          <div key={breed.id} className="dogItem">
            <Link to="/MoreInfo">
              <h2>{breed.name}</h2>
              <p>{breed.temperament}</p>
              {images[breed.id] && (
                <img
                  src={images[breed.id].url}
                  alt={breed.name}
                  className="dogImage"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="1x" style={{ color: "black" }} />{" "}
          2024 Dogs 101. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Explore;
