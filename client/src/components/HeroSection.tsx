import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-[#fafaf8]">
      {/* Background Decor Elements - Similar to TANOMU's circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-100/50 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* 1. Top Tags: Box Style like TANOMU */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 md:mb-10">
            <div className="bg-white border-2 border-slate-800 px-4 py-2 rounded-lg shadow-sm">
              <span className="text-slate-800 font-bold text-lg md:text-xl tracking-wide">
                客単価アップ
              </span>
            </div>
            <span className="text-slate-400 text-2xl font-black">×</span>
            <div className="bg-white border-2 border-slate-800 px-4 py-2 rounded-lg shadow-sm">
              <span className="text-slate-800 font-bold text-lg md:text-xl tracking-wide">
                リピート率アップ
              </span>
            </div>
            <span className="text-slate-700 font-bold text-lg md:text-xl pt-1">なら</span>
          </div>

          {/* 2. Big Logo Center */}
          <div className="mb-8 md:mb-10 flex justify-center">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-20 md:h-32 w-auto object-contain" // Significantly increased size
            />
          </div>

          {/* 3. Main Copy */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 leading-relaxed mb-10 md:mb-12">
            毎日の野菜発注も、お客様へのメニュー提案も
            <br />
            <span className="text-orange-500 font-black text-2xl md:text-3xl lg:text-4xl">
              LINEで簡単シンプルに解決！
            </span>
          </h1>

          {/* 4. Mockup Area with Badge */}
          <div className="relative mx-auto max-w-4xl">
            {/* Main Mockup Image */}
            <div className="relative z-10">
              <img
                src="/images/hero-smartphone-mockup.png"
                alt="ベジコベアプリの発注画面"
                className="w-full max-w-[300px] md:max-w-[360px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Stamp Badge - "LINEでかんたん発注！" */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-10 lg:left-20 z-20 hidden sm:block rotate-[-10deg]">
              <div className="bg-white rounded-full p-1 shadow-xl">
                <div className="bg-white border-4 border-orange-500 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center p-2 shadow-inner">
                  <span className="text-emerald-500 font-black text-xl md:text-2xl leading-none mb-1">LINE</span>
                  <span className="text-slate-700 font-bold text-sm md:text-base">で</span>
                  <span className="text-orange-500 font-black text-lg md:text-xl leading-tight">
                    かんたん
                    <br />
                    受発注！
                  </span>
                </div>
              </div>
            </div>

            {/* Background Device Hint (Optional, abstract shape to mimic desktop/tablet behind) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-slate-200 rounded-[2rem] -z-10 opacity-50 hidden md:block transform scale-110" />
          </div>

          {/* 5. Bottom CTA Area */}
          <div className="mt-[-2rem] relative z-30">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 md:p-6 inline-flex flex-col md:flex-row items-center gap-4 shadow-xl max-w-2xl mx-auto w-full">
              <div className="text-center md:text-left">
                <p className="text-slate-600 font-bold text-sm md:text-base">
                  1分でベジコベのことが分かる！
                </p>
              </div>
              <Button
                className="w-full md:w-auto flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg md:text-xl py-6 px-8 rounded-xl shadow-md hover:shadow-lg transition-all"
                onClick={() => handleLineClick("Hero CTA")}
              >
                LINEで無料相談する
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
