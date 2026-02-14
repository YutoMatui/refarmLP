/**
 * VegeKobe LP2 - Section 1: First View (FV)
 * Design: Fresh vegetables + farmer smile + smartphone mockup
 * Mobile-first, premium design with green/orange color scheme
 */

import { useEffect, useState } from "react";
import { Leaf, ChevronDown } from "lucide-react";

const CTA_URL = "https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv";

export default function LP2HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("lp2-empathy");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* ===== Background decorations ===== */}
      {/* Organic blob shapes */}
      <div className="absolute top-[-8%] right-[-15%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[220px] h-[220px] md:w-[400px] md:h-[400px] rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] left-[5%] w-[120px] h-[120px] rounded-full bg-emerald-200/30 blur-2xl pointer-events-none" />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,#166534_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* ===== Main content ===== */}
      <div className="relative z-10 flex flex-col flex-1 pt-4 pb-6 px-4 md:px-8">

        {/* ----- Logo area (top bar) ----- */}
        <div
          className={`flex items-center justify-center gap-2 pt-3 pb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <img
            src="/images/logo.png"
            alt="VegeKobe"
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* ----- Hero image area ----- */}
        <div
          className={`relative w-full max-w-[380px] mx-auto mb-5 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background card with farmer/vegetables photo */}
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl">
            {/* Main hero image - farmer with fresh vegetables */}
            <img
              src="/images/lp2/hero-farmer-vegetables.jpg"
              alt="新鮮な野菜と笑顔の生産者"
              className="w-full aspect-[4/5] object-cover"
            />

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Floating smartphone mockup overlaid on image */}
            <div className="absolute bottom-4 right-4 w-[100px] md:w-[120px] transform rotate-[-3deg] drop-shadow-2xl">
              <div className="bg-white rounded-2xl p-1.5 shadow-xl border border-white/50">
                <img
                  src="/images/lp2/app-screen-mockup.png"
                  alt="VegeKobeアプリ画面"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* "Kobe limited" badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] font-bold text-emerald-700">神戸市内の飲食店限定</span>
              </div>
            </div>
          </div>
        </div>

        {/* ----- Copy section ----- */}
        <div
          className={`text-center max-w-[380px] mx-auto w-full transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Sub copy - emotionally engaging */}
          <div className="mb-5">
            <p className="text-[1.25rem] md:text-[1.5rem] font-black text-slate-800 leading-[1.6] tracking-tight">
              <span className="relative inline-block">
                生産者の
                <span className="relative">
                  <span className="text-emerald-600">「顔」</span>
                </span>
                と
                <span className="relative">
                  <span className="text-emerald-600">「想い」</span>
                </span>
                が見えるから、
              </span>
              <br />
              <span className="relative inline-block mt-0.5">
                お店の
                <span className="relative inline-block">
                  <span className="text-orange-500 font-black">ファンが増える</span>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-400/60 rounded-full" />
                </span>
                。
              </span>
            </p>
          </div>

          {/* Platform description line */}
          <p className="text-[13px] md:text-sm text-slate-500 font-medium mb-6 leading-relaxed">
            神戸市内の飲食店限定・地産地消プラットフォーム
            <br />
            <span className="text-emerald-600 font-bold text-base">「ベジコベ」</span>
          </p>

          {/* ===== CTA Button ===== */}
          <div className="flex flex-col items-center gap-2">
            {/* Micro copy */}
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              まずは無料でお試し配送
            </span>

            {/* Main CTA */}
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[320px] block"
            >
              {/* Glow effect behind button */}
              <div className="absolute inset-0 bg-orange-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 scale-90 group-hover:scale-100" />

              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-base md:text-lg py-4 px-8 rounded-2xl shadow-xl shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0 flex items-center justify-center gap-2">
                <Leaf className="w-5 h-5" />
                神戸のこだわり野菜を受け取る
              </div>
            </a>

            {/* Trust badges */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                完全無料
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                30分ヒアリング
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                しつこい営業なし
              </div>
            </div>
          </div>
        </div>

        {/* ----- Scroll indicator ----- */}
        <div
          className={`flex flex-col items-center mt-auto pt-6 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-1 text-slate-300 hover:text-emerald-500 transition-colors"
            aria-label="次のセクションへスクロール"
          >
            <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
