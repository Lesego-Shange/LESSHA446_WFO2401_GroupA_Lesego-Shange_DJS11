import React from "react";
import { Link } from "react-router-dom";
import { fetchTime } from "../utilities/api";

interface PodcastDetailsProps {
  show: {
    id: string;
    title: string;
    image: string;
    description: string;
    genres: string[];
    lastUpdated: string;
  };
}

const PodcastDetails: React.FC<PodcastDetailsProps> = ({ show }) => {
  const formattedLastUpdated = fetchTime(show.lastUpdated);

  return (
    <Link to={`/show/${show.id}`}>
      <div className="flex items-center mb-6 bg-white p-4 rounded-lg shadow-md cursor-pointer">
        <img
          src={show.image}
          alt={show.title}
          className="w-32 h-32 rounded-lg mr-6"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{show.title}</h1>
          <p className="text-gray-600 mt-2">{show.description}</p>
          <p className="text-gray-500 text-sm">
            Genres: {show.genres.join(", ")}
          </p>
          {formattedLastUpdated && (
            <p className="text-gray-500 text-sm">
              Last Updated: {formattedLastUpdated}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PodcastDetails;
