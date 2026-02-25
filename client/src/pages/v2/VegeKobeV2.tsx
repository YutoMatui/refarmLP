/**
 * VegeKobe Landing Page V2
 */

import HeaderV2 from "@/components/v2/HeaderV2";
import HeroSectionV2 from "@/components/v2/HeroSectionV2";
import ValueProofSectionV2 from "@/components/v2/ValueProofSectionV2";
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

        {/* 2. 比較訴求 + 導入店舗の声 */}
        <ValueProofSectionV2 />

        {/* 3. 私たちについて */}
        <AboutSectionV2 />

        {/* 4. 問題提起 + 解決策カルーセル */}
        <ProblemSectionV2 />

        {/* 5. アプリ機能紹介 */}
        <FeaturesSectionV2 />

        {/* 6. 選ばれる理由 */}
        <section id="benefits">
          <BenefitsSectionV2 />
        </section>

        {/* 7. 提携農家 */}
        <section id="farmers">
          <FarmersCarouselV2 />
        </section>

        {/* 8. ミッション */}
        <MissionSectionV2 />

        {/* 9. 導入の流れ */}
        <section id="flow">
          <OnboardingFlowV2 />
        </section>

        {/* 10. サポート */}
        <SupportSectionV2 />

        {/* 11. FAQ */}
        <section id="faq">
          <FAQSectionV2 />
        </section>

        {/* 12. 埋め込みフォーム（コンバージョン） */}
        <ContactSectionV2 />

        {/* 13. フッター CTA */}
        <FooterCTASectionV2 />
      </main>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}

