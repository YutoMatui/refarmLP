import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FooterCTASectionV2() {
  const handleCTAClick = () => {
    window.open("https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv", "_blank");
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
            神戸の畑の物語を。
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed mb-8 text-emerald-50">
            こだわりのあるオーナー様だからこそ、<br />
            ベジコベで実現できることがあります。
          </p>

          {/* CTA Button */}
          <Button
            className="bg-white hover:bg-emerald-50 text-emerald-600 font-black text-base md:text-lg py-6 md:py-7 px-8 md:px-10 rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 mx-auto"
            onClick={handleCTAClick}
          >
            神戸のこだわり野菜を受け取る
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Note */}
          <p className="text-sm md:text-base mt-4 text-emerald-100">
            ※ まずは無料お試し・ヒアリングから
          </p>
        </div>
      </div>
    </section>
  );
}
