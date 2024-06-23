import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails, fetchShows } from "../utilities/api";
import PodcastDetails from "../components/PodcastDetails";
import SeasonList from "../components/SeasonList";
import EpisodeList from "../components/EpisodeList";

interface Show {
  id: string;
  title: string;
  image: string;
  seasons: {
    episodes: { title: string; description: string; audioUrl: string }[];
  }[];
  lastUpdated: string;
}

const PodcastShow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);
  const [activeSeason, setActiveSeason] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getShowDetails = async () => {
      try {
        const data = await fetchShowDetails(id);
        setShow(data);
      } catch (err) {
        setError("Show failed to load");
      }
    };

    getShowDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row mt-6 p-4 ">
      <div className="md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md mr-2">
        <h2 className="text-xl font-bold mb-4">Seasons</h2>
        <SeasonList seasons={show.seasons} onSeasonClick={setActiveSeason} />
      </div>
      <div className="md:w-3/4 p-4 bg-red-200 rounded">
        <PodcastDetails show={show} />
        <EpisodeList
          episodes={show.seasons[activeSeason].episodes}
          onAddToFavorites={() => {}}
        />
      </div>
    </div>
  );
};

export default PodcastShow;
