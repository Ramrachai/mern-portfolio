import React from 'react';
import styles from './portfolio.module.scss'
import portfolio1 from '../../assets/portfolio-large-01.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleUp, FaHeart } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const PortfolioCard = () => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.inner}>
          <div className={styles.imageContainer}>
            <Image src={portfolio1} alt='portfolio1' width={350} />
          </div>
          <div className={styles.cardMeta}>
            <Link href='#'>GALLERY </Link>
            <div className={styles.cardMetaRight}>
              <FaHeart />
              <p>443</p>
            </div>
          </div>
          <Link className={styles.cardTitle} href={'#'}>
            NFT Dashboard Application Development.
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;