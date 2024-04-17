'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import styles from './testimonial.module.scss';
import Image from 'next/image';

const Testimonial = ({ testimonials }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <div className={styles.imgContainer}>
                                <Image src={testimonial.imgSrc} alt='img' />
                            </div>
                            <h3 className={styles.subTitle}>
                                {testimonial.theme}
                            </h3>
                            <h2 className={styles.title}>{testimonial.name}</h2>
                            <p className={styles.content}>
                                {testimonial.position}
                            </p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.titleArea}>
                                <div className='div'>
                                    <h2>{testimonial.project}</h2>
                                    <p>{testimonial.projectDetails}</p>
                                </div>
                                <div className={styles.reviewArea}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p>{testimonial.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Testimonial;
