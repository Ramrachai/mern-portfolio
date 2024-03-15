
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import PortfolioCard from "@/components/PortfolioCard";
import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
    <main>
      <Header />
      <FeatureCard /> <br /> <br />
      <PortfolioCard />
      <ContactForm/>
      <div className='h-[1800px'></div>
    </main>
  );
}




