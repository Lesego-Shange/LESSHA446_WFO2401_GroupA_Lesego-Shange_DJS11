import React from "react";
import SearchButtons from "../components/SearchButtons";
import { Link } from "react-router-dom";

const Favourites: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">Your Favourites</h1>
      <SearchButtons setFilteredShows={() => {}} shows={[]} />
      <div> {/* Display favourite shows here */} </div>
    </div>
  );
};

export default Favourites;
