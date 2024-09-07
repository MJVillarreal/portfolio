"use client";

import React, { useEffect, useState, ReactNode } from "react";

import styles from "../styles/navbar.module.css";

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
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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
              Home
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("about")}>
              About Me
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("projects")}>
              Projects
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("technologies")}>
            Technologies
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("CV")}>
              Download CV
            </NavbarItem>
            {/* <NavbarItem onClick={() => handleNavItemClick("contact")}>
              Contact
            </NavbarItem> */}
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
              Home
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("about")}>
              About Me
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("projects")}>
              Projects
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("technologies")}>
            Technologies
            </NavbarItem>
            <NavbarItem onClick={() => handleNavItemClick("CV")}>
              Download CV
            </NavbarItem>
            {/* <NavbarItem onClick={() => handleNavItemClick("contact")}>
              Contact
            </NavbarItem> */}
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
