
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import PortfolioCard from "@/components/PortfolioCard";
import ContactForm from "@/components/ContactForm";
import SingleBlog from "@/components/SingleBlog";

export default function Home() {
  return (
    <main>
      <Header />
      <br /> <br />
      <FeatureCard >
      We’ll handle everything from to app development process until it is time to make your project live. </FeatureCard>
      <FeatureCard />
      <FeatureCard >App Development 
      We’ll handle everything from to app development process until it is time to make your project live. </FeatureCard>
      <FeatureCard />
      <FeatureCard >Mobile App
      We’ll handle everything from to app development process until it is time to make your project live. </FeatureCard>
      <FeatureCard />

<h1>
  <img src="" alt=""  /><input type="text" />
</h1>
{/* 
send data from parent compoent to Portfolio card
how? 
- props 
- children

*/}

{/* <input type="text" id ="helloid" name="useName" /> */}
      {/* <PortfolioCard category="gallary" title="Workout Website Design And Development"/>
      <PortfolioCard category="video" title="NFT 12 "/>
      <PortfolioCard category="image" title="NFT 444555"/>
      <PortfolioCard category="image" title="NFT 444555"/> */}
      <PortfolioCard category="image" price="443" image="/assets/portfolio-large-01.jpg "> NFT Dashboard Application Development.  </PortfolioCard>
      <PortfolioCard category="VIDEO" price ="400" image="/assets/portfolio-large-04.jpg"> Online Food Delivery Mobile App Design.  </PortfolioCard>
      <PortfolioCard category="EXTERNAL LINK" price="169" image="/portfolio3">  Travel App Design Creativity & Application.   </PortfolioCard> 
      <PortfolioCard category="image" price="169" image="/portfolio4"> Workout Website Design And Development.   </PortfolioCard>
      


     
      




 




























      <ContactForm/><br />
      <SingleBlog/>
      <div className='h-[1800px'></div>
    </main>
  );
}




