import React from 'react';
import styles from './testimonial.module.scss';
import img from '../../assets/final-home-1st.png'

const Testimonial = () => {
    return (
        <div>
            <div>
            <div className={styles.cardContainer}>
        <div className={styles.inner}>
          <div className={styles.imageContainer}>
            <Image src={img} alt='portfolio1' width={350} />
          </div>
          
            
          <div className={styles.cardTitle} >
            <h3>Rainbow Themes</h3>
            <h2>Nevine Acotanza</h2>
            <p>Chief Operating Office</p>
          </div>
        </div>
      </div>
   
            </div>
            <div></div>
        </div>
        
    );
};

export default Testimonial;