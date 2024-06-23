import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPodcastById } from "../services/api";

interface Episode {
  id: string;
  title: string;
  description: string;
  file: string;
}

interface Season {
  id: string;
  title: string;
  episodes: Episode[];
}

interface Podcast {
  id: string;
  image: string;
  title: string;
  genres: string[];
  seasons: Season[];
}

const PodcastDetails: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const [podcast, setPodcast] = useState<Podcast | null>(null);

  useEffect(() => {
    const loadPodcast = async () => {
      if (podcastId) {
        const data = await fetchPodcastById(podcastId);
        setPodcast(data);
      }
    };

    loadPodcast();
  }, [podcastId]);

  if (!podcast) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="flex items-center space-x-8">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="w-64 h-64 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{podcast.title}</h1>
          <p className="text-gray-700">Genres: {podcast.genres.join(", ")}</p>
        </div>
      </div>
      {podcast.seasons.map((season) => (
        <div key={season.id} className="my-4">
          <h2 className="text-2xl font-bold">{season.title}</h2>
          {season.episodes.map((episode) => (
            <div key={episode.id} className="my-2">
              <h3 className="text-xl">{episode.title}</h3>
              <p>{episode.description}</p>
              <audio controls src={episode.file} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PodcastDetails;
