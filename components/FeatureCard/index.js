import React from 'react'
import styles from "./card.module.scss"

const FeatureCard = () => {
    return (
        <div className={styles.cardContainer}>
            <h2>Hello I am card</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}


export default FeatureCard