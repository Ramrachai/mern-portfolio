import Header from '@/components/Header';
import BlogCardSection from '@/section/BlogCardSection';
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
    <BlogCardSection/>
    </main>
  );
}
