import React from 'react';
import styles from './heroSection.module.scss'
import bannerImage from '../assets/banner-01.png'
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import linkedin from '../assets/icons-01 (3).png'
import sketch from '../assets/icons-02 (2).png'
import figma from '../assets/icons-03 (1).png'


const HeroSection = () => {
    return (
        <section className={styles.container}>

            <div className={styles.textContainer}>
                <p className={styles.title}>WELCOME TO MY WORLD</p>
                <h1>Hi, I’m <span className={styles.name} >Jone Lee</span>
                     <span className={styles.description}>Developer.Professional Coder.UI/UX Designer.</span></h1>
                <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m
                    not adding motion just to spruce things up, but doing it in ways that.</p>

                <div className={styles.buttonContainer}>

                    <div className={styles.socialBtn}>
                        <p>FIND WITH ME</p>
                        <a  ><FaFacebookF /></a>
                        <a ><CiTwitter /></a>
                        <a ><FaLinkedinIn /></a>
                    </div>



                    <div className={styles.skillBtn} >
                        <p>BEST SKILLS ON</p>
                        <a ><Image src={linkedin} alt="" width={20} height={20} /></a>
                        <a ><Image src={sketch} alt="" width={20} height={20} /></a>
                        <a ><Image src={figma} alt="" width={20} height={20} /></a>

                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                {/* <Image src={bannerImage} alt="banner" fill={true} priority={true} />  */}
                <Image src={bannerImage} alt="banner" />

            </div>




        </section>
    );
};

export default HeroSection;