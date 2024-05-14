import React from 'react';

import styles from "../styles/about.module.css"

import Navbar from '../components/navbar';


const About: React.FC = () => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
            <Navbar></Navbar>
                <div className={styles.page}>
                    <h1>Find out a little bit about me</h1>
                        <p>I'm Majo, a 22 years old frontend developer and Systems Engineering student from Mendoza, Argentina.</p>
                    <h2>My certificates</h2>
                    <div  className={styles.certificatesContainer}>
                        <div className={styles.certificate}>
                            <a href='/images/Fullstack_developer.jpg' target="_blank" rel="noopener noreferrer">
                                <img src='/images/Fullstack_developer.jpg'></img>
                            </a>
                        </div>

                        <div className={styles.certificate}>
                            <a href='/images/CTD_Especializacion.jpg' target="_blank" rel="noopener noreferrer">
                                <img src='/images/CTD_Especializacion.jpg'></img>
                            </a>
                        </div>
                    </div>
                    {/* <h2>Hobbies</h2> */}
                </div>
                
            </div>
        </div>
    )   
  };
  
  export default About;