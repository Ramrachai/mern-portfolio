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

const PortfolioCard = ( props ) => {

  console.log("my props ==", props)


  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.inner}>
          <div className={styles.imageContainer}>
            <Image src={props.image} alt='portfolio1' height={400}  width={350} />
          </div>
          <div className={styles.cardMeta}>
            <Link href='#'> {props.category} </Link>
            <div className={styles.cardMetaRight}>
              <FaHeart />
              <p>{props.price}</p>
            </div>
          </div>
          <Link className={styles.cardTitle} href={'#'}>
            {props.children}
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;