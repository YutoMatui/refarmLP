import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/gtag";
import { ArrowRight } from "lucide-react";

export default function HeroSectionV2() {
  const handleCTAClick = () => {
    trackCTAClick("神戸のこだわり野菜を無料でお試し", "Hero V2");
    const formEl = document.getElementById("contact-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 lg:pt-0">
      {/* Background Image - PC */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/images/hero-bg.jpg"
          alt="農家とシェフが野菜を手渡す"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src="/images/hero-bg-mobile.jpg"
          alt="農家とシェフが野菜を手渡す"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-20 flex flex-col min-h-[100svh]">
        <div className="flex flex-col items-center justify-start text-center pt-8 md:pt-20">
          {/* Main Copy */}
          <h1
            className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            神戸の野菜を使うことが、
            <br />
            <span
              className="text-orange-300"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8), 0 0 1px rgba(0,0,0,1)" }}
            >
              神戸のお客さんに選ばれる
            </span>
            <br />
            理由になります
          </h1>

          {/* Sub Copy / Badge */}
          <p className="text-white text-lg md:text-2xl font-black mb-10 drop-shadow-md bg-black/35 inline-block px-8 py-3 rounded-full border border-white/30 whitespace-pre-wrap">
            個人飲食店限定{"\n"}地産地消プラットフォーム
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-3 w-full max-w-sm mb-12">
            <Button
              className="w-full max-w-[20rem] sm:max-w-[24rem] whitespace-normal leading-snug bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-black text-base sm:text-lg md:text-xl py-6 md:py-7 px-6 rounded-2xl shadow-2xl shadow-emerald-900/35 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              onClick={handleCTAClick}
            >
              神戸のこだわり野菜を無料でお試し
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            </Button>
            <p className="text-white font-bold text-sm md:text-base drop-shadow-sm">
              ✅ 簡単申し込み、1分で完了
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
