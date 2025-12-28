import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden bg-[#fafaf8]">
      {/* Background Decor Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-orange-100/60 blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-100/60 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* 1. Top Tags: Compact for Mobile */}
          <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-4 mb-4 md:mb-8 transform scale-90 md:scale-100 origin-center">
            <div className="bg-white border md:border-2 border-slate-800 px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg shadow-sm whitespace-nowrap">
              <span className="text-slate-800 font-bold text-xs md:text-xl tracking-wide">
                客単価アップ
              </span>
            </div>
            <span className="text-slate-400 text-lg md:text-2xl font-black mx-1">×</span>
            <div className="bg-white border md:border-2 border-slate-800 px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg shadow-sm whitespace-nowrap">
              <span className="text-slate-800 font-bold text-xs md:text-xl tracking-wide">
                リピート率アップ
              </span>
            </div>
            <span className="text-slate-700 font-bold text-xs md:text-xl pt-1 ml-1 whitespace-nowrap">なら</span>
          </div>

          {/* 2. Big Logo Center */}
          <div className="mb-4 md:mb-10 flex justify-center">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-20 md:h-32 w-auto object-contain"
            />
          </div>

          {/* 3. Main Copy */}
          <h1 className="text-sm md:text-2xl lg:text-3xl font-bold text-slate-700 leading-relaxed mb-6 md:mb-12">
            毎日の野菜発注も、お客様へのメニュー提案も
            <br />
            <span className="text-orange-500 font-black text-xl md:text-3xl lg:text-4xl mt-2 inline-block">
              LINEで簡単シンプルに解決！
            </span>
          </h1>

          {/* 4. Mockup Area with Badge */}
          <div className="relative mx-auto max-w-4xl mt-2 md:mt-0">
            {/* Main Mockup Image */}
            <div className="relative z-10">
              <img
                src="/images/hero-smartphone-mockup.png"
                alt="ベジコベアプリの発注画面"
                className="w-[220px] md:w-[300px] lg:max-w-[360px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Stamp Badge - Mobile & Desktop */}
            <div className="absolute bottom-[20px] -left-[10px] md:top-1/2 md:-translate-y-1/2 md:left-10 lg:left-20 z-20 rotate-[-10deg]">
              <div className="bg-white rounded-full p-1 shadow-xl scale-75 md:scale-100">
                <div className="bg-white border-4 border-orange-500 rounded-full w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center text-center p-2 shadow-inner">
                  <span className="text-emerald-500 font-black text-lg md:text-2xl leading-none mb-1">LINE</span>
                  <span className="text-slate-700 font-bold text-xs md:text-base">で</span>
                  <span className="text-orange-500 font-black text-base md:text-xl leading-tight">
                    かんたん
                    <br />
                    受発注！
                  </span>
                </div>
              </div>
            </div>

            {/* Background Device Hint (PC Screen style background) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vw] md:w-[120%] md:h-[80%] bg-slate-800 rounded-[1rem] md:rounded-[2rem] -z-10 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-slate-300">
              <div className="w-full h-full bg-slate-100 relative">
                {/* Fake UI elements for PC screen background */}
                <div className="absolute top-0 w-full h-8 bg-slate-200 border-b border-slate-300 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mt-12 ml-8 space-y-4 opacity-30">
                  <div className="w-1/3 h-4 bg-slate-300 rounded"></div>
                  <div className="w-2/3 h-4 bg-slate-300 rounded"></div>
                  <div className="w-1/2 h-4 bg-slate-300 rounded"></div>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="h-20 bg-slate-300 rounded"></div>
                    <div className="h-20 bg-slate-300 rounded"></div>
                    <div className="h-20 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Bottom CTA Area */}
          <div className="mt-8 md:mt-[-2rem] relative z-30 px-4">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-100 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-3 shadow-xl max-w-2xl mx-auto w-full">
              <div className="text-center md:text-left flex-1">
                <p className="text-orange-600 font-bold text-xs md:text-base bg-orange-50 inline-block px-3 py-1 rounded-full mb-1">
                  \ まずは無料で相談 /
                </p>
                <p className="text-slate-700 font-bold text-sm md:text-lg">
                  1分でベジコベのことが分かる！
                </p>
              </div>
              <Button
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black text-lg md:text-xl py-6 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse hover:animate-none"
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
