import React from "react";

import Navbar from "../components/navbar";

import styles from "../styles/about.module.css"

const About: React.FC = () => {
  return (
      <div className={styles.aboutContainer}>
      <Navbar></Navbar>
      
      <div>About page</div>
    </div>
    
  )
};

export default About;