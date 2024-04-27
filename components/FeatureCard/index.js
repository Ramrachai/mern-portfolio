import React from 'react'
import styles from "./card.module.scss"
import 'auth/auth'

import { FaArrowRightLong } from "react-icons/fa6";

const FeatureCard = ({ title, decription, icon }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.inner}>
        <div className={styles.topIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{decription}</p>
        <FaArrowRightLong className={styles.arrow} />
        <auth/>
      </div>
    </div>
  );
};

export default FeatureCard