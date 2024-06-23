import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/PA-logo.png";
import ShowList from "./ShowList"; // Import the ShowList component
import { fetchTime } from "../utilities/api"; // Import the fetchTime function from api.ts

interface Show {
  id: string;
  title: string;
  image: string;
  description: string;
  genres: string[];
  seasons: number;
  updated: string;
}

interface HeaderProps {
  // No need to pass `shows` here
}

const Header: React.FC<HeaderProps> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [shows, setShows] = useState<Show[]>([]);
  const [filteredShows, setFilteredShows] = useState<Show[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await fetch("https://podcast-api.netlify.app/");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setShows(data); // Assuming data is an array of Show objects
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    setSearchInput(input);

    if (input.length >= 3) {
      const filtered = shows.filter((show) =>
        show.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredShows(filtered);
    } else {
      setFilteredShows([]);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your fuzzy logic filtering here based on searchInput
    console.log("Search input:", searchInput);
  };

  return (
    <header className="flex justify-between bg-black text-white">
      <div className="flex p-4">
        <button onClick={() => setNavOpen(!navOpen)} className="text-3xl mr-5">
          ☰
        </button>
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Podcast App Logo" className="h-8 w-8 mr-5" />
          <h1 className="text-3xl font-bold">Podcast App</h1>
        </NavLink>
      </div>
      <form onSubmit={handleSearchSubmit} className="relative p-4">
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="p-2 rounded-full bg-gray-200 text-black placeholder-gray-500"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 mr-4"
        >
          🔍
        </button>
        {searchInput.length >= 3 && (
          <div className="absolute left-0 right-0 mt-2 bg-white text-black shadow-lg rounded-lg z-50">
            {filteredShows.length > 0 ? (
              <ShowList shows={filteredShows} />
            ) : (
              <div className="p-4">No shows found</div>
            )}
          </div>
        )}
      </form>
      {navOpen && (
        <div className="absolute top-0 left-0 w-1/5 h-full bg-white text-black p-4 z-50 shadow-md">
          <button
            onClick={() => setNavOpen(false)}
            className="text-black text-2xl mb-4"
          >
            ✖
          </button>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setNavOpen(false);
                    navigate("/dashboard");
                  }}
                  className="block py-2 px-4 hover:bg-gray-200 text-left w-full"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setNavOpen(false);
                    navigate("/favourites");
                  }}
                  className="block py-2 px-4 hover:bg-gray-200 text-left w-full"
                >
                  Favourites
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
