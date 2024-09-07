import React from "react";

import styles from "../styles/landing.module.css";

const Landing: React.FC = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.page}>
        <div className={styles.aboutText}>
          <h1>María José Villarreal, Front-End Developer</h1>
          <p>
            I am a 22 years old Front-end Developer and Systems Engineering
            student at Universidad Tecnológica Nacional in Mendoza, Argentina.{" "}
          </p>
        </div>

        <img
          src="/images/profile.jpg"
          alt="profile picture"
          className={styles.picture}
        />
      </div>
    </div>
  );
};

export default Landing;
