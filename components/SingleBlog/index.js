import React from 'react';
import styles from './singleBlog.module.scss'
import portfolio1 from '../../assets/portfolio-large-01.jpg'
import Image from 'next/image';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SingleBlog = () => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.mainArea}>
            <div className={styles.leftArea}>
                <Image src={portfolio1} alt="portfolio1" width={350}/>
            </div>
            <div className={styles.rightArea}>
                <h3>NFT Dashboard Application Development.</h3>
                <p>Through a wide variety of mobile applications, we’ve developed a unique visual system.</p>
        </div>
        </div>
        {/* <!-- <ul class="meta-area">
                    <li><strong>Client:</strong> <span>George Wallace</span></li>
                    <li><strong>Date:</strong> <span>15 June 2022</span></li>
                    <li><strong>Services:</strong> <span>Web Application</span></li>
                    <li><strong>Budget:</strong> <span>$100000+</span></li>
                </ul> --> */}

                <table>
                    <tr>
                        <td><strong>Client:</strong></td>
                        <td><span>George Wallace</span></td>
                        <td><strong>Date:</strong></td>
                        <td><span>15 June 2022</span></td>
                    </tr>

                    <tr>
                        <td><strong>Services:</strong></td>
                        <td><span>Web Application</span></td>
                        <td><strong>Budget:</strong></td>
                        <td><span>$100000+</span></td>
                    </tr>

                </table>

                {/* <!-- <div class="buttons">
                    <div class="like-btn">
                        <a href="#">
                            <span>Like This</span>
                            <i class="fa-regular fa-thumbs-up"></i>
                            <mark>443</mark>
                            <span class="badge hide">No naughty business please</span>
                        </a>
                    </div>
                    <div class="project-btn">
                        <a href="#">
                            <span>View Projects</span>
                            <i class="fa-regular fa-thumbs-up"></i>
                        </a>
                    </div>
                </div> --> */}
                <div className={styles.btnContainer}>
                    <table>
                        <tr className={styles.leftBtn}>
                            <td>Like This<span><FaRegThumbsUp /></span></td>
                            <td><strong>443</strong></td>
                        </tr>

                        <tr className={styles.rightBtn}>
                            <td>View Projects<span><FaArrowAltCircleRight /></span></td>
                        </tr>
                     </table>
                </div>
                <div>
            <p>There are always some stocks, which illusively scale lofty heights in a given time period. However, the
                good show doesn’t last for these overblown toxic stocks as their current price is not justified by their
                fundamental strength.</p>
        </div>
        <div className={styles.experienceArea}>
            <div className="experience">
                <h5>Strategy</h5>
                <p>A strategy is a general plan to achieve one or more long-term. labore et dolore magna aliqua.</p>
                </div>

</div>
<div className="experience">
                <h5>Design</h5>
                <p>UI/UX Design, Art Direction, A design is a plan or specification for art. which illusively scale
                    lofty heights.</p>

            </div>
            <div className="experience">
                <h5>User Experience</h5>
                <p>User experience (UX) design is the process design teams use to create products that provide.</p>
            </div>
            <p>Toxic companies are usually characterized by huge debt loads and are vulnerable to external shocks.
            Accurately identifying such bloated stocks and getting rid of them at the right time can protect your
            portfolio.</p>
        <p>Toxic companies are usually characterized by huge debt loads and are vulnerable to external shocks.
            Accurately identifying such bloated stocks and getting rid of them at the right time can protect your
            portfolio.</p>
            <p>
            However, if you can precisely spot such toxic stocks, you may gain by resorting to an investing strategy
            called short selling. This strategy allows one to sell a stock first and then buy it when the price falls.
        </p>

        <p>While short selling excels in bear markets, it typically loses money in bull markets.</p>

        <p>So, just like identifying stocks with growth potential, pinpointing toxic stocks and offloading them at the
            right time is crucial to guard one’s portfolio from big losses or make profits by short selling them. Heska
            Corporation HSKA, Tandem Diabetes Care, Inc. TNDM, Credit Suisse Group CS,Zalando SE ZLNDY and Las Vegas
            Sands LVS are a few such toxic stocks.Screening Criteria</p>

        <p>Here is a winning strategy that will help you to identify overhyped toxic stocks:</p>
        <p>

            Most recent Debt/Equity Ratio greater than the median industry average: High debt/equity ratio implies high
            leverage. High leverage indicates a huge level of repayment that the company has to make in connection with
            the debt amount.
        </p>
            </div>
           
        

        
        
          
        
                
        
                
        
        
        
            
        
       
        

    );
};

export default SingleBlog;