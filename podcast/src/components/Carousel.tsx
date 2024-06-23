import React from "react";

interface Podcast {
  id: string;
  image: string;
  title: string;
  description: string;
  seasons: number;
  genres: string[];
}

interface CarouselProps {
  podcasts: Podcast[];
}

const Carousel: React.FC<CarouselProps> = ({ podcasts }) => {
  // Carousel logic here

  return (
    <div className="carousel my-6">
      {podcasts.slice(0, 5).map((podcast) => (
        <div
          key={podcast.id}
          className="carousel-item p-4 bg-white shadow-lg rounded-lg"
        >
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">{podcast.title}</h2>
            <p className="text-gray-700">{podcast.description}</p>
            <p className="text-gray-700">Seasons: {podcast.seasons}</p>
            <p className="text-gray-700">Genres: {podcast.genres.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
