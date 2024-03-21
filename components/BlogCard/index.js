import React from 'react';
import styles from './blogCard.module.scss';
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import { CiClock2 } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({img ,category,icon, title,desc}) => {
    return (
        <div>
        <div className={styles.cardContainer}>
            <div className={styles.inner}>
                <div className={styles.imageContainer}>
                    <Image src={img} alt='blog1' width={250} />
                </div>

                <div className={styles.cardMeta}>
                    <Link href='#'>{category}</Link>
                

                <div className={styles.cardMetaRight}>
                   {icon}
                    <p>{desc}</p>
                </div>
                </div>

                <Link className={styles.cardTitle} href={"#"}>
                    <h2>{title} </h2>
                    <FiArrowUpRight />
                </Link>
            </div>
        </div>
        </div>
    );
};

export default BlogCard;