import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";
import { ArrowRight } from "lucide-react"; // アイコン用に必要であれば追加、なければ削除可

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    // 背景を画像に合わせてグリーン→白のグラデーションに変更
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#2dc4a9] via-[#8ae6d5] to-white">

      {/* 背景の装飾（光の反射など） */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-yellow-100/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col justify-center items-center">

          {/* 1. Main Copy: 白文字でドロップシャドウ付きに変更 */}
          <h1 className="text-white drop-shadow-md font-bold leading-tight mb-6 tracking-wide">
            <span className="block text-xl md:text-4xl mb-2 md:mb-4">
              "リピート率UP" <span className="text-yellow-300">&</span> "客単価UP"
            </span>
            <span className="block text-2xl md:text-5xl">
              をお任せください！
            </span>
          </h1>

          {/* 2. Sub Copy: 指定されたテキストに変更 */}
          <p className="text-white/90 font-bold text-sm md:text-xl md:leading-relaxed mb-8 md:mb-12 max-w-2xl drop-shadow-sm">
            神戸のこだわり野菜とLINE活用で、新規客を
            <br className="md:hidden" />
            ファンに変える一気通貫システム。
          </p>

          {/* 3. Mockup Area (斜め配置を再現) */}
          <div className="relative w-full max-w-3xl mx-auto mb-10 md:mb-16">
            <div className="flex justify-center items-end gap-2 md:gap-8 px-2">

              {/* 左の画像（左に少し傾ける） */}
              <div className="relative z-10 w-[42%] max-w-[240px] transform -rotate-6 translate-y-4 md:translate-y-0 transition-transform hover:scale-105 duration-500">
                <img
                  src="/images/hero-app-screen-farmer.png"
                  alt="農家さんのこだわりが見える画面"
                  className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] md:border-[6px] border-slate-800 shadow-2xl bg-white"
                />
              </div>

              {/* 右の画像（右に少し傾ける） */}
              <div className="relative z-10 w-[42%] max-w-[240px] transform rotate-6 translate-y-4 md:translate-y-0 transition-transform hover:scale-105 duration-500">
                <img
                  src="/images/hero-app-screen-products.png"
                  alt="新鮮な野菜が一覧できる画面"
                  className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] md:border-[6px] border-slate-800 shadow-2xl bg-white"
                />
              </div>

              {/* Stamp Badge: 中央に配置 */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 translate-y-1/2">
                <div className="bg-white rounded-full p-1.5 shadow-2xl animate-bounce-slow">
                  <div className="bg-orange-500 text-white rounded-full w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center text-center shadow-inner border-2 border-orange-400">
                    <span className="font-bold text-sm md:text-lg mb-0.5">LINEで</span>
                    <span className="font-black text-lg md:text-2xl leading-none">
                      ファンを<br />増やす！
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Bottom CTA Area: 白いカード風デザイン */}
          <div className="w-full max-w-3xl mx-auto px-2">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-orange-100/50">

              <div className="text-center mb-4 md:mb-6">
                <p className="text-slate-800 font-bold text-sm md:text-xl flex items-center justify-center gap-2">
                  <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs md:text-sm">CHECK</span>
                  1分でベジコベのことが分かる！
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                {/* 資料ダウンロードボタン */}
                <Button
                  variant="outline"
                  className="w-full md:w-auto flex-1 max-w-xs border-2 border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 font-bold rounded-full py-6 md:py-7 text-sm md:text-lg shadow-sm transition-all"
                  onClick={() => handleLineClick("Hero CTA Download")}
                >
                  資料ダウンロード
                </Button>

                {/* LINE相談ボタン */}
                <Button
                  className="w-full md:w-auto flex-1 max-w-xs bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full py-6 md:py-7 text-sm md:text-lg shadow-md hover:shadow-lg transition-all"
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