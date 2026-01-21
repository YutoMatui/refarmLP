import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600">
      {/* Subtle gradient overlay effects */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-teal-300/30 to-transparent blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-emerald-600/30 to-transparent blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto flex flex-col justify-center">

          {/* 1. Top Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-md">
              <span className="text-slate-800 font-bold text-sm md:text-xl">
                客単価アップ
              </span>
            </div>
            <span className="text-white text-xl md:text-3xl font-black">×</span>
            <div className="bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-md">
              <span className="text-slate-800 font-bold text-sm md:text-xl">
                リピート率アップ
              </span>
            </div>
            <span className="text-white font-bold text-sm md:text-xl ml-1">なら</span>
          </div>

          {/* 2. Logo */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <div className="bg-white px-8 py-3 md:px-12 md:py-4 rounded-2xl shadow-lg">
              <img
                src="/images/logo.png"
                alt="ベジコベ"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* 3. Main Copy */}
          <div className="bg-white rounded-2xl md:rounded-3xl px-6 py-5 md:px-10 md:py-6 shadow-xl mb-6 md:mb-8 max-w-xl mx-auto">
            <h1 className="text-base md:text-2xl font-bold text-slate-800 leading-tight mb-2">
              毎日の野菜発注も、お店の差別化も
            </h1>
            <p className="text-xl md:text-4xl font-black text-orange-500 leading-tight">
              LINEで簡単シンプルに解決！
            </p>
          </div>

          {/* 4. Mockup Area */}
          <div className="relative mx-auto max-w-3xl mb-6 md:mb-8 flex justify-center gap-3 md:gap-6 px-2">
            {/* 左の画像（農家さん） */}
            <div className="relative z-10 w-[42%] md:w-[38%] max-w-[200px]">
              <img
                src="/images/hero-app-screen-farmer.png"
                alt="農家さんのこだわりが見える画面"
                className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] border-4 md:border-8 border-slate-800 shadow-2xl"
              />
            </div>

            {/* 右の画像（野菜一覧） */}
            <div className="relative z-10 w-[42%] md:w-[38%] max-w-[200px] mt-6 md:mt-10">
              <img
                src="/images/hero-app-screen-products.png"
                alt="新鮮な野菜が一覧できる画面"
                className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] border-4 md:border-8 border-slate-800 shadow-2xl"
              />
            </div>

            {/* Orange Circle Badge */}
            <div className="absolute bottom-[-20px] md:bottom-[-30px] left-1/2 -translate-x-1/2 z-20">
              <div className="bg-orange-500 rounded-full w-32 h-32 md:w-44 md:h-44 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white">
                <span className="text-white font-black text-base md:text-xl leading-tight">
                  LINEで
                  <br />
                  かんたん
                  <br />
                  受注！
                </span>
              </div>
            </div>
          </div>

          {/* 5. Bottom CTA Area */}
          <div className="relative z-30 px-2 md:px-4 mt-8 md:mt-12">
            {/* Top Text */}
            <div className="bg-white rounded-t-2xl md:rounded-t-3xl px-6 py-4 md:px-8 md:py-5 shadow-lg">
              <p className="text-slate-800 font-bold text-base md:text-xl">
                1分でベジコベのことが分かる！
              </p>
            </div>

            {/* Middle Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 bg-white border-t border-slate-100">
              <Button
                variant="outline"
                className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-sm md:text-lg py-5 md:py-6 rounded-full shadow-sm transition-all"
                onClick={() => handleLineClick("Hero CTA Download 1")}
              >
                資料ダウンロード
              </Button>
              <Button
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm md:text-lg py-5 md:py-6 rounded-full shadow-md hover:shadow-xl transition-all"
                onClick={() => handleLineClick("Hero CTA Consult 1")}
              >
                LINEで無料相談
              </Button>
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 bg-white rounded-b-2xl md:rounded-b-3xl shadow-lg border-t border-slate-100">
              <Button
                className="flex-1 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-sm md:text-lg py-5 md:py-6 rounded-full shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
                onClick={() => handleLineClick("Hero CTA Consult 2")}
              >
                <MessageCircle className="w-5 h-5" />
                LINEで無料相談
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-sm md:text-lg py-5 md:py-6 rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
                onClick={() => handleLineClick("Hero CTA Download 2")}
              >
                資料をダウンロード
                <span className="text-xl">→</span>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
