/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface SearchButtonsProps {
  setFilteredShows: (shows: any[]) => void;
  shows: any[];
}

const SearchButtons: React.FC<SearchButtonsProps> = ({
  setFilteredShows,
  shows,
}) => {
  const handleFilter = (filter: string) => {
    // Implement the filter logic
    switch (filter) {
      case "A-Z":
        setFilteredShows(
          [...shows].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "Z-A":
        setFilteredShows(
          [...shows].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      case "Newest":
        setFilteredShows(
          [...shows].sort(
            (a, b) =>
              new Date(b.updated).getTime() - new Date(a.updated).getTime()
          )
        );
        break;
      case "Oldest":
        setFilteredShows(
          [...shows].sort(
            (a, b) =>
              new Date(a.updated).getTime() - new Date(b.updated).getTime()
          )
        );
        break;
      default:
        setFilteredShows(shows);
    }
  };

  return (
    <div className="flex mb-4">
      {" "}
      {/* Added margin-bottom here */}
      <button
        onClick={() => handleFilter("All")}
        className="p-2 bg-gray-50 rounded hover:bg-gray-300" // Adjusted styles here
      >
        All
      </button>
      <button
        onClick={() => handleFilter("A-Z")}
        className="p-2 bg-gray-50 rounded hover:bg-gray-300" // Adjusted styles here
      >
        A-Z
      </button>
      <button
        onClick={() => handleFilter("Z-A")}
        className="p-2 bg-gray-50 rounded hover:bg-gray-300" // Adjusted styles here
      >
        Z-A
      </button>
      <button
        onClick={() => handleFilter("Newest")}
        className="p-2 bg-gray-50 rounded hover:bg-gray-300" // Adjusted styles here
      >
        Newest
      </button>
      <button
        onClick={() => handleFilter("Oldest")}
        className="p-2 bg-gray-50 rounded hover:bg-gray-300" // Adjusted styles here
      >
        Oldest
      </button>
    </div>
  );
};

export default SearchButtons;
