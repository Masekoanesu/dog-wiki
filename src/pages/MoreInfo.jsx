import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
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
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import CircularIndeterminate from "../components/CircularIndeterminate";
import "./MoreInfo.css";
import { Tooltip } from "@mui/material";

const MoreInfo = () => {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
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
          const breedImages = await fetchImagesByBreed(breedId, 5);
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

  const handleNextBreed = () => {
    const currentDogIndex = allBreeds.findIndex(
      (b) => b.id === parseInt(breedId)
    );
    const nextBreedIndex = (currentDogIndex + 1) % allBreeds.length;
    const nextBreedId = allBreeds[nextBreedIndex].id;
    navigate(`/MoreInfo/${nextBreedId}`);
  };

  const handlePreviousBreed = () => {
    const currentDogIndex = allBreeds.findIndex(
      (b) => b.id === parseInt(breedId)
    );
    const previousBreedIndex =
      (currentDogIndex - 1 + allBreeds.length) % allBreeds.length;
    const previousBreedId = allBreeds[previousBreedIndex].id;
    navigate(`/MoreInfo/${previousBreedId}`);
  };

  // go to next image
  const handleNextBreedImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // go to prev image
  const handlePreviousBreedImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
          <Tooltip title="Previous dog breed">
            <div onClick={handlePreviousBreed} className="navButton leftArrow">
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>
          </Tooltip>
          <div className="bigImage">
            <Tooltip title="Previous Image">
              <div
                onClick={handlePreviousBreedImage}
                className="carouselButton carouselButtonCircle"
              >
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
              </div>
            </Tooltip>
            <div className="image">
              {images[breed.id] ? (
                <img src={images[imageIndex].url} alt={breed.name} />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={320}
                  height={300}
                  sx={{ bgcolor: "grey.300" }}
                />
              )}
              <div className="imageCounter">
                {imageIndex + 1} / {images.length}
              </div>
            </div>
            <Tooltip title="Next Image">
              <div onClick={handleNextBreedImage} className="carouselButton">
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
              </div>
            </Tooltip>
          </div>
          <div className="breedDetails">
            <h1>{breed.name}</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faRulerVertical} className="icon" />
                Height:
                <span>imperial "{breed.height.imperial}"</span> and
                <span>metric "{breed.height.metric}"</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faFileAlt} className="icon" />
                Description:
                <span>{breed.description || "Description unavailable"}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faDog} className="icon" />
                Bred For:
                <span>{breed.bred_for || "Unknown"}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} className="icon" />
                Breed Group:
                <span>{breed.breed_group || "Unknown"}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} className="icon" />
                Life Span:
                <span>{breed.life_span || "Unknown"}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faSmile} className="icon" />
                Temperament:
                <span>{breed.temperament || "Unknown"}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faHistory} className="icon" />
                History:
                <span>{breed.history || "Unknown"}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                Origin:
                <span>{breed.origin || "Unknown"}</span>
              </li>
            </ul>
          </div>
          <Tooltip title="Next dog breed">
            <div onClick={handleNextBreed} className="navButton rightArrow">
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </div>
          </Tooltip>
        </div>
      )}
      <div className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="xs" /> 2024 Woof Wiki. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default MoreInfo;
