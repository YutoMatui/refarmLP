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
      {/* Background Decor Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-orange-100/60 blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-100/60 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* 1. Top Tags: Larger text like TANOMU */}
          <div className="flex flex-nowrap items-center justify-center gap-2 md:gap-4 mb-6 md:mb-10">
            <div className="bg-white border-2 border-slate-800 px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-sm whitespace-nowrap">
              <span className="text-slate-800 font-bold text-lg md:text-2xl tracking-wide">
                客単価アップ
              </span>
            </div>
            <span className="text-slate-400 text-2xl md:text-4xl font-black mx-2">×</span>
            <div className="bg-white border-2 border-slate-800 px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-sm whitespace-nowrap">
              <span className="text-slate-800 font-bold text-lg md:text-2xl tracking-wide">
                リピート率アップ
              </span>
            </div>
            <span className="text-slate-700 font-bold text-lg md:text-2xl pt-1 ml-2 whitespace-nowrap">なら</span>
          </div>

          {/* 2. Big Logo Center */}
          <div className="mb-6 md:mb-12 flex justify-center">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-24 md:h-40 w-auto object-contain"
            />
          </div>

          {/* 3. Main Copy */}
          <h1 className="text-base md:text-2xl lg:text-3xl font-bold text-slate-700 leading-relaxed mb-8 md:mb-16">
            毎日の野菜発注も、お客様へのメニュー提案も
            <br />
            <span className="text-orange-500 font-black text-2xl md:text-4xl lg:text-5xl mt-3 inline-block">
              LINEで簡単シンプルに解決！
            </span>
          </h1>

          {/* 4. Mockup Area with Badge */}
          <div className="relative mx-auto max-w-4xl mt-4 md:mt-0">
            {/* Main Mockup Image */}
            <div className="relative z-10">
              <img
                src="/images/hero-smartphone-mockup.png"
                alt="ベジコベアプリの発注画面"
                className="w-[260px] md:w-[360px] lg:max-w-[420px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Stamp Badge - Mobile & Desktop */}
            <div className="absolute bottom-[30px] -left-[20px] md:top-1/2 md:-translate-y-1/2 md:left-0 lg:left-10 z-20 rotate-[-10deg]">
              <div className="bg-white rounded-full p-1 shadow-xl scale-90 md:scale-110">
                <div className="bg-white border-4 border-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex flex-col items-center justify-center text-center p-2 shadow-inner">
                  <span className="text-emerald-500 font-black text-xl md:text-3xl leading-none mb-1">LINE</span>
                  <span className="text-slate-700 font-bold text-sm md:text-lg">で</span>
                  <span className="text-orange-500 font-black text-lg md:text-2xl leading-tight">
                    かんたん
                    <br />
                    受発注！
                  </span>
                </div>
              </div>
            </div>

            {/* Background Device Hint (PC Screen style background) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[65vw] md:w-[130%] md:h-[90%] bg-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] -z-10 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-slate-300">
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

          {/* 5. Bottom CTA Area - Two Buttons */}
          <div className="mt-10 md:mt-[-3rem] relative z-30 px-4">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-100 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 shadow-xl max-w-3xl mx-auto w-full">
              <div className="text-center md:text-left flex-1">
                <p className="text-slate-700 font-bold text-sm md:text-lg">
                  1分でベジコベのことが分かる！
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-base md:text-lg py-4 px-6 rounded-xl shadow-sm"
                  onClick={() => handleLineClick("Hero CTA Download")}
                >
                  資料ダウンロード
                </Button>
                <Button
                  className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black text-base md:text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse hover:animate-none"
                  onClick={() => handleLineClick("Hero CTA Consult")}
                >
                  LINEで無料相談する
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}