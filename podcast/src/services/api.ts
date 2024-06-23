const API_BASE_URL = "https://podcast-api.netlify.app/"; // Replace with the actual API base URL

export const fetchPodcasts = async (): Promise<any[]> => {
  const response = await fetch(`${API_BASE_URL}/podcasts`);
  if (!response.ok) {
    throw new Error("Failed to fetch podcasts");
  }
  return response.json();
};

export const fetchPodcastById = async (id: string): Promise<any> => {
  const response = await fetch(`${API_BASE_URL}/podcasts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch podcast");
  }
  return response.json();
};
