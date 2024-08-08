// src/Explore.js
import React, { useEffect, useState } from "react";
import { fetchBreeds, fetchImagesByBreed } from "./FetchingData";
import "../pages/Explore.css";

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
            <h2>{breed.name}</h2>
            <p>{breed.temperament}</p>
            {images[breed.id] && (
              <img
                src={images[breed.id].url}
                alt={breed.name}
                className="dogImage"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
