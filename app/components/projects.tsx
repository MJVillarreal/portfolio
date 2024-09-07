"use client"
import React from 'react';

import styles from "../styles/projects.module.css"

import { useTranslation } from "react-i18next";

import Button from '@mui/material/Button';

const Projects: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.projectsContainer}>
                <div className={styles.page}>
                    <h1>{t("projectsTitle")}</h1>
                    <div className={styles.projects}>
                        
                            <img src='/images/DHOdonto.png'></img>
                        
                        <div className={styles.projectDetails}>

                            <h2 style={{paddingBottom: '1rem'}}> DH Odonto</h2>
                            <p>This app lets users switch between dark and light themes for a personalized look. Users can browse and click on dentists to view detailed profiles fetched from an API. They can also mark favorite dentists or remove them from the list with ease. </p>

                                <div className={styles.projectButton}>
                                    <Button variant="outlined" href={'https://github.com/MJVillarreal/ctd-esp-fe3-final'} target='_blank' rel="noopener noreferrer">Github</Button>

                                    <Button variant="outlined" href={'https://ctd-esp-fe3-final-one-brown.vercel.app/home'} target='_blank' rel="noopener noreferrer">Demo</Button>
                                </div>  
                        </div>
                    </div>

                    <div className={styles.projects}>
                        
                            <img src='/images/R&M.png'></img>
                        
                        <div className={styles.projectDetails}>

                            <h2 style={{paddingBottom: '1rem'}}>Rick and Morty Character Search</h2>
                            <p>In this app you can search for characters by name, mark your favorites, and manage your selections effortlessly. This interactive web app utilizes an API to provide real-time character information.</p>

                                <div className={styles.projectButton}>
                                    <Button variant="outlined" href={'https://github.com/MJVillarreal/Rick_and_Morty_characters_DB-Frontend_final'} target='_blank' rel="noopener noreferrer">Github</Button>

                                    <Button variant="outlined" href={'https://rick-and-morty-characters-db-frontend-final.vercel.app'} target='_blank' rel="noopener noreferrer">Demo</Button>
                                </div>  
                        </div>
                    </div>
                </div>
        </div>
    )   
  };
  
  export default Projects;