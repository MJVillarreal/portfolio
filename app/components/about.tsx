"use client";
import React from "react";

import styles from "../styles/about.module.css";

import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.page}>
        <h1>{t("aboutTitle")}</h1>

        <p>{t("aboutContent1")}</p>

        <h2>{t("aboutCertificates")}</h2>
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
            <p>{t("fullstack")}</p>
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
            <p>{t("frontend")}</p>
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
            <p>{t("pet")}</p>
          </div>
          <div className={styles.certificate}>
            <a
              href="/images/ELLCe.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/ELLCe.jpg" className={styles.language}></img>
            </a>
            <p>{t("ellce")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
