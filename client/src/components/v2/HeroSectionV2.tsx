import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";
import { trackLineClick, trackDownloadClick } from "@/lib/fbpixel";
import { ArrowRight } from "lucide-react";

export default function HeroSectionV2() {
  const handleCTAClick = () => {
    // Google Analytics tracking
    trackLineRegistration("VegeKobe Hero Section");
    trackCTAClick("VegeKobe CTA", "Hero");

    // Meta Pixel tracking
    trackLineClick("VegeKobe Hero Section");

    // Open the booking link
    window.open("https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv", "_blank");
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-white pt-20 lg:pt-0">
      {/* 背景グラデーション装飾 */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-emerald-50 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-orange-50 blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-2 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
          {/* スマホ用：見出しの上のタグ */}
          <div className="w-full flex flex-col items-center justify-center lg:hidden order-1 mb-4 mt-2">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              神戸市内の飲食店限定
            </div>
            <h1 className="text-3xl xs:text-4xl font-black text-slate-900 text-center leading-tight mb-2">
              生産者の「顔」と「想い」が見えるから、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                お店のファンが増える。
              </span>
            </h1>
          </div>

          {/* 画像エリア */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 animate-fade-in-up animate-delay-200">
            <div className="relative mx-auto max-w-[320px] xs:max-w-[360px] lg:max-w-none">
              {/* メイン画像：スマートフォンモックアップ */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white transition-transform duration-500">
                <img
                  src="https://via.placeholder.com/400x800/E8F5E9/2E7D32?text=VegeKobe+App"
                  alt="VegeKobeアプリ画面"
                  className="w-full h-auto object-cover aspect-[9/16] md:aspect-[3/4]"
                />
              </div>

              {/* 背景のドット装飾 */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20">
                <div className="w-full h-full bg-[radial-gradient(#e2e8f0_2px,transparent_1px)] [background-size:20px_2px]" />
              </div>
            </div>
          </div>

          {/* テキストコンテンツエリア */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10 order-3 lg:order-1 animate-fade-in-up">
            {/* PC用：見出し */}
            <div className="hidden lg:block mb-6">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                神戸市内の飲食店限定
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] mb-4">
                生産者の「顔」と「想い」が<br />
                見えるから、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  お店のファンが増える。
                </span>
              </h1>
            </div>

            {/* サブコピー */}
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6">
              神戸市内の飲食店限定・地産地消プラットフォーム「ベジコベ」
            </p>

            {/* CTAエリア */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm md:text-base py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-lg shadow-emerald-200 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
                onClick={handleCTAClick}
              >
                神戸のこだわり野菜を受け取る
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* マイクロコピー */}
            <p className="text-slate-500 text-xs md:text-sm mt-3">
              ※ まずは無料でお試し配送
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
