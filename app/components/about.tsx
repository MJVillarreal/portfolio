import React from "react";

import styles from "../styles/about.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.page}>
          <h1>About me</h1>

          <p>
            I'm Majo, a 22 years old Front-end Developer and Systems Engineering
            student at Universidad Tecnológica Nacional in Mendoza, Argentina.
            I’ve got certifications as Front-end Specialist and as Professional
            Developer (2213 hours at Digital House), a series of online courses
            designed and created by Mercado Libre and Globant.
          </p>

          <p>
            I’m seeking to gain experience as a Web Developer specialized in
            Front-end. I consider myself to be a committed and responsible
            person who will carry tasks orderly and thoroughly and finish them
            in a timely fashion. I have total availability, so I’m open to
            various work timetables. I also have certifications in English (B2),
            and I’m used to both speaking and working with this language.
          </p>

          <h2>My certificates</h2>
          <div className={styles.certificatesContainer}>
            <div className={styles.certificate}>
              <a
                href="/images/Fullstack_developer.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Fullstack_developer.jpg"
                  className={styles.ctd}
                ></img>
              </a>
            </div>

            <div className={styles.certificate}>
              <a
                href="/images/CTD_Especializacion.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/CTD_Especializacion.jpg"
                  className={styles.ctd}
                ></img>
              </a>
            </div>
          </div>

          <div className={styles.certificatesContainer}>
            <div className={styles.certificate}>
              <a
                href="/images/PET_Certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/PET_Certificate.jpg"
                  className={styles.language}
                ></img>
              </a>
            </div>
            <div className={styles.certificate}>
              <a
                href="/images/ELLCe.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/ELLCe.jpg" className={styles.language}></img>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
