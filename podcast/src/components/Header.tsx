import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-2xl">
        &#9776;
      </button>
      <Link to="/dashboard" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Podyssey Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">Podyssey</span>
      </Link>
      <input
        type="search"
        placeholder="Search..."
        className="p-2 rounded bg-gray-200"
      />
      {isNavOpen && (
        <nav className="absolute top-16 right-0 bg-blue-500 p-4 rounded-lg shadow-lg">
          <button
            onClick={() => setIsNavOpen(false)}
            className="block text-right text-2xl mb-4"
          >
            X
          </button>
          <Link to="/dashboard" className="block mb-2">
            Dashboard
          </Link>
          <Link to="/favourites" className="block">
            Favourites
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
