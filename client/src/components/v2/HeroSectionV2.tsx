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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-16 lg:pt-0">
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
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-20 flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-start text-center pt-8 md:pt-20">
          {/* Main Copy */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 drop-shadow-lg"
            style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.7)" }}
          >
            神戸の野菜を使うことが、
            <br />
            <span
              className="text-orange-400"
              style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 2px rgba(255,255,255,1)" }}
            >
              神戸のお客さんに選ばれる
            </span>
            <br />
            理由になります
          </h1>

          {/* Sub Copy / Badge */}
          <p className="text-white text-lg md:text-2xl font-black mb-12 drop-shadow-md bg-white/10 backdrop-blur-md inline-block px-8 py-3 rounded-full border border-white/20 whitespace-pre-wrap">
            個人飲食店限定{"\n"}地産地消プラットフォーム
          </p>

          {/* Micro Copy above CTA */}
          <p className="text-white font-bold text-sm md:text-base mb-4 drop-shadow-sm">
            ✅ 簡単申し込み、1分で完了
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mb-12">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-black text-xl md:text-2xl py-8 md:py-10 px-12 md:px-16 rounded-2xl shadow-2xl shadow-orange-900/60 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              onClick={handleCTAClick}
            >
              神戸のこだわり野菜を無料でお試し
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </Button>
          </div>

          {/* Micro Copy below CTA */}
          <p className="text-white/90 text-sm md:text-base mb-12 font-bold drop-shadow-sm">
            ※ しつこい営業は一切行いません
          </p>
        </div>
      </div>
    </section>
  );
}
