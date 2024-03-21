import React from 'react';
import styles from './blogSection.module.scss';
import BlogCard from '@/components/BlogCard';
import img1 from '../assets/blog1.jpg'
import img2 from '../assets/blog2.jpg'
import img3 from '../assets/blog3.jpg'
import { CiClock2 } from "react-icons/ci";

const blogData=[

    {
        img:img1,
        title:"Best Ways to Do Market Research For Your Business Plan.",
        
        desc:"4 min read",
        category:"developement"


    },
    {
        img:img2,
        title:"The Easiest Way to Become a Successful Writer and Authors. ",
        
        desc:"4 min read",
        category:"qoute"


    },
    {
        img:img3,
        title:"The Quickest Way to Deliver Your Message? Make It Visual.",
        
        desc:"4 min read",
        category:"tecgnician"


    }
]


const BlogCardSection = () => {
    return (
        <div>
          <section className={styles.container}>
            <h2>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h2>
            <h1>My Blog</h1>
            <div className={styles.cardContainer}>
               { blogData.map((item,index)=>{
                return(
                    <BlogCard img={item.img} title={item.title} desc={item.desc}  category={item.category} key={index}/>
                )
               })

               };

            </div>
            </section>  
        </div>
    );
};

export default BlogCardSection;