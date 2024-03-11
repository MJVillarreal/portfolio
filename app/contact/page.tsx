import React from 'react';

import styles from "../styles/contact.module.css"

import Navbar from '../components/navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';


const Contact: React.FC = () => {

    const linkedinUrl = "https://www.linkedin.com/in/mariajose-villarreal/"

    return (
        <div className={styles.contactSection}>
            <div className={styles.contact}>
                <Navbar></Navbar>
                <div className={styles.page}>
                    <h1>Here's where you can contact me!</h1>

                    <div className={styles.contactContainer}>

                        <div className={styles.contactLink}>
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className={styles.contactIcon} /> María José Villarreal
                            </a>
                        </div>
                    
                        <div className={styles.contactLink}>
                            <EmailIcon className={styles.contactIcon} /> villarrealmariaj@gmail.com
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )   
  };
  
  export default Contact;