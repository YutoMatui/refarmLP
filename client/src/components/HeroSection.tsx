import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";
import { trackLineClick, trackDownloadClick } from "@/lib/fbpixel";

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

      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

          {/* スマホ用：画像の上のタグ */}
          <div className="w-full flex justify-center lg:hidden order-1">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4 w-full">
              <div className="flex items-center gap-2">
                <span className="bg-orange-500 text-white text-lg font-bold px-5 py-2.5 rounded-full shadow-md whitespace-nowrap">
                  客単価UP
                </span>
                <span className="text-slate-400 font-bold text-xl">×</span>
                <span className="bg-emerald-500 text-white text-lg font-bold px-5 py-2.5 rounded-full shadow-md whitespace-nowrap">
                  リピート率UP
                </span>
              </div>
              <span className="text-slate-600 text-base font-bold mt-1">を実現</span>
            </div>
          </div>

          {/* 画像エリア */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 animate-fade-in-up animate-delay-200">
            <div className="relative mx-auto max-w-[340px] lg:max-w-none">
              {/* メイン画像（オーナー） */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/hero-owner.jpg"
                  alt="成長を実感する飲食店オーナー"
                  className="w-full h-auto object-cover aspect-[3/4] md:aspect-square lg:aspect-[3/4]"
                />
                {/* スマホ用：画像上に白のテキストを重ねる */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                <div className="absolute bottom-6 left-4 right-4 lg:hidden text-center">
                  <h2 className="text-white font-black text-3xl leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] tracking-tight">
                    <span className="inline-block mb-1 text-orange-400">「選ばれる」</span>飲食店<br />
                    への<span className="text-emerald-300">最短ルート</span>。
                  </h2>
                </div>
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
