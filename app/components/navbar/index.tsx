import React from 'react';

import styles from "../../styles/navbar.module.css"

import Link from 'next/link';

const Navbar = () => {

    return (
        <>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link href="/about">
                            <p>About Me</p>
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/CV">
                            <p>Download CV</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )   
  };
  
  export default Navbar;