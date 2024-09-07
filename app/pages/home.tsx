import React from "react";

import styles from "../styles/home.module.css";

import Navbar from "../components/navbar";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import CV from "../components/cv";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home: React.FC = () => {

  const linkedinUrl = "https://www.linkedin.com/in/mariajose-villarreal/";
  const githubUrl = "https://github.com/MJVillarreal";

  return (
    <>
      <div className={styles.floatingContainer}>
        <div className={styles.floatingButton}> + </div>
        <div className={styles.elementContainer}>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatElement}
          >
            <span>
              <LinkedInIcon />
            </span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatElement}
          >
            <span>
              <GitHubIcon />
            </span>
          </a>
        </div>
      </div>

      <Navbar></Navbar>
      <div id="landing"><Landing /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="technologies"><Technologies /></div>
      <div id="CV"><CV /></div>
    </>
  );
};

export default Home;
