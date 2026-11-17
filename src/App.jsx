import { SevProductProvider } from './context/SevProductContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandStory from './components/BrandStory';
import SevBanner from './components/SevBanner';
import ProductShowcase from './components/ProductShowcase';
import ProductBenefits from './components/ProductBenefits';
import ProductDetailsAccordion from './components/ProductDetailsAccordion';
import HowToEnjoy from './components/HowToEnjoy';
import GeneralSevBanner from './components/GeneralSevBanner';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <SevProductProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF8E9] text-[#3B2418]">
        {/* Sticky Header with Rotating Free Shipping, Mobile App Discount, and Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* 3. Hero Section with Product Switcher */}
          <HeroSection />

          {/* 4. Brand Story Section ("The Sacred Heritage of Indian Sev") */}
          <BrandStory />

          {/* 6. Sev Collection Heritage Promotional Banner */}
          <SevBanner />

          {/* 7. Product Showcase Section (Dedicated Presentation & Gallery) */}
          <ProductShowcase />

          {/* 8. Why Choose Bhagvat Prasadam Sev? (4 Benefits Cards) */}
          <ProductBenefits />

          {/* 9. Product Details Section (Facts, Specifications & Nutrition) */}
          <ProductDetailsAccordion />

          {/* 10. How to Enjoy Section (4 Lifestyle Culinary Rituals) */}
          <HowToEnjoy />

          {/* 11. General Sev Collection Heritage Banner (All Varieties) */}
          <GeneralSevBanner />

          {/* 12. Frequently Asked Questions (FAQ Accordion) */}
          <FAQSection />

          {/* 12. Dedicated Contact Section */}
          <ContactSection />
        </main>

        {/* 13. Professional Footer */}
        <Footer />
      </div>
    </SevProductProvider>
  );
}
