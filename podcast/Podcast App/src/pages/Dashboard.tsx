import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import SearchButtons from "../components/SearchButtons";
import ShowList from "../components/ShowList";
import { fetchShows } from "../utilities/api";
import genres from "../data/genres";

interface Show {
  id: string;
  image: string;
  title: string;
  seasons: number;
  genres: string[]; // Using string array for genre IDs
  lastUpdated: string;
}

const Dashboard: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [filteredShows, setFilteredShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchShows();
      const formattedData: Show[] = data.map((show: any) => ({
        id: show.id,
        image: show.image,
        title: show.title,
        seasons: show.seasons,
        genres: show.genres.map((genreId: string) => genres[genreId]), // Map genre IDs to names
        lastUpdated: show.updated,
      }));

      setShows(formattedData);
      setFilteredShows(formattedData.slice(0, 10)); // Initially display 10 shows
      setLoading(false);
    };
    getShows();
  }, []);

  useEffect(() => {
    if (selectedGenre === "All") {
      setFilteredShows(shows.slice(0, 10));
    } else {
      const filtered = shows.filter((show) =>
        show.genres.includes(selectedGenre)
      );
      setFilteredShows(filtered.slice(0, 10));
    }
  }, [selectedGenre, shows]);

  const loadMoreShows = () => {
    if (selectedGenre === "All") {
      setFilteredShows(shows.slice(0, filteredShows.length + 10));
    } else {
      const filtered = shows.filter((show) =>
        show.genres.includes(selectedGenre)
      );
      setFilteredShows(filtered.slice(0, filteredShows.length + 10));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <Carousel shows={shows.slice(0, 3)} />
      <div className="flex mb-4">
        <SearchButtons setFilteredShows={setFilteredShows} shows={shows} />
        {/* "All Genres" Button with Dropdown */}
        <div className="relative mb-4">
          <select
            className="bg-gray-50 text-gray-800 p-2 rounded"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="All">All</option>
            {Object.values(genres).map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ShowList shows={filteredShows} onShowClick={(id) => console.log(id)} />
      {filteredShows.length < shows.length && (
        <button
          onClick={loadMoreShows}
          className="w-full bg-gray-200 py-2 mt-4"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Dashboard;
