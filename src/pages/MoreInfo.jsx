import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBreeds, fetchImagesByBreed } from "../pages/FetchingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import CircularIndeterminate from "../components/CircularIndeterminate";
import "./MoreInfo.css";

const MoreInfo = () => {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBreedData() {
      setLoading(true);
      setError(null);

      try {
        const breedData = await fetchBreeds();
        const selectedBreed = breedData.find((b) => b.id === parseInt(breedId));

        if (selectedBreed) {
          setBreed(selectedBreed);
          const breedImages = await fetchImagesByBreed(breedId);
          setImages(breedImages);
        } else {
          setError("Breed not found");
        }
      } catch (err) {
        setError("Failed to load data");
      }

      setLoading(false);
    }

    loadBreedData();
  }, [breedId]);
  if (loading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="moreInfoContainer">
      <div className="header">{breed && <h1>{breed.name}</h1>}</div>
      <br />
      {breed && (
        <div className="moreInfoContent">
          <div className="bigImage">
            {images[0] ? (
              <img src={images[0].url} alt="Breed" />
            ) : (
              <CircularIndeterminate />
            )}
          </div>

          <div className="list">
            <ul>
              <li>Breed: {breed.name}</li>
              <li>
                Height: imperial "{breed.height.imperial}" and metric "
                {breed.height.metric}"
              </li>
              <li>
                Description: {breed.description || "Description unavailable"}
              </li>
              <li>Bred For: {breed.bred_for || "Unknown"}</li>
              <li>Breed Group: {breed.breed_group || "Unknown"}</li>
              <li>Life Span: {breed.life_span || "Unknown"}</li>
              <li>Temperament: {breed.temperament || "Unknown"}</li>
              <li>History: {breed.history || "Unknown"}</li>
            </ul>
          </div>
          <br />
          <br />
        </div>
      )}
      <div className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="xs" style={{ color: "black" }} />
          2024 Dogs 101. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MoreInfo;
