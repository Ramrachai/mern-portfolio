
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import PortfolioCard from "@/components/PortfolioCard";
import ContactForm from "@/components/ContactForm";
import SingleBlog from "@/components/SingleBlog";

export default function Home() {
  return (
    <main>
      <Header />
      <FeatureCard /> <br /> <br />
      <PortfolioCard />
      <ContactForm/><br />
      <SingleBlog/>
      <div className='h-[1800px'></div>
    </main>
  );
}




