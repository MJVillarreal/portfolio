"use client";

import React, { useEffect, useState, ReactNode } from "react";

import styles from "../styles/navbar.module.css";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

import TranslateIcon from "@mui/icons-material/Translate";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavbarItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <li className={styles.navbarItem}>
      <p onClick={onClick}>{children}</p>
    </li>
  );
};

const Navbar = () => {
  const [lngDropdown, setLngDropdown] = React.useState<HTMLElement | null>(
    null
  );
  const open = Boolean(lngDropdown);
  const { t } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLngDropdown(event.currentTarget);
  };

  const handleClose = () => {
    setLngDropdown(null);
  };

  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerMenuClick = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const handleNavItemClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsLightMode(true);
    } else {
      setIsLightMode(false);
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const handlLightModeToggle = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    localStorage.setItem("theme", newMode ? "light" : "dark");
  };

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${
          hasScrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.navbarContainer}>
          <ul className={styles.navbarList}>
            <NavbarItem onClick={() => handleNavItemClick("landing")}>
              {t("navbarHome")}
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("about")}>
              {t("navbarAbout")}
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("projects")}>
              {t("navbarProjects")}
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("technologies")}>
              {t("navbarTech")}
            </NavbarItem>
            <div className={styles.toggleButtons}>
              <button
                aria-label="language-switcher"
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={styles.languageButton}
              >
                <TranslateIcon />
              </button>
              <Menu
                id="language-menu"
                anchorEl={lngDropdown}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                disableScrollLock={true}
              >
                <MenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("es")}>
                  Español
                </MenuItem>
              </Menu>
              <button
                aria-label="light-mode-toggle"
                onClick={handlLightModeToggle}
                className={styles.lightModeButton}
              >
                {isLightMode ? <DarkModeIcon /> : <LightModeIcon /> }
              </button>
            </div>
          </ul>
          <div
            className={`${styles.burgerMenu} ${
              burgerMenuActive ? styles.active : ""
            }`}
            onClick={handleBurgerMenuClick}
          >
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <div
          className={`${styles.sidebar} ${
            burgerMenuActive ? styles.active : ""
          }`}
        >
          <ul className={styles.sidebarList}>
            <NavbarItem onClick={() => handleNavItemClick("landing")}>
              {t("navbarHome")}
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("about")}>
              {t("navbarAbout")}
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("projects")}>
              {t("navbarProjects")}
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("technologies")}>
              {t("navbarTech")}
            </NavbarItem>
            <li className={styles.navbarItem}>
              <div>
                <button
                  aria-label="language-switcher"
                  aria-controls="language-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  className={styles.languageButton}
                >
                  <TranslateIcon />
                </button>
                <Menu
                  id="language-menu"
                  anchorEl={lngDropdown}
                  open={open}
                  onClose={handleClose}
                  className={styles.languageMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={() => handleLanguageChange("en")}>
                    English
                  </MenuItem>
                  <MenuItem onClick={() => handleLanguageChange("es")}>
                    Español
                  </MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <button
                aria-label="light-mode-toggle"
                onClick={handlLightModeToggle}
                className={styles.lightModeButton}
              >
                {isLightMode ? <DarkModeIcon /> : <LightModeIcon /> }
              </button>
            </li>
          </ul>
          <CloseIcon
            className={styles.closeButton}
            onClick={handleBurgerMenuClick}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
