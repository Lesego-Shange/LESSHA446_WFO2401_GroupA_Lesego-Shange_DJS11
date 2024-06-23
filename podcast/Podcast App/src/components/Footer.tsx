import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      &copy; {new Date().getFullYear()} Podcast App
    </footer>
  );
};

export default Footer;
