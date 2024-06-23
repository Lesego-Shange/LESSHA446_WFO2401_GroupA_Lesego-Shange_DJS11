import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Favourites from "./components/Favourites";
import PodcastDetails from "./components/PodcastDetails";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
