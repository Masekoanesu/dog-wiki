const apiKey = "apiurl";
const baseUrl = "apiUrl";

async function fetchPets() {
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: "Bearer ${apiKey}",
    },
  });
  if (!response.ok) {
    throw new Error("API request failed with status: ${response.status}");
  }
  const data = await response.json();
  return data.animals;
}
