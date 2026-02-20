import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/gtag";

export default function FooterCTASectionV2() {
  const handleCTAClick = () => {
    trackCTAClick("神戸のこだわり野菜を無料でお試し", "Footer CTA V2");
    const formEl = document.getElementById("contact-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            あなたのお店に、<br />
            神戸の農園の物語を。
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed mb-6 text-emerald-50">
            こだわりのあるオーナー様にだからこそ、<br />
            近くにある本当の美味しい野菜を使っていただきたいです。
          </p>

          {/* Micro Copy */}
          <p className="text-white/90 text-sm font-bold mb-4">
            ✅ 簡単申し込み、1分で完了
          </p>

          {/* CTA Button */}
          <Button
            className="bg-white hover:bg-emerald-50 text-emerald-600 font-black text-base md:text-lg py-6 md:py-7 px-8 md:px-10 rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 mx-auto"
            onClick={handleCTAClick}
          >
            神戸のこだわり野菜を無料でお試し
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Note */}
          <p className="text-sm md:text-base mt-4 text-emerald-100">
            ※ しつこい営業は一切行いません
          </p>
        </div>
      </div>
    </section>
  );
}

