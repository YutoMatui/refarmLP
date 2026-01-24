/**
 * VegeKobe Landing Page - Home
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import CTASection from "@/components/CTASection";

import StickyCTA from "@/components/StickyCTA"; // New Sticky CTA
import CaseStudySection from "@/components/CaseStudySection";
import MarketingSupportSection from "@/components/MarketingSupportSection";
import FeaturesSection from "@/components/FeaturesSection";
import OnboardingFlowSection from "@/components/OnboardingFlowSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import SupportSection from "@/components/SupportSection";

import FooterCTASection from "@/components/FooterCTASection";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 pb-20 md:pb-0"> {/* Add padding bottom for StickyCTA on mobile */}
      <GoogleAnalytics />

      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. FV (Hero) */}
        <HeroSection />

        {/* 2. 課題 (Pain Points - Carousel/Grid) */}
        <PainPointsSection />

        {/* 3. 選ばれる理由 (3 Reasons) */}
        <BenefitsGrid />

        {/* 4. CTA (Mid Page) */}
        <CTASection />

        {/* 5. 導入事例 (Case Study) - コメントアウト */}
        {/* <CaseStudySection /> */}

        {/* Other Sections (Appropriate Placement) */}
        {/* Marketing Support - Supports Reasons & Case Study */}
        <MarketingSupportSection />

        {/* Features - Functional details */}
        <FeaturesSection />

        {/* Onboarding - Before Pricing/FAQ */}
        <OnboardingFlowSection />

        {/* 6. よくある質問 (FAQ) */}
        <FAQSection />

        {/* 7. プラン (Pricing) */}
        <PricingSection />

        {/* 8. 安心の理由 (Support) */}
        <SupportSection />

        {/* Footer CTA */}
        <FooterCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky CTA (Always Bottom) */}
      <StickyCTA />
    </div>
  );
}
