/**
 * VegeKobe Footer CTA Section Component
 * Design: Full-width CTA section with emerald background
 * Features: Main copy, sub copy, and dual CTA buttons
 */

import { Button } from "@/components/ui/button";

export default function FooterCTASection() {
  return (
    <section className="py-16 md:py-24 bg-emerald relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Copy */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
            まずは、お店の「悩み」を
            <br />
            聞かせてください。
          </h2>

          {/* Sub Copy */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
            無理な営業は一切しません。
            <br className="hidden sm:block" />
            あなたのお店に、地産地消がどう役立つか、
            <br className="hidden sm:block" />
            シミュレーションだけでもしてみませんか？
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Main CTA - 緑色 */}
            <div className="flex flex-col items-center">
              <Button
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-lg py-7 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-1 animate-pulse hover:animate-none"
                onClick={() => window.open('https://lin.ee/qMfjf66', '_blank')}
              >
                無料で利用開始
              </Button>
              <span className="text-sm text-white/80 mt-2">しつこい営業は一切行いません。</span>
            </div>

            {/* Sub CTA - オレンジ色 */}
            <div className="flex flex-col items-center">
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-7 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200"
                onClick={() => window.open('https://lin.ee/qMfjf66', '_blank')}
              >
                資料請求
              </Button>
              <span className="text-sm text-white/80 mt-2">1分で入力完了</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
