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
        title: "NFT Dashboard Application Development.                                        "
    }, 

    {
        img: img2, 
        title: "Travel App Design Creativity & Application. "
    }, 

    {
        img: img3, 
        title: "Travel App Design Creativity & Application. "
    },
    {
        img: img4, 
        title: "Restaurant Mobile Application Figma Design.                                         "
    },
    {
        img: img5, 
        title: "Workout Website Design And Development.                                        "
    },
    {
        img: img6, 
        title: "Workout Website Design And Development.                                        "
    }


]


const PortfolioSection = () => {
    return (
    <div className={styles.portfolioCardsContainer}>
        <h2>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h2>
        <h1>My Portfolio</h1>
        <div className={styles.portfolioCardContainer}> 
            {
                portfolioData.map( (item, index) => {
                    return (

                            <PortfolioCard img={item.img} title={item.title} key={index} /> 
                    )
                })
            }
            


            </div>
        </div>
    )
}


export default PortfolioSection