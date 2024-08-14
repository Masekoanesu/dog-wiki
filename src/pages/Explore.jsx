import React, { useEffect, useState } from "react";
import { fetchBreeds, fetchImagesByBreed } from "./FetchingData";
import { Link } from "react-router-dom";
import "../pages/Explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function Explore() {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true); // Add loadingImages state

  useEffect(() => {
    async function loadData() {
      const breedData = await fetchBreeds();
      setBreeds(breedData);
      setFilteredBreeds(breedData);

      // Fetch images
      setLoadingImages(true); // Start loading images
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
      setLoadingImages(false); // End loading images
    }

    loadData();
  }, []);

  useEffect(() => {
    const results = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBreeds(results);
  }, [searchQuery, breeds]);

  const handleSearchChange = (event, value) => {
    setSearchQuery(value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Dog Breeds with Images</h1>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            options={breeds.map((breed) => breed.name)}
            value={searchQuery}
            onInputChange={handleSearchChange}
            renderInput={(params) => (
              <TextField {...params} label="Search for dog breed" />
            )}
          />
        </Stack>
      </div>
      {loadingImages && (
        <Box sx={{ width: "100%", marginBottom: 2 }}>
          <LinearProgress
            sx={{
              backgroundColor: "#89909F",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#e0e0e0",
              },
            }}
          />
        </Box>
      )}

      <div className="dogList">
        {filteredBreeds.map((breed) => (
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
          <FontAwesomeIcon icon={faPaw} size="1x" style={{ color: "black" }} />
          2024 Dogs 101. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Explore;
