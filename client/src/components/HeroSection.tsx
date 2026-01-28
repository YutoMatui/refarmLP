import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";
import { trackLineClick, trackDownloadClick } from "@/lib/fbpixel";
import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    // Google Analytics tracking
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");

    // Meta Pixel tracking
    if (buttonType.includes("Download")) {
      trackDownloadClick("Hero Section");
    } else {
      trackLineClick("Hero Section");
    }

    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-white pt-20 lg:pt-0">
      {/* 背景の装飾 */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-orange-50 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-emerald-50 blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-2 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">

          {/* スマホ用：画像の上のタグ */}
          <div className="w-full flex flex-col items-center justify-center lg:hidden order-1 mb-2 mt-2">
            <div className="flex items-center justify-center gap-1 mb-2 w-full px-1">
              <span className="bg-orange-500 text-white text-base xs:text-lg font-black px-3 py-2 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
                客単価UP
                <TrendingUp className="w-5 h-5 stroke-[3]" />
              </span>
              <span className="text-slate-400 font-black text-xl">×</span>
              <span className="bg-emerald-500 text-white text-base xs:text-lg font-black px-3 py-2 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
                リピート率UP
                <TrendingUp className="w-5 h-5 stroke-[3]" />
              </span>
              <span className="text-slate-600 text-xl font-black ml-0.5">を</span>
            </div>
            <div className="w-full text-center relative">
              <span className="block text-[3.5rem] xs:text-[4.5rem] font-black text-orange-500 tracking-widest drop-shadow-xl transform -rotate-3 py-2 leading-none">
                全力支援！
              </span>
              {/* 背景に大きな上昇矢印を配置して勢いを表現 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-10 flex justify-center items-center">
                <TrendingUp className="w-[120%] h-full text-orange-600" />
              </div>
            </div>
          </div>

          {/* 画像エリア */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 animate-fade-in-up animate-delay-200">
            <div className="relative mx-auto max-w-[320px] xs:max-w-[360px] lg:max-w-none">
              {/* メイン画像（オーナー） */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white transition-transform duration-500 mb-8 lg:mb-0">
                <img
                  src="/images/hero-owner.jpg"
                  alt="成長を実感する飲食店オーナー"
                  className="w-full h-auto object-cover aspect-[3/4] md:aspect-square lg:aspect-[3/4]"
                />

                {/* 緑のバッジ (スマホ用：画像下部に配置) */}
                <div className="absolute -bottom-10 right-0 left-0 mx-auto z-20 w-40 h-40 bg-emerald-600 rounded-full flex flex-col items-center justify-center shadow-xl border-[6px] border-white lg:hidden">
                  <span className="text-white font-bold text-[10px] tracking-wider mb-0.5">神戸エリア限定</span>
                  <span className="text-white font-black text-xl tracking-tight mb-0.5 text-yellow-300 drop-shadow-md">個人店特化</span>
                  <span className="text-white font-bold text-[10px] tracking-wider">DX・集客支援</span>
                </div>
              </div>

              {/* 個人店特化バッジ (PC用) */}
              <div className="hidden lg:flex absolute top-[-30px] right-[-30px] z-20 w-32 h-32 bg-yellow-400 rounded-full items-center justify-center shadow-xl border-4 border-white transform rotate-12">
                <span className="text-black font-black text-xl text-center leading-tight">
                  個人店<br />特化
                </span>
              </div>

              {/* 背景のドット装飾 */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20">
                <div className="w-full h-full bg-[radial-gradient(#e2e8f0_2px,transparent_1px)] [background-size:20px_2px]" />
              </div>
            </div>
          </div>

          {/* テキストコンテンツエリア */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10 order-3 lg:order-1 animate-fade-in-up">
            {/* PC用：タグ風の見出し - より上に配置 */}
            <div className="hidden lg:inline-flex flex-wrap items-center justify-start gap-3 mb-3">
              <span className="bg-orange-500 text-white text-xl font-bold px-5 py-2 rounded-full shadow-sm">
                客単価UP
              </span>
              <span className="text-slate-400 font-bold text-2xl">×</span>
              <span className="bg-emerald-500 text-white text-xl font-bold px-5 py-2 rounded-full shadow-sm">
                リピート率UP
              </span>
              <span className="text-slate-600 text-xl font-bold">を実現</span>
            </div>

            {/* メインコピー */}
            <h1 className="hidden lg:block text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                「選ばれる」飲食店
              </span>
              <br />
              への最短ルート。
            </h1>

            {/* PC用：説明文を追加 */}
            <p className="hidden lg:block text-slate-600 text-base leading-relaxed mb-6">
              こだわりの食材仕入れから、常連客をつかむ仕組みづくりまで。<br />
              忙しいオーナー様の成長をすべて解決します！
            </p>

            {/* CTAエリア */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3">
              <Button
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black text-sm md:text-base py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 active:translate-y-0"
                onClick={() => handleLineClick("Hero CTA Consult")}
              >
                LINEで無料相談を始める
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-sm md:text-base py-5 md:py-6 px-6 md:px-8 rounded-2xl transition-all"
                onClick={() => handleLineClick("Hero CTA Download")}
              >
                資料をダウンロード
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
