import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden bg-gradient-to-b from-orange-50/30 via-white to-emerald-50/20">
      {/* 背景装飾 - より柔らかく */}
      <div className="absolute top-[-15%] right-[-10%] w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-orange-200/40 to-orange-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-[10%] left-[-15%] w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-emerald-200/40 to-emerald-100/30 blur-3xl -z-10" />

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">

          {/* 1. トップバッジ - デザイン性向上 */}
          <div className="flex items-center justify-center mb-5 md:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl md:rounded-3xl blur-lg opacity-60"></div>
              <div className="relative bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 border-3 border-white px-5 py-2.5 md:px-10 md:py-4 rounded-2xl md:rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-4xl">📈</span>
                  <span className="text-white font-black text-sm md:text-2xl lg:text-3xl tracking-wide leading-tight">
                    飲食店の<span className="inline-block">客単価UP</span>×<span className="inline-block">リピート率UP</span><br className="md:hidden" />を実現
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ロゴ */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-12 md:h-24 w-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* 3. メインコピー - タイポグラフィ改善 */}
          <h1 className="text-base md:text-2xl lg:text-3xl font-bold text-slate-700 leading-tight mb-5 md:mb-8 px-2">
            <span className="inline-block">毎日の野菜発注も、</span>
            <span className="inline-block">お店の差別化も</span>
            <br />
            <span className="relative inline-block mt-2 md:mt-3">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 blur-xl opacity-30"></span>
              <span className="relative bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 bg-clip-text text-transparent font-black text-xl md:text-4xl lg:text-5xl tracking-tight">
                LINEで簡単シンプルに解決！
              </span>
            </span>
          </h1>

          {/* 4. メイン画像 - 飲食店オーナーの成長イメージ */}
          <div className="relative mx-auto max-w-4xl mb-6 md:mb-8 px-2 md:px-4">
            {/* 装飾的な背景要素 */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-28 md:w-44 md:h-44 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-2xl opacity-60 -z-10"></div>
            
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-6 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/restaurant-owner.jpg"
                alt="サービスを導入して成長する飲食店オーナー"
                className="w-full h-auto object-cover"
              />
              {/* オーバーレイバッジ - デザイン改善 */}
              <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-white/98 backdrop-blur-md rounded-xl md:rounded-2xl p-2.5 md:p-4 shadow-2xl border-2 md:border-3 border-emerald-400">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-1.5 md:p-2">
                    <span className="text-orange-500 font-black text-lg md:text-2xl leading-none">↑</span>
                    <span className="text-emerald-600 font-black text-[10px] md:text-xs leading-tight mt-0.5">成長中</span>
                  </div>
                  <div className="border-l-2 border-slate-200 h-10 md:h-14"></div>
                  <div>
                    <p className="text-slate-700 font-bold text-[11px] md:text-sm leading-tight mb-0.5">
                      導入店舗
                    </p>
                    <p className="text-orange-500 font-black text-base md:text-xl leading-tight">
                      続々増加中！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. CTAエリア - スマホ最適化 */}
          <div className="relative z-30 px-2 md:px-4">
            <div className="bg-gradient-to-br from-white via-orange-50/20 to-emerald-50/20 border-2 border-orange-200/60 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl max-w-4xl mx-auto backdrop-blur-sm">
              <div className="text-center mb-4 md:mb-6">
                <p className="text-slate-800 font-black text-sm md:text-xl lg:text-2xl mb-1.5 md:mb-2 leading-tight">
                  <span className="inline-block">飲食店の</span>
                  <span className="text-orange-500 inline-block">客単価UP</span>
                  <span className="inline-block">×</span>
                  <span className="text-emerald-600 inline-block">リピート率UP</span>
                  <span className="inline-block">を実現</span>
                </p>
                <p className="text-slate-600 font-medium text-xs md:text-base">
                  まずは無料でお試しいただけます
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 w-full justify-center items-stretch">
                <Button
                  className="flex-1 sm:flex-none bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-base md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-pulse hover:animate-none transform hover:-translate-y-1 h-auto min-w-[200px]"
                  onClick={() => handleLineClick("Hero CTA Start")}
                >
                  <span className="flex flex-col items-center leading-tight">
                    <span className="text-xs md:text-sm font-medium opacity-90">今すぐ</span>
                    <span className="text-base md:text-xl">無料で利用開始</span>
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 sm:flex-none border-2 md:border-3 border-slate-800 bg-white text-slate-800 hover:bg-slate-50 font-bold text-base md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 h-auto min-w-[200px]"
                  onClick={() => handleLineClick("Hero CTA Document")}
                >
                  <span className="flex items-center gap-2">
                    <span>📄</span>
                    <span>資料請求</span>
                  </span>
                </Button>
              </div>
              <p className="text-slate-500 text-[10px] md:text-sm mt-3 md:mt-4 font-medium">
                ※クレジットカード不要・いつでもキャンセル可能
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
