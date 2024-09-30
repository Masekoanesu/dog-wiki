import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/sharedHeader";
import { fetchBreeds, fetchImagesByBreed } from "../pages/FetchingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPaw,
  faRulerVertical,
  faHeart,
  faDog,
  faFileAlt,
  faSmile,
  faUsers,
  faHistory,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import CircularIndeterminate from "../components/CircularIndeterminate";
import "./MoreInfo.css";

const MoreInfo = () => {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allBreeds, setAllBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadBreedData() {
      setLoading(true);
      setError(null);

      try {
        const breedData = await fetchBreeds();
        const selectedBreed = breedData.find((b) => b.id === parseInt(breedId));
        setAllBreeds(breedData);

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

  const handleNext = () => {
    const currentDogIndex = allBreeds.findIndex(
      (b) => b.id === parseInt(breedId)
    );
    const nextBreedIndex = (currentDogIndex + 1) % allBreeds.length;
    const nextBreedId = allBreeds[nextBreedIndex].id;
    navigate(`/MoreInfo/${nextBreedId}`);
  };

  const handlePrevious = () => {
    const currentDogIndex = allBreeds.findIndex(
      (b) => b.id === parseInt(breedId)
    );
    const previousBreedIndex =
      (currentDogIndex - 1 + allBreeds.length) % allBreeds.length;
    const previousBreedId = allBreeds[previousBreedIndex].id;
    navigate(`/MoreInfo/${previousBreedId}`);
  };

  const navigateBackToList = () => {
    navigate("/Explore");
  };

  if (loading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="moreInfoContainer">
      <Header />
      <div className="backToListView" onClick={navigateBackToList}>
        <p style={{ cursor: "pointer", color: "#735751" }}>
          ← Back to Dog List
        </p>
      </div>
      {breed && (
        <div className="moreInfoContent">
          <div onClick={handlePrevious} className="navButton leftArrow">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </div>

          <div className="bigImage">
            {images[0] ? (
              <img src={images[0].url} />
            ) : (
              <CircularIndeterminate />
            )}
          </div>

          <div className="list">
            <ul>
              <h1>{breed.name}</h1>

              <li>
                <FontAwesomeIcon
                  icon={faRulerVertical}
                  style={{ color: "#735751" }}
                />{" "}
                Height: imperial "{breed.height.imperial}" and metric "
                {breed.height.metric}"
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faFileAlt}
                  style={{ color: "#735751" }}
                />{" "}
                Description: {breed.description || "Description unavailable"}
              </li>

              <li>
                <FontAwesomeIcon icon={faDog} style={{ color: "#735751" }} />{" "}
                Bred For: {breed.bred_for || "Unknown"}
              </li>

              <li>
                <FontAwesomeIcon icon={faUsers} style={{ color: "#735751" }} />{" "}
                Breed Group: {breed.breed_group || "Unknown"}
              </li>

              <li>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#735751" }} />{" "}
                Life Span: {breed.life_span || "Unknown"}
              </li>

              <li>
                <FontAwesomeIcon icon={faSmile} style={{ color: "#735751" }} />{" "}
                Temperament: {breed.temperament || "Unknown"}
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faHistory}
                  style={{ color: "#735751" }}
                />{" "}
                History: {breed.history || "Unknown"}
              </li>

              <li>
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#735751" }} />{" "}
                Origin: {breed.origin || "Unknown"}
              </li>
            </ul>
          </div>

          <div onClick={handleNext} className="navButton rightArrow">
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </div>
        </div>
      )}
      <div className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="xs" /> 2024 Dogs 101. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default MoreInfo;
