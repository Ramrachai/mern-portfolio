import Header from '@/components/Header';
import ResumeTabs from '@/components/ResumeTabs';
import Testimonial from '@/components/Testimonial/Testimonial';
import { testimonialsData } from '@/components/Testimonial/testimonialData';
import BlogCardSection from '@/section/BlogCardSection';
import FeatureSection from '@/section/FeatureSection';
import HeroSection from '@/section/HeroSection';
import PortfolioSection from '@/section/PortfolioSection';

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <FeatureSection />
            <PortfolioSection />
            <ResumeTabs />
            <Testimonial testimonials={testimonialsData} />
            <BlogCardSection />
        </main>
    );
}
