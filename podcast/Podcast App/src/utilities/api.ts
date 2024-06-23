const BASE_URL = "https://podcast-api.netlify.app";

export const fetchShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch shows");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching shows:", error);
    // Handle the error (e.g., show an error message to the user)
    return null;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genres`);
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    // Handle the error
    return null;
  }
};

export const fetchGenreDetails = async (genreId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/genre/${genreId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch genre details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching genre details:", error);
    // Handle the error
    return null;
  }
};

export const fetchShowDetails = async (showId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/id/${showId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch show details");
    }
    const data = await response.json();

    // Map the file field to audioUrl in episodes
    const formattedData = {
      ...data,
      seasons: data.seasons.map((season: any) => ({
        ...season,
        episodes: season.episodes.map((episode: any) => ({
          ...episode,
          audioUrl: episode.file, // Ensure 'file' is mapped to 'audioUrl'
        })),
      })),
    };

    return formattedData;
  } catch (error) {
    console.error("Error fetching show details:", error);
    // Handle the error
    throw new Error("Show failed to load");
  }
};

export const fetchTime = (dateString: string) => {
  if (!dateString) return ""; // Handle cases where dateString is not defined

  const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
