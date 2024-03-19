import Header from '@/components/Header';
import FeatureSection from '@/section/FeatureSection';
import HeroSection from '@/section/HeroSection';
import PortfolioSection from '@/section/PortfolioSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection/>
      <FeatureSection />
      <PortfolioSection/>
    </main>
  );
}
