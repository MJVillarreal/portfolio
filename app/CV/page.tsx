import React from 'react';

import styles from "../styles/about.module.css"

import Navbar from '../components/navbar';


const About: React.FC = () => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
            <Navbar></Navbar>
                <div className={styles.page}>
                    <h1>View and download my resume</h1>
                    <div>
                        <iframe src="/archives/Resume-MariaJoseVillarreal.pdf" width="100%" height="800rem" />
                    </div> 
                </div>
                
            </div>
        </div>
    )   
  };
  
  export default About;