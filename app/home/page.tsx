import React from 'react';

import Link from 'next/link';

import styles from '../styles/home.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';

const Home: React.FC = () => {

    const linkedinUrl = "https://www.linkedin.com/in/mariajose-villarreal/"
    const githubUrl = "https://github.com/MJVillarreal"

    return (
        <div className={styles.homeContainer}>
            <div className={styles.aboutContainer}>

                <div>
                    <h1>Hi there, I'm Majo</h1>
                    <p>I'm a 22 years old frontend developer from Mendoza, Argentina</p>
                </div>

                <img src='/images/profile.jpg' alt="profile picture" className={styles.picture} />

            </div>

                <Link href={"/about"}>
                    <button className={styles.button}><span>About me</span><i></i></button>
                </Link>
                
                
            

                <div className={styles.floatingContainer}>

                    <div className={styles.floatingButton}> + </div>
                    <div className={styles.elementContainer}>

                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.floatElement}>
                            <span ><LinkedInIcon/></span>
                        </a>

                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.floatElement}>
                            <span><GitHubIcon/></span>
                        </a>

                    </div>

                </div>
        
        </div>  
    )   
  };
  
  export default Home;