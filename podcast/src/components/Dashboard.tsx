import React, { useEffect, useState } from "react";
import { fetchPodcasts } from "../services/api";
import Carousel from "./Carousel";
import Filters from "./Filters";
import PodcastTile from "./PodcastTile";
//import Loader from "./Loader";

const Dashboard: React.FC = () => {
  const [podcasts, setPodcasts] = useState<any[]>([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
        setFilteredPodcasts(data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPodcasts();
  }, []);

  const handleFilter = (filterType: string) => {
    // Filtering logic here
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto">
      <Carousel podcasts={podcasts} />
      <Filters onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPodcasts.map((podcast) => (
          <PodcastTile key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
