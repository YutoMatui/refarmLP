import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-white">
      {/* 背景の装飾 */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-orange-50 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-emerald-50 blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* テキストコンテンツエリア */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10 order-2 lg:order-1 animate-fade-in-up">
            {/* タグ風の見出し - スマホでは画像より上に、PCではより大きく */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 mb-8 md:mb-10">
              <span className="bg-orange-500 text-white text-sm md:text-2xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm">
                客単価UP
              </span>
              <span className="text-slate-400 font-bold text-lg md:text-3xl">×</span>
              <span className="bg-emerald-500 text-white text-sm md:text-2xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm">
                リピート率UP
              </span>
              <span className="text-slate-600 text-sm md:text-2xl font-bold">を実現</span>
            </div>

            {/* メインコピー */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] mb-10 md:mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                「選ばれる」飲食店
              </span>
              <br />
              への最短ルート。
            </h1>

            {/* CTAエリア */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-7 px-10 rounded-2xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 active:translate-y-0"
                onClick={() => handleLineClick("Hero CTA Consult")}
              >
                LINEで無料相談を始める
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-lg py-7 px-10 rounded-2xl transition-all"
                onClick={() => handleLineClick("Hero CTA Download")}
              >
                資料をダウンロード
              </Button>
            </div>
          </div>

          {/* 画像エリア */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in-up animate-delay-200">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* メイン画像（オーナー） */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/hero-owner.jpg"
                  alt="成長を実感する飲食店オーナー"
                  className="w-full h-auto object-cover aspect-[3/4] md:aspect-square lg:aspect-[4/5]"
                />
                {/* 画像上のオーバーレイ（スマホで見えやすく） */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 right-6 md:hidden">
                  <p className="text-white font-bold text-lg leading-tight">
                    「選ばれる」飲食店への最短ルート
                  </p>
                </div>
              </div>

              {/* 背景のドット装飾 */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20">
                <div className="w-full h-full bg-[radial-gradient(#e2e8f0_2px,transparent_1px)] [background-size:20px_2px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
