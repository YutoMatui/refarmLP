import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";
import { trackLineClick } from "@/lib/fbpixel";
import { ArrowRight } from "lucide-react";

export default function HeroSectionV2() {
  const handleCTAClick = () => {
    trackLineRegistration("VegeKobe Hero Section");
    trackCTAClick("VegeKobe CTA", "Hero");
    trackLineClick("VegeKobe Hero Section");
    window.open("https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv", "_blank");
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
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Copy */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
            神戸の農家を支えることが
            <br />
            <span className="text-orange-400 text-stroke-white">飲食店の成長に!</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-white text-base md:text-xl lg:text-2xl font-bold mb-8 drop-shadow-md bg-white/15 backdrop-blur-sm inline-block px-6 py-3 rounded-full border border-white/20">
            個人飲食店限定 地産地消プラットフォーム
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm md:text-base py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
              onClick={handleCTAClick}
            >
              神戸のこだわり野菜を受け取る
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Micro Copy */}
          <p className="text-white/80 text-xs md:text-sm mt-3 drop-shadow-sm">
            ※ まずは無料でお試し配送
          </p>
        </div>
      </div>
    </section>
  );
}
