import React from "react";

import Navbar from "../components/navbar";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

const Home: React.FC = () => {

  return (
    <>
      <Navbar></Navbar>
      <div>
      <div id="landing"><Landing /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="technologies"><Technologies /></div>
      </div>
    </>
  );
};

export default Home;
