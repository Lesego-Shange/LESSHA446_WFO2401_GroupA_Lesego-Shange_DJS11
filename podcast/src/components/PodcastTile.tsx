import React from "react";
import { Link } from "react-router-dom";

interface Podcast {
  id: string;
  image: string;
  title: string;
  genres: string[];
  seasons: number;
  updated: string;
}

interface PodcastTileProps {
  podcast: Podcast;
}

const PodcastTile: React.FC<PodcastTileProps> = ({ podcast }) => {
  return (
    <div className="podcast-tile p-4 bg-white shadow-md rounded-lg">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-bold mt-2">{podcast.title}</h3>
      <p className="text-gray-700">Genres: {podcast.genres.join(", ")}</p>
      <p className="text-gray-700">Seasons: {podcast.seasons}</p>
      <p className="text-gray-700">Last updated: {podcast.updated}</p>
      <Link to={`/podcast/${podcast.id}`} className="text-blue-500">
        More Info
      </Link>
    </div>
  );
};

export default PodcastTile;
