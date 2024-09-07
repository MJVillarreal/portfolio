"use client";
import React from "react";

import styles from "../styles/landing.module.css";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.landingContainer}>
      <div className={styles.page}>
        <div className={styles.aboutText}>
          <h1>María José Villarreal,</h1>
          <h1>{t("landingTitle")}</h1>
          <p>{t("landingDescription")}</p>
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
