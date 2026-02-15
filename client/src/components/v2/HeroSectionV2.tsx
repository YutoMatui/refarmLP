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
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-20 flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-start text-center pt-8 md:pt-20">
          {/* Main Copy */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            神戸の農家を支えることが
            <br />
            <span className="text-orange-400">飲食店の成長に!</span>
          </h1>

          {/* Sub Copy / Badge */}
          <p className="text-white text-sm md:text-lg font-bold mb-10 drop-shadow-md bg-white/15 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-white/20">
            個人飲食店限定 地産地消プラットフォーム
          </p>

          {/* Features Grid */}
          <div className="w-full max-w-sm mb-10">
            <h2 className="text-white text-xl font-black mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-white/50"></span>
              ベジコベなら!
              <span className="w-8 h-[2px] bg-white/50"></span>
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { text: "圧倒的鮮度で\nお届け!", pos: "左上" },
                { text: "顔が見えて\n安心!", pos: "右上" },
                { text: "Lineアプリで\n30秒発注!", pos: "左下" },
                { text: "こだわりを価値\nとして伝える!", pos: "右下" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[70px] shadow-lg"
                >
                  <p className="text-white text-xs md:text-sm font-black leading-tight whitespace-pre-wrap">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
            <Button
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm md:text-base py-6 md:py-6 px-8 md:px-8 rounded-2xl shadow-xl shadow-emerald-900/40 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
              onClick={handleCTAClick}
            >
              神戸のこだわり野菜を受け取る
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Micro Copy */}
          <p className="text-white/90 text-xs md:text-sm mt-4 font-bold drop-shadow-sm">
            ※ まずは無料でお試し配送
          </p>
        </div>
      </div>
    </section>
  );
}
