import { Fade } from "react-awesome-reveal";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import Nav from "../nav/Nav";
import Profile from "../profile/Profile";
import Technologies from "../technologies/Technologies";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Formation from "../formation/Formation";

import "./Home.css";

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode") || false)
  );

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    localStorage.setItem("isDarkMode", JSON.stringify(checked));
  };

  return (
    <div data-theme={isDarkMode ? "dark" : "light"} id="home">
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Profile />
      <div className="container" id="information">
        <Formation />
        <Technologies />
        <Projects />
      </div>
      <Contact isDarkMode={isDarkMode} />
      <Toaster />
    </div>
  );
};

export default Home;
