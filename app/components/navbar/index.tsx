'use client';

import React, { useState, ReactNode } from 'react';

import styles from "../../styles/navbar.module.css"

import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';

const NavbarItem = ({ href, children }: { href: string; children: ReactNode }) => {
    return (
      <li className={styles.navbarItem}>
        <Link href={href}>
          <p>{children}</p>
        </Link>
      </li>
    );
  };

const Navbar = () => {

    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const handleBurgerMenuClick = () => {
      setBurgerMenuActive(!burgerMenuActive);
    };

    return (
        <>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarList}>
                    <NavbarItem href="/about">About Me</NavbarItem>
                    <NavbarItem href="/projects">Projects</NavbarItem>
                    <NavbarItem href="/contact">Contact</NavbarItem>
                    <NavbarItem href="/CV">Download CV</NavbarItem>
                </ul>
                <div className={`${styles.burgerMenu} ${burgerMenuActive? styles.active : ''}`} onClick={handleBurgerMenuClick}>
                    <MenuIcon fontSize="large" />
                </div>
            </div>
            <div className={`${styles.sidebar} ${burgerMenuActive? styles.active : ''}`}>
                <ul className={styles.sidebarList}>
                  <NavbarItem href="/about">About Me</NavbarItem>
                  <NavbarItem href="/projects">Projects</NavbarItem>
                  <NavbarItem href="/contact">Contact</NavbarItem>
                  <NavbarItem href="/CV">Download CV</NavbarItem>
                </ul>
            </div>
        </>
    )   
  };
  
  export default Navbar;