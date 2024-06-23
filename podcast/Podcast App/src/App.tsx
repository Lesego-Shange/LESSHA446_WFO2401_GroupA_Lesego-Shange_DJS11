import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Favourites from "./pages/Favourites";
import PodcastShow from "./pages/PodcastShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StateProvider } from "./utilities/state";

const App: React.FC = () => {
  return (
    <Router>
      <StateProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/favourites" element={<Favourites />} />

              <Route path="/show/:id" element={<PodcastShow />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </StateProvider>
    </Router>
  );
};

export default App;
