import React from 'react';

import styles from "../styles/about.module.css"

import Navbar from '../components/navbar';


const About: React.FC = () => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
            <Navbar></Navbar>
                <div className={styles.page}>
                    <h1>This the about page</h1>
                </div>
                
            </div>
        </div>
    )   
  };
  
  export default About;