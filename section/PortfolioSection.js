import PortfolioCard from "@/components/PortfolioCard"
import React from "react"
import styles from './portfolioSection.module.scss'

import img1 from "../assets/portfolio-large-01.jpg"
import img2 from "../assets/portfolio-large-04.jpg"
import img3 from "../assets/portfolio-large-05.jpg"
import img4 from "../assets/portfolio-large-04.jpg"
import img5 from "../assets/portfolio-large-01.jpg"
import img6 from "../assets/portfolio-06.jpg"


const portfolioData = [

    {
        img: img1, 
        title: "NFT Dashboard Application Development.",
        category:"gallary",
        price:496
    }, 

    {
        img: img2, 
        title: "Travel App Design Creativity & Application. ",
        category:"video",
        price:438
    }, 

    {
        img: img3, 
        title: "Travel App Design Creativity & Application. ",
        category:"external link",
        price:187
    },
    {
        img: img4, 
        title: "Restaurant Mobile Application Figma Design.  ",
        category:"image",
        price:279
    },
    {
        img: img5, 
        title: "Workout Website Design And Development.  ",
        category:"gallery",
        price:293
    },
    {
        img: img6, 
        title: "Workout Website Design And Development.   ",
        category:"standard",
        price:201
    }


]


const PortfolioSection = () => {
    return (
        <section className={styles.container} id='portfolio'>
            <h2>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h2>
            <h1>My Portfolio</h1>
            <div className={styles.cardsContainer}>
                {portfolioData.map((item, index) => {
                    return (
                        <PortfolioCard
                            img={item.img}
                            title={item.title}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}


export default PortfolioSection