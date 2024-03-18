import React from 'react'
import styles from "./card.module.scss"
import { HiBars4 } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureCard = (props) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.inner}>
                <HiBars4 className={styles.topIcon}/>
                <h3>{props.children}</h3>
                <p>{props.children}</p>
                <FaArrowRightLong className={styles.arrow} />
            </div>
        </div>
    )
}

export default FeatureCard