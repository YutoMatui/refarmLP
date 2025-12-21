/**
 * VegeKobe Landing Page - Home
 * Design Philosophy: Neo-Corporate Trust style
 * - Clean, trustworthy B2B SaaS aesthetic
 * - Deep Emerald Green (#059669) as brand color
 * - Vivid Orange (#F97316) for CTAs only
 * - Generous whitespace and clear hierarchy
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTASection from "@/components/FooterCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Pain Points Section */}
        <PainPointsSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Features Section (Tab UI) */}
        <FeaturesSection />

        {/* Pricing Section (Accordion) */}
        <PricingSection />

        {/* FAQ Section (Accordion) */}
        <FAQSection />

        {/* Footer CTA Section */}
        <FooterCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
