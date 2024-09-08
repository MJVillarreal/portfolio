import React from "react";

import styles from "../styles/home.module.css";

import Navbar from "../components/navbar";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

const Home: React.FC = () => {

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.homeContainer}>
      <div id="landing"><Landing /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="technologies"><Technologies /></div>
      </div>
    </>
  );
};

export default Home;
