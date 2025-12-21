/**
 * VegeKobe Solution Section Component
 * Design: Before/After comparison with visual impact
 * Features: Headline, core message, and comparison cards
 */

import { ArrowRight, Frown, Smile } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="section-padding bg-emerald/5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 leading-tight mb-6">
            その悩み、「野菜の仕入れ」を
            <br className="hidden sm:block" />
            変えるだけで解決できます。
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            あなたの「おいしい」に、「なぜおいしいか」を加えることで、
            <br className="hidden md:block" />
            価格への納得感が生まれます。
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Before Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-2 border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </span>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-5 mb-5">
                <p className="text-lg font-bold text-slate-700 mb-1">
                  トマトパスタ
                </p>
                <p className="text-2xl font-black text-slate-800">¥1,200</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Frown className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">顧客心理</p>
                  <p className="text-slate-700 font-medium">
                    「ちょっと高いな…」
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* After Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-emerald relative">
              <div className="absolute -top-3 -right-3 bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                おすすめ
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </span>
              </div>
              
              <div className="bg-emerald/5 rounded-xl p-5 mb-5 border border-emerald/20">
                <p className="text-lg font-bold text-emerald mb-1">
                  <span className="text-orange">ヤスオさんの王様トマト</span>のパスタ
                </p>
                <p className="text-2xl font-black text-slate-800">¥1,400</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">顧客心理</p>
                  <p className="text-emerald font-bold">
                    「安い！食べてみたい！」
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow (Mobile) */}
          <div className="flex md:hidden justify-center -my-3 relative z-10">
            <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Explanation Text */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            ベジコベは、野菜と一緒に「農家のストーリー」をお届けします。
            <br className="hidden md:block" />
            スタッフが語れるようになり、お客様がファンになる。
            <br className="hidden md:block" />
            それが適正価格での値上げを実現します。
          </p>
        </div>

        {/* Farmer Image */}
        <div className="max-w-md mx-auto mt-10">
          <img
            src="/images/farmer-portrait.png"
            alt="笑顔の農家さん"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
