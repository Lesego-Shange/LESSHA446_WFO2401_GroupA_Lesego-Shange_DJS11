import React from "react";

interface FiltersProps {
  onFilter: (filterType: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  return (
    <div className="filters my-4 flex justify-around">
      <button
        onClick={() => onFilter("all")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        All
      </button>
      <button
        onClick={() => onFilter("a-z")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        A-Z
      </button>
      <button
        onClick={() => onFilter("z-a")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Z-A
      </button>
      <button
        onClick={() => onFilter("newest")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Newest
      </button>
      <button
        onClick={() => onFilter("oldest")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Oldest
      </button>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="p-2 bg-white border rounded"
      >
        <option value="">All Genres</option>
        {/* Options for genres */}
      </select>
    </div>
  );
};

export default Filters;
