import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    // パディングをさらに詰めてコンパクトに (pt-16 pb-4)
    <section className="relative pt-16 pb-4 md:pt-28 md:pb-16 overflow-hidden bg-[#fafaf8]">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-orange-100/60 blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-100/60 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* h-screenに近づけて一画面収まりを意識 */}
        <div className="text-center max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-0">

          {/* 1. Top Tags: マージン削減 */}
          <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-4 mb-2 md:mb-6">
            <div className="bg-white border md:border-2 border-slate-800 px-2 py-1 md:px-6 md:py-3 rounded-md md:rounded-lg shadow-sm whitespace-nowrap">
              <span className="text-slate-800 font-bold text-xs md:text-2xl tracking-wide">
                客単価アップ
              </span>
            </div>
            <span className="text-slate-400 text-lg md:text-4xl font-black mx-1">×</span>
            <div className="bg-white border md:border-2 border-slate-800 px-2 py-1 md:px-6 md:py-3 rounded-md md:rounded-lg shadow-sm whitespace-nowrap">
              <span className="text-slate-800 font-bold text-xs md:text-2xl tracking-wide">
                リピート率アップ
              </span>
            </div>
            <span className="text-slate-700 font-bold text-xs md:text-2xl pt-1 ml-1 whitespace-nowrap">なら</span>
          </div>

          {/* 2. Logo: マージン削減 */}
          <div className="mb-2 md:mb-8 flex justify-center">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-14 md:h-28 w-auto object-contain"
            />
          </div>

          {/* 3. Main Copy: マージン削減 */}
          <h1 className="text-sm md:text-2xl lg:text-3xl font-bold text-slate-700 leading-tight mb-4 md:mb-8">
            毎日の野菜発注も、
            <span className="inline-block">お店の差別化も</span>
            <br />
            <span className="text-orange-500 font-black text-xl md:text-4xl lg:text-5xl mt-1 inline-block">
              LINEで簡単シンプルに解決！
            </span>
          </h1>

          {/* 4. Mockup Area (2枚横並び、CSSでスマホ枠再現) */}
          <div className="relative mx-auto max-w-3xl mt-2 md:mt-0 mb-4 flex justify-center gap-3 md:gap-6 px-2">

            {/* 左の画像（農家さん） */}
            <div className="relative z-10 w-[45%] md:w-[40%] max-w-[220px]">
              {/* CSSでスマホ風の枠を作成 */}
              <img
                src="/images/hero-app-screen-farmer.png" // 変更したファイル名
                alt="農家さんのこだわりが見える画面"
                className="w-full h-auto rounded-[1.2rem] md:rounded-[2rem] border-4 md:border-8 border-slate-700 shadow-xl"
              />
            </div>

            {/* 右の画像（野菜一覧） */}
            <div className="relative z-10 w-[45%] md:w-[40%] max-w-[220px] mt-4 md:mt-8"> {/* 右側を少し下げてリズム感を出す */}
              <img
                src="/images/hero-app-screen-products.png" // 変更したファイル名
                alt="新鮮な野菜が一覧できる画面"
                className="w-full h-auto rounded-[1.2rem] md:rounded-[2rem] border-4 md:border-8 border-slate-700 shadow-xl"
              />
            </div>

            {/* Stamp Badge: 位置を中央寄りに調整 */}
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-20 rotate-[-5deg]">
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
          </div>

          {/* 5. Bottom CTA Area: マージンをマイナスにして上に詰める */}
          <div className="relative z-30 px-2 md:px-4 mt-[-1rem] md:mt-4">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-100 rounded-xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 shadow-lg max-w-3xl mx-auto w-full">
              <div className="text-center md:text-left flex-1 md:mb-0 mb-1">
                <p className="text-slate-700 font-bold text-xs md:text-lg">
                  1分でベジコベのことが分かる！
                </p>
              </div>
              <div className="flex flex-row gap-2 w-full md:w-auto justify-center">
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-xs md:text-base py-2 px-2 md:px-6 rounded-lg shadow-sm whitespace-nowrap h-auto leading-tight"
                  onClick={() => handleLineClick("Hero CTA Download")}
                >
                  資料ダウンロード
                </Button>
                <Button
                  className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-white font-black text-xs md:text-base py-2 px-2 md:px-6 rounded-lg shadow-md hover:shadow-xl transition-all animate-pulse hover:animate-none whitespace-nowrap h-auto leading-tight"
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