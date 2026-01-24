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
            {/* タグ風の見出し */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="bg-orange-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                客単価UP
              </span>
              <span className="text-slate-400 font-bold">×</span>
              <span className="bg-emerald-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                リピート率UP
              </span>
              <span className="text-slate-600 text-xs md:text-sm font-medium ml-1">を実現</span>
            </div>

            {/* メインコピー */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                「選ばれる」飲食店
              </span>
              <br />
              への最短ルート。
            </h1>

            <p className="text-base md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              こだわりの食材仕入れから、常連客をつかむ仕組みづくりまで。
              <br className="hidden md:block" />
              ベジコベは、忙しいオーナー様の「成長」をLINE一本で支えます。
            </p>

            {/* CTAエリア */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
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

            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm font-medium">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              <span>導入店舗数 急増中</span>
              <span className="mx-2">|</span>
              <span>最短即日から利用可能</span>
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
                    「仕入れを変えてから、<br />お客様の反応が変わりました」
                  </p>
                </div>
              </div>

              {/* 装飾要素：実績バッジ */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 z-20 bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-orange-50">
                <div className="text-center">
                  <p className="text-orange-500 font-black text-2xl md:text-4xl leading-none">120%</p>
                  <p className="text-slate-600 font-bold text-xs md:text-sm mt-1">平均客単価UP</p>
                </div>
              </div>

              {/* 装飾要素：スマホ画面のチラ見せ */}
              <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 z-20 w-32 md:w-48 animate-bounce-slow">
                <img
                  src="/images/hero-app-screen-products.png"
                  alt="アプリ画面"
                  className="w-full h-auto rounded-2xl md:rounded-3xl border-4 border-white shadow-xl rotate-12"
                />
              </div>

              {/* 背景のドット装飾 */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20">
                <div className="w-full h-full bg-[radial-gradient(#e2e8f0_2px,transparent_1px)] [background-size:20px_2px]" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
