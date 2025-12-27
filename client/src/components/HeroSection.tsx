import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "../lib/gtag";

export default function HeroSection() {
  const handleLineClick = (buttonType: string) => {
    trackLineRegistration("Hero Section");
    trackCTAClick(buttonType, "Hero");
    window.open("https://lin.ee/qMfjf66", "_blank");
  };

  return (
    <section className="pt-20 md:pt-24 pb-8 md:pb-12 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="text-center">
          {/* Badge Tags - TANOMU style */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center bg-white border-2 border-slate-800 text-slate-800 px-4 py-2 rounded-lg text-sm md:text-base font-bold">
              客単価アップ
            </span>
            <span className="text-slate-400 text-xl md:text-2xl font-bold self-center">×</span>
            <span className="inline-flex items-center bg-white border-2 border-slate-800 text-slate-800 px-4 py-2 rounded-lg text-sm md:text-base font-bold">
              リピート率アップ
            </span>
            <span className="text-slate-600 text-base md:text-lg font-medium self-center">なら</span>
          </div>

          {/* Logo / Brand Name */}
          <div className="mb-6">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-12 md:h-16 mx-auto"
            />
          </div>

          {/* Main Catch Copy */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-600 leading-tight mb-4">
            朝採れ野菜と「野菜の物語」で
            <br />
            飲食店の課題をまるっと解決！
          </h1>

          {/* Sub Copy */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            値上げしたのに、『また来るね』が増えた。
            <br />
            その理由は、お皿に乗せた『野菜の物語』でした。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => handleLineClick("LINE登録")}
              data-event="line_registration_click"
              data-event-location="hero_main_cta"
            >
              LINEで無料相談する
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="text-sm text-slate-500">✓ 初期費用0円</span>
            <span className="text-sm text-slate-500">✓ 解約自由</span>
            <span className="text-sm text-slate-500">✓ 営業電話なし</span>
          </div>
        </div>

        {/* App Mockup - Below the fold on mobile */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-100 rounded-2xl p-4 md:p-8 shadow-lg">
            <img
              src="/images/hero-smartphone-mockup.png"
              alt="ベジコベアプリの発注画面 - LINEで簡単に野菜を注文"
              className="w-full max-w-md mx-auto h-auto"
            />
          </div>

          {/* Floating Label */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
            LINEでかんたん発注！
          </div>
        </div>
      </div>
    </section>
  );
}
