import React from 'react';

import styles from "../styles/contact.module.css"

import Navbar from '../components/navbar';


const Contact: React.FC = () => {

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contact}>
                <Navbar></Navbar>
                <div className={styles.page}>
                    <h1>This the contact page</h1>
                </div>
            </div>
        </div>
    )   
  };
  
  export default Contact;