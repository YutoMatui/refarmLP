/**
 * VegeKobe Landing Page V2
 */

import HeaderV2 from "@/components/v2/HeaderV2";
import HeroSectionV2 from "@/components/v2/HeroSectionV2";
import AboutSectionV2 from "@/components/v2/AboutSectionV2";
import ProblemSectionV2 from "@/components/v2/ProblemSectionV2";
import FeaturesSectionV2 from "@/components/v2/FeaturesSectionV2";
import BenefitsSectionV2 from "@/components/v2/BenefitsSectionV2";
import FarmersCarouselV2 from "@/components/v2/FarmersCarouselV2";
import MissionSectionV2 from "@/components/v2/MissionSectionV2";
import OnboardingFlowV2 from "@/components/v2/OnboardingFlowV2";
import SupportSectionV2 from "@/components/v2/SupportSectionV2";
import FAQSectionV2 from "@/components/v2/FAQSectionV2";
import ContactSectionV2 from "@/components/v2/ContactSectionV2";
import FooterCTASectionV2 from "@/components/v2/FooterCTASectionV2";
import FooterV2 from "@/components/v2/FooterV2";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function VegeKobeV2() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <GoogleAnalytics />

      {/* Header */}
      <HeaderV2 />

      {/* Main Content */}
      <main>
        {/* 1. ファーストビュー */}
        <HeroSectionV2 />

        {/* 2. 私たちについて */}
        <AboutSectionV2 />

        {/* 3. 問題提起 + 解決策カルーセル */}
        <ProblemSectionV2 />

        {/* 4. アプリ機能紹介 */}
        <FeaturesSectionV2 />

        {/* 5. 選ばれる理由 */}
        <section id="benefits">
          <BenefitsSectionV2 />
        </section>

        {/* 6. 提携農家 */}
        <section id="farmers">
          <FarmersCarouselV2 />
        </section>

        {/* 7. ミッション */}
        <MissionSectionV2 />

        {/* 8. 導入の流れ */}
        <section id="flow">
          <OnboardingFlowV2 />
        </section>

        {/* 9. サポート */}
        <SupportSectionV2 />

        {/* 10. FAQ */}
        <section id="faq">
          <FAQSectionV2 />
        </section>

        {/* 11. 埋め込みフォーム（コンバージョン） */}
        <ContactSectionV2 />

        {/* 12. フッター CTA */}
        <FooterCTASectionV2 />
      </main>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}

