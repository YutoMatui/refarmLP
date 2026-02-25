import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/gtag";
import { ArrowRight } from "lucide-react";

export default function HeroSectionV2() {
  const handleCTAClick = () => {
    trackCTAClick("LINEで神戸野菜の仕入れを始める", "Hero V2");
    const formEl = document.getElementById("contact-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[75svh] md:min-h-[100svh] flex items-center overflow-hidden pt-16 lg:pt-0">
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
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-20 flex flex-col min-h-[75svh] md:min-h-[100svh]">
        <div className="flex flex-col items-center justify-start text-center pt-8 md:pt-20">
          {/* Main Copy */}
          <h1
            className="font-black text-white leading-[1.03] mb-8"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            <span className="block text-[clamp(1.6rem,6.8vw,3.7rem)]">
              スーパーと同価格で、
            </span>
            <span className="block text-[#ff9a1f] text-[clamp(1.6rem,6.8vw,3.8rem)]">
              畑から6時間以内に届く
            </span>
            <span className="block text-[clamp(1.5rem,6.2vw,3.5rem)]">
              顔の見える圧倒的な鮮度の野菜を厨房へ。
            </span>
          </h1>

          {/* Sub Copy */}
          <p className="text-white/95 text-sm md:text-base font-bold mb-6 drop-shadow-md bg-black/35 inline-block px-5 py-2 rounded-full border border-white/30">
            <span className="block">LINEアプリを使った</span>
            <span className="block">神戸限定 地産地消プラットフォーム</span>
          </p>

          {/* Price Bubble */}
          <div className="relative mb-5">
            <div className="inline-block rounded-2xl border-2 border-white/80 bg-white/95 px-6 py-3 shadow-xl">
              <p className="text-sm md:text-base font-black text-slate-800">
                初期・月額費用は
                <span className="text-emerald-700 text-lg md:text-xl ml-1">ずっと￥0！</span>
              </p>
            </div>
            <div className="absolute left-1/2 -bottom-3 h-0 w-0 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/95" />
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-3 w-full max-w-sm mb-12">
            <Button
              className="w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[34rem] whitespace-normal md:whitespace-nowrap leading-snug bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-black text-base sm:text-lg md:text-xl py-6 md:py-7 px-6 rounded-2xl shadow-2xl shadow-emerald-900/35 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              onClick={handleCTAClick}
            >
              LINEで神戸野菜の仕入れを始める
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
