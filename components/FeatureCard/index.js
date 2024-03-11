import React from 'react'
import styles from "./card.module.scss"
import { HiBars4 } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureCard = () => {
    return (
        <div className={styles.cardContainer}>
            <HiBars4 />
            <h2>Business Stratagy</h2>
            <p>I throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
            <FaArrowRightLong />
        </div>
    )
}



// const FeatureCard = () => {
//     return (
//         <div  className={styles.cardContainer}>

            // <h2>Business Stratagy</h2>
            // <p>I throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
//         </div>
//     );
// };


export default FeatureCard