import React from "react";

interface Season {
  episodes: {
    title: string;
    description: string;
    audioUrl: string;
  }[];
}

interface SeasonListProps {
  seasons: Season[];
  onSeasonClick: (seasonIndex: number) => void;
  activeSeason: number;
}

const SeasonList: React.FC<SeasonListProps> = ({
  seasons,
  onSeasonClick,
  activeSeason,
}) => {
  return (
    <div>
      <ul className="divide-y divide-gray-300">
        {seasons.map((season, index) => (
          <li
            key={index}
            className={`py-2 cursor-pointer hover:bg-gray-200 ${
              index === activeSeason ? "bg-pink-200" : ""
            }`}
            onClick={() => onSeasonClick(index)}
          >
            Season {index + 1} ({season.episodes.length} episodes)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonList;
