import React from 'react';

import styles from "../styles/cv.module.css"

import Navbar from '../components/navbar';

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const CV: React.FC = () => {

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
                                        className={styles.customButton}
                                        tabIndex={-1}
                                        endIcon={<DownloadIcon />}>
                                            <span className={styles.buttonTextFull}>Download Resume</span>
                                            <span className={styles.buttonTextShort}>Download</span>
                                    </Button>
                                </a>

                            </div>

                            <div className={styles.downloadContainer}>

                                <img src='/images/CV_Es.jpg'></img>

                                <a href = '/archives/CV-MaríaJoséVillarreal.pdf' target = "_blank">
                                    <Button
                                        component="label"
                                        variant="contained"
                                        className={styles.customButton}
                                        tabIndex={-1}
                                        endIcon={<DownloadIcon />}>
                                            <span className={styles.buttonTextFull}>Descargar CV</span>
                                            <span className={styles.buttonTextShort}>Descargar</span>
                                    </Button>
                                </a>

                            </div>

                        </div>
                </div>
                
            </div>
        </div>
    )   
  };
  
  export default CV;