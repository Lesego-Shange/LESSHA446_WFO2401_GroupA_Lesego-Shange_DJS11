import React from "react";
import { Link } from "react-router-dom";
import { fetchTime } from "../utilities/api"; // Import the fetchTime function from api.ts

interface Show {
  id: string;
  image: string;
  title: string;
  seasons: number;
  genres: string[];
  lastUpdated: string; // Match the property name with Dashboard
}

interface ShowListProps {
  shows: Show[];
}

const ShowList: React.FC<ShowListProps> = ({ shows }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-gray-200">
      {shows.map((show) => (
        <Link
          key={show.id}
          to={`/show/${show.id}`}
          className="hover:no-underline"
        >
          <div className="p-4 border rounded cursor-pointer bg-white">
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-40 rounded"
            />
            <h2 className="text-lg font-bold mt-2">{show.title}</h2>
            <p className="text-gray-600 text-sm">Seasons: {show.seasons}</p>
            <p className="text-gray-600 text-sm">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded"
                >
                  {genre}
                </span>
              ))}
            </p>
            <p className="text-gray-600 text-xs">
              Last updated: {fetchTime(show.lastUpdated)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShowList;
