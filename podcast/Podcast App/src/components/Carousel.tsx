import React, { useState, useEffect } from "react";

interface Show {
  id: string;
  title: string;
  image: string;
  description: string;
  genres: string[];
  seasons: number;
}

interface CarouselProps {
  shows: Show[];
}

const Carousel: React.FC<CarouselProps> = ({ shows }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shows.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shows.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + shows.length) % shows.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shows.length);
  };

  return (
    <div className="relative bg-white rounded w-full h-auto text-black p-5 mb-5">
      <div className="overflow-hidden relative h-64 ml-5 mr-5 mt-5 mb-5">
        {shows.map((show, index) => (
          <div
            key={show.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-row w-full h-64">
              <div className="flex-shrink-0">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-64 h-64 rounded-lg"
                />
              </div>
              <div className="flex-grow p-4 bg-white bg-opacity-75 text-black">
                <h2 className="text-xl font-semibold">{show.title}</h2>
                <p className="text-sm mt-2 text-black">
                  {show.description || "No description available"}
                </p>
                <p className="text-xs mt-2 mb-2">Seasons: {show.seasons}</p>
                <div className="space-x-2 mt-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full"
        aria-label="Previous slide"
      >
        {"<"}
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full"
        aria-label="Next slide"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
