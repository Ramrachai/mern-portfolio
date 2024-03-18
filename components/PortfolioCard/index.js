import React from 'react';
import styles from './portfolio.module.scss'
import portfolio1 from '../../assets/portfolio-large-01.jpg'
import portfolio2 from '../../assets/portfolio-large-04.jpg'
import portfolio3 from '../../assets/portfolio-large-05.jpg'
import portfolio4 from '../../assets/portfolio-large-06.jpg'
import portfolio5 from '../../assets/portfolio-large-05.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleUp, FaHeart } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const PortfolioCard = ({ img, category, icon, price, title }) => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.inner}>
          <div className={styles.imageContainer}>
            <Image src={img} alt='portfolio1' width={350} />
          </div>
          <div className={styles.cardMeta}>
            <Link href='#'> {category} </Link>
            <div className={styles.cardMetaRight}>
              {icon}
              <p> {price} </p>
            </div>
          </div>
          <Link className={styles.cardTitle} href={'#'}>
            {title}
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;