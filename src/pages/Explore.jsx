import React, { useEffect, useState } from "react";
import { fetchBreeds, fetchImagesByBreed } from "./FetchingData";
import { Link } from "react-router-dom";
import Header from "../components/sharedHeader";
import "../pages/Explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

function Explore() {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    async function loadData() {
      const breedData = await fetchBreeds();
      setBreeds(breedData);
      setFilteredBreeds(breedData);

      setLoadingImages(true);
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
      setLoadingImages(false);
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
      <Header />
      <div className="header">
        <br />
        <br />
        <h1>Dog Breeds with Images</h1>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            options={breeds.map((breed) => breed.name)}
            value={searchQuery}
            onInputChange={handleSearchChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for dog breed"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#A9A9A9", // text color
                    "&.Mui-focused": {
                      color: "black", // text color when field selected
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#A9A9A9", // border color default
                    },
                    "&:hover fieldset": {
                      borderColor: "black", // border hover color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black", // border when selected
                    },
                  },
                }}
              />
            )}
          />
        </Stack>
      </div>
      <br />
      <br />
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
            <Link to={`/MoreInfo/${breed.id}`}>
              <h2>{breed.name}</h2>
              {images[breed.id] ? (
                <img
                  src={images[breed.id].url}
                  alt={breed.name}
                  className="dogImage"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={320}
                  height={300}
                  sx={{ bgcolor: "grey.300" }}
                />
              )}
              <p>{breed.temperament}</p>
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
