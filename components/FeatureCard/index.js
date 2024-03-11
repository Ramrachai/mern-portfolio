import React from 'react'
import styles from "./card.module.scss"
import { HiBars4 } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.inner}>
                <HiBars4 className={styles.topIcon}/>
                <h3>Business Stratagy</h3>
                <p>I throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                <FaArrowRightLong className={styles.arrow} />
            </div>
        </div>
    )
}

export default FeatureCard