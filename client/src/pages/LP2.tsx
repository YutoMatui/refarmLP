/**
 * VegeKobe LP2 - Landing Page for Restaurant Owners
 * "VegeKobe - 神戸の飲食店向け野菜仕入れプラットフォーム"
 * Mobile-first design optimized for smartphone viewing
 */

import LP2HeroSection from "@/components/lp2/LP2HeroSection";
import LP2EmpathySection from "@/components/lp2/LP2EmpathySection";
import LP2AppScreenSection from "@/components/lp2/LP2AppScreenSection";
import LP2ReasonsSection from "@/components/lp2/LP2ReasonsSection";
import LP2FarmersSection from "@/components/lp2/LP2FarmersSection";
import LP2MissionSection from "@/components/lp2/LP2MissionSection";
import LP2StepsSection from "@/components/lp2/LP2StepsSection";
import LP2FAQSection from "@/components/lp2/LP2FAQSection";
import LP2FooterCTA from "@/components/lp2/LP2FooterCTA";
import LP2Footer from "@/components/lp2/LP2Footer";
import LP2StickyCTA from "@/components/lp2/LP2StickyCTA";

export default function LP2() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 pb-20 md:pb-0">
      {/* Main Content */}
      <main>
        {/* Section 1: First View */}
        <LP2HeroSection />

        {/* Section 2: Empathy / Problem Awareness */}
        <LP2EmpathySection />

        {/* Section 3: App Screen Introduction */}
        <LP2AppScreenSection />

        {/* Section 4: 5 Reasons to Choose VegeKobe */}
        <LP2ReasonsSection />

        {/* Section 5: Partner Farmers (Carousel) */}
        <LP2FarmersSection />

        {/* Section 6: Our Mission */}
        <LP2MissionSection />

        {/* Section 7: Onboarding Steps */}
        <LP2StepsSection />

        {/* Section 8: FAQ */}
        <LP2FAQSection />

        {/* Section 9: Footer CTA */}
        <LP2FooterCTA />
      </main>

      {/* Footer */}
      <LP2Footer />

      {/* Sticky CTA (Mobile) */}
      <LP2StickyCTA />
    </div>
  );
}
