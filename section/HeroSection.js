import React from 'react';
import styles from './heroSection.module.scss';
import bannerImage from '../assets/banner-01.png';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { FaLinkedinIn } from 'react-icons/fa';
import linkedin from '../assets/icons-01 (3).png';
import sketch from '../assets/icons-02 (2).png';
import figma from '../assets/icons-03 (1).png';
import { SquareButton } from '@/components/shared/StyledComponents';

const HeroSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>WELCOME TO MY WORLD</h3>
                <h1>
                    Hi, I’m <span className={styles.name}>Jone Lee</span> <br />a{' '}
                    <span>Developer</span>
                </h1>
                <p className={styles.description}>
                    I use animation as a third dimension by which to simplify experiences
                    and kuiding thro each and every interaction. I’m not adding motion
                    just to spruce things up, but doing it in ways that.
                </p>

                <div className={styles.buttonContainer}>
                    <div className={styles.socialBtn}>
                        <p>FIND WITH ME</p>
                        <SquareButton href="#"><FaFacebookF size={20} /></SquareButton>
                        <SquareButton href="#"><CiTwitter size={20} /></SquareButton>
                        <SquareButton href="#"><FaLinkedinIn size={20} /></SquareButton>
                    </div>

                    <div className={styles.skillBtn}>
                        <p>BEST SKILLS ON</p>
                        <SquareButton href="#" ><Image src={linkedin} alt='' width={20} height={20} /></SquareButton>
                        <SquareButton href="#"> <Image src={sketch} alt='' width={20} height={20} /></SquareButton>
                        <SquareButton href="#"><Image src={figma} alt='' width={20} height={20} /> </SquareButton>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.inner}>
                    <Image src={bannerImage} alt='banner' />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
