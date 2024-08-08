// src/api.js
const apiKey =
  "your_api_kelive_XzZq37uwhGP6JwTKcDRAagngFfNguFGLSRWZ7OIOUtfoteB54E5ulKoba4X8159Gy_here";
const breedsUrl = "https://api.thedogapi.com/v1/breeds";
const imagesUrl = "https://api.thedogapi.com/v1/images/search";

export async function fetchBreeds() {
  try {
    const response = await fetch(breedsUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return [];
  }
}

export async function fetchImagesByBreed(breedId) {
  try {
    const response = await fetch(`${imagesUrl}?breed_ids=${breedId}&limit=1`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
