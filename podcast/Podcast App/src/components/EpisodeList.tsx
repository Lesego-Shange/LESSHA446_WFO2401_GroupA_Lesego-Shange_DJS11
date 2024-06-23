import React from "react";

interface Episode {
  title: string;
  description: string;
  audioUrl: string;
}

interface EpisodeListProps {
  episodes: Episode[];
  onAddToFavorites?: (episode: Episode) => void;
  onAudioPlay?: (audioUrl: string) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  onAddToFavorites,
  onAudioPlay,
}) => {
  const resetPlayed = () => {
    localStorage.removeItem("playedEpisodes");
    // additional logic to reset played state in UI
  };

  return (
    <div>
      <button
        onClick={resetPlayed}
        className="mb-4 p-2 bg-red-500 text-white rounded-lg"
      >
        Reset Played
      </button>
      {episodes.map((episode, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{episode.title}</h3>
            {onAddToFavorites && (
              <button
                onClick={() => onAddToFavorites(episode)}
                className="ml-4 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                ❤️ Add to Favorites
              </button>
            )}
          </div>
          <p>{episode.description}</p>
          <audio
            controls
            className="w-full mt-2"
            onPlay={() => onAudioPlay?.(episode.audioUrl)}
          >
            <source src={episode.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
