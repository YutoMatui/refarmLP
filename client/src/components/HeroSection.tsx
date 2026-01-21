import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden bg-gradient-to-b from-[#00CED1] via-[#20E3D1] to-[#90EE90] min-h-screen flex flex-col">
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        <div className="text-center max-w-4xl mx-auto flex flex-col justify-center flex-1">

          {/* Main Headline */}
          <h1 className="text-white font-black text-2xl md:text-4xl lg:text-5xl leading-tight mb-3 md:mb-6 drop-shadow-md">
            "リピート率UP"&"客単価UP"
            <br />
            をお任せください！
          </h1>

          {/* Subheadline */}
          <p className="text-white text-sm md:text-lg lg:text-xl font-medium leading-relaxed mb-6 md:mb-10 drop-shadow-sm">
            神戸のこだわり野菜とLINE活用で一見さんを常
            <br className="hidden md:inline" />
            連客に変える、一気通貫のファン化システム。
          </p>

          {/* Phone Mockups with Badge */}
          <div className="relative mx-auto max-w-2xl mb-6 md:mb-8 flex justify-center items-end gap-4 md:gap-6 px-4">
            {/* Left Phone */}
            <div className="relative z-10 w-[42%] max-w-[200px]">
              <img
                src="/images/hero-app-screen-farmer.png"
                alt="農家さんのこだわりが見える画面"
                className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] border-4 md:border-[6px] border-black shadow-2xl"
              />
            </div>

            {/* Right Phone - positioned slightly lower */}
            <div className="relative z-10 w-[42%] max-w-[200px] mt-6 md:mt-10">
              <img
                src="/images/hero-app-screen-products.png"
                alt="新鮮な野菜が一覧できる画面"
                className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] border-4 md:border-[6px] border-black shadow-2xl"
              />
            </div>

            {/* Orange Badge - positioned between phones */}
            <div className="absolute bottom-[-20px] md:bottom-[-30px] left-1/2 -translate-x-1/2 z-20">
              <div className="bg-orange-500 rounded-full w-32 h-32 md:w-44 md:h-44 flex items-center justify-center text-center shadow-2xl border-4 border-white">
                <div className="flex flex-col items-center">
                  <span className="text-white font-black text-sm md:text-lg leading-tight">
                    LINEで
                    <br />
                    かんたん
                    <br />
                    発注！
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="relative z-30 px-4 mt-8 md:mt-12">
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl max-w-3xl mx-auto">
              <p className="text-slate-700 font-bold text-sm md:text-base mb-4 text-center">
                1分でベジコベのことが分かる！
              </p>

              {/* Top Row Buttons */}
              <div className="flex flex-col md:flex-row gap-3 mb-3">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-sm md:text-base py-4 md:py-6 rounded-xl shadow-sm"
                  onClick={() => handleLineClick("Hero CTA Download")}
                >
                  資料ダウンロード
                </Button>
                <Button
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm md:text-base py-4 md:py-6 rounded-xl shadow-md"
                  onClick={() => handleLineClick("Hero CTA Consult")}
                >
                  LINEで無料相談
                </Button>
              </div>

              {/* Bottom Row Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm md:text-base py-4 md:py-6 rounded-xl shadow-md"
                  onClick={() => handleLineClick("Hero CTA Line")}
                >
                  LINEで無料相談
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-sm md:text-base py-4 md:py-6 rounded-xl shadow-sm"
                  onClick={() => handleLineClick("Hero CTA Download2")}
                >
                  資料をダウンロード →
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
