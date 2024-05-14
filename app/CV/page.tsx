import React from 'react';

import styles from "../styles/cv.module.css"

import Navbar from '../components/navbar';

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const About: React.FC = () => {

    return (
        <div className={styles.cvContainer}>
            <div className={styles.cv}>
            <Navbar></Navbar>
                <div className={styles.page}>
                    <h1>View and download my resume</h1>
                        <div  className={styles.certificates}>

                            <div className={styles.downloadContainer}>

                                <img src='/images/CV_En.jpg'></img>
                                
                                <a href = '/archives/Resume-MariaJoseVillarreal.pdf' target = "_blank">
                                    <Button
                                        component="label"
                                        variant="contained"
                                        tabIndex={-1}
                                        endIcon={<DownloadIcon />} >Download Resume
                                    </Button>
                                </a>

                            </div>

                            <div className={styles.downloadContainer}>

                                <img src='/images/CV_Es.jpg'></img>

                                <a href = '/archives/MariaJoseVillarreal-Resume.pdf' target = "_blank">
                                    <Button
                                        component="label"
                                        variant="contained"
                                        tabIndex={-1}
                                        endIcon={<DownloadIcon />} >Descargar CV
                                    </Button>
                                </a>

                            </div>

                        </div>
                </div>
                
            </div>
        </div>
    )   
  };
  
  export default About;