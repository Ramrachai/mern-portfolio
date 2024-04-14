'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import styles from './testimonial.module.scss';
import img from '../../assets/final-home-1st.png';
import Image from 'next/image';

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.imgContainer} >
              <Image src={img} alt="img" />
            </div>
            <h3 className={styles.subTitle}>Rainbow Themes</h3>
            <h2 className={styles.title}>Nevine Acotanza</h2>
            <p className={styles.content}>Chief Operating Office</p>
          </div>
          <div className={styles.right}>
            <div className={styles.titleArea}>
              <div className="div">
                <h2>Android App Development</h2>
                <p> via Upwork - Mar 4, 2015 - Aug 30, 2021 test</p>
              </div>
              <div className={styles.reviewArea}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>
            </div>
            <div className={styles.description}>
              <p>
                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris test
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>

   



  );
};

export default Testimonial;