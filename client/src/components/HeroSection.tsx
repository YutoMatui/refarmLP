import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    // Padding reduced for compactness on mobile (pt-20 pb-8)
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden bg-[#fafaf8]">
      {/* Background Decor Elements (Kept subtle gradients) */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-orange-100/60 blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-100/60 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto h-full flex flex-col justify-center">

          {/* 1. Top Tags: Compacted for mobile fit */}
          <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-4 mb-4 md:mb-8">
            <div className="bg-white border md:border-2 border-slate-800 px-2 py-1 md:px-6 md:py-3 rounded-md md:rounded-lg shadow-sm whitespace-nowrap">
              {/* Font size reduced to text-xs on mobile */}
              <span className="text-slate-800 font-bold text-xs md:text-2xl tracking-wide">
                客単価アップ
              </span>
            </div>
            <span className="text-slate-400 text-lg md:text-4xl font-black mx-1">×</span>
            <div className="bg-white border md:border-2 border-slate-800 px-2 py-1 md:px-6 md:py-3 rounded-md md:rounded-lg shadow-sm whitespace-nowrap">
              {/* Font size reduced to text-xs on mobile */}
              <span className="text-slate-800 font-bold text-xs md:text-2xl tracking-wide">
                リピート率アップ
              </span>
            </div>
            <span className="text-slate-700 font-bold text-xs md:text-2xl pt-1 ml-1 whitespace-nowrap">なら</span>
          </div>

          {/* 2. Big Logo Center: Slightly smaller margin and height on mobile */}
          <div className="mb-4 md:mb-10 flex justify-center">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-16 md:h-32 w-auto object-contain" // h-24 -> h-16
            />
          </div>

          {/* 3. Main Copy: Wording changed, size adjusted for compactness */}
          <h1 className="text-sm md:text-2xl lg:text-3xl font-bold text-slate-700 leading-relaxed mb-4 md:mb-10">
            毎日の野菜発注も、
            <span className="inline-block">お店の差別化も</span>
            <br />
            <span className="text-orange-500 font-black text-xl md:text-4xl lg:text-5xl mt-2 inline-block">
              LINEで簡単シンプルに解決！
            </span>
          </h1>

          {/* 4. Mockup Area: Background hint removed, image size adjusted */}
          <div className="relative mx-auto max-w-4xl mt-2 md:mt-0 flex-grow-0">
            {/* Main Mockup Image: Slightly smaller on mobile to fit screen */}
            <div className="relative z-10">
              <img
                src="/images/hero-smartphone-mockup.png"
                alt="ベジコベアプリの発注画面"
                className="w-[200px] md:w-[360px] lg:max-w-[420px] mx-auto drop-shadow-2xl" // w-[260px] -> w-[200px]
              />
            </div>

            {/* Stamp Badge: Adjusted position and scale for new image size */}
            <div className="absolute bottom-[20px] -left-[10px] md:top-1/2 md:-translate-y-1/2 md:left-0 lg:left-10 z-20 rotate-[-10deg]">
              <div className="bg-white rounded-full p-1 shadow-xl scale-75 md:scale-110">
                <div className="bg-white border-4 border-orange-500 rounded-full w-28 h-28 md:w-48 md:h-48 flex flex-col items-center justify-center text-center p-2 shadow-inner">
                  <span className="text-emerald-500 font-black text-lg md:text-3xl leading-none mb-1">LINE</span>
                  <span className="text-slate-700 font-bold text-xs md:text-lg">で</span>
                  <span className="text-orange-500 font-black text-base md:text-2xl leading-tight">
                    かんたん
                    <br />
                    受発注！
                  </span>
                </div>
              </div>
            </div>

            {/* REMOVED: Background Device Hint (PC Screen style background) */}
          </div>

          {/* 5. Bottom CTA Area: Margin reduced to pull it up */}
          <div className="mt-4 md:mt-[-3rem] relative z-30 px-2 md:px-4">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-100 rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-3 md:gap-4 shadow-xl max-w-3xl mx-auto w-full">
              <div className="text-center md:text-left flex-1">
                <p className="text-slate-700 font-bold text-xs md:text-lg">
                  1分でベジコベのことが分かる！
                </p>
              </div>
              {/* Buttons: text size slightly smaller on mobile for fit */}
              <div className="flex flex-row gap-2 w-full md:w-auto justify-center">
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-xs md:text-lg py-3 px-2 md:px-6 rounded-xl shadow-sm whitespace-nowrap"
                  onClick={() => handleLineClick("Hero CTA Download")}
                >
                  資料ダウンロード
                </Button>
                <Button
                  className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-white font-black text-xs md:text-lg py-3 px-2 md:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse hover:animate-none whitespace-nowrap"
                  onClick={() => handleLineClick("Hero CTA Consult")}
                >
                  LINEで無料相談
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}