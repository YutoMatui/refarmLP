/**
 * VegeKobe LP2 - Section 9: Footer CTA
 * "あなたのお店に、神戸の畑の物語を。"
 */

import { Leaf } from "lucide-react";

const CTA_URL = "https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv";

export default function LP2FooterCTA() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[250px] h-[250px] bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[350px] h-[350px] bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle leaf pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto text-center">
          {/* Decorative leaf icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full border border-white/20">
              <Leaf className="w-5 h-5 text-white/80" />
            </div>
          </div>

          {/* Main copy */}
          <h2 className="text-2xl md:text-3xl font-black text-white leading-[1.6] mb-4">
            あなたのお店に、
            <br />
            神戸の畑の<span className="text-orange-300">物語</span>を。
          </h2>

          {/* Sub copy */}
          <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
            まずは無料お試し・ヒアリングから。
            <br />
            お店の課題を聞かせてください。
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[320px] block"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-400/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 scale-90 group-hover:scale-100" />

              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-base md:text-lg py-4 px-8 rounded-2xl shadow-2xl shadow-orange-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-3xl active:translate-y-0 flex items-center justify-center gap-2">
                <Leaf className="w-5 h-5" />
                神戸のこだわり野菜を受け取る
              </div>
            </a>

            {/* Micro copy */}
            <span className="text-[11px] text-white/50">
              まずは無料でお試し配送
            </span>

            {/* Trust badges */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1 text-[10px] text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                完全無料
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                30分ヒアリング
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                しつこい営業なし
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
