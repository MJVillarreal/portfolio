"use client";
import React from "react";

import styles from "../styles/landing.module.css";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
  const { t } = useTranslation();

  const linkedinUrl = "https://www.linkedin.com/in/mariajose-villarreal/";
  const githubUrl = "https://github.com/MJVillarreal";

  return (
    <div className={styles.landingContainer}>
      <div className={styles.page}>
        <div className={styles.aboutText}>
          <h1>María José Villarreal,</h1>
          <h1 className={styles.aboutTitle}>{t("landingTitle")}</h1>
          <p>{t("landingDescription")}</p>
          <div className={styles.landingButtons}>
            <a href={t("cvUrl")} target="_blank">
              <Button
                component="label"
                variant="contained"
                className={styles.customButton}
                tabIndex={-1}
                endIcon={<DownloadIcon />}
              >
                {t("cvButtonText")}
              </Button>
            </a>
            <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.landingIcon}
          >
            <span>
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.landingIcon}
          >
            <span>
              <GitHubIcon sx={{ fontSize: 40 }}  />
            </span>
          </a>
          </div>
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
