/**
 * VegeKobe Hero Section Component
 * Design: Asymmetric layout with left text and right visual
 * Features: Headline, badges, CTA buttons with microcopy
 */

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium">
                <Check className="w-4 h-4" />
                初期費用0円
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium">
                <Check className="w-4 h-4" />
                解約自由
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-tight mb-6">
              値上げしたのに、
              <br />
              <span className="text-emerald">いつもよりお客様が</span>
              <br />
              <span className="text-emerald">喜んでくれた。</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              その秘密は「仕入れ」にありました。
              <br />
              朝採れ野菜とストーリーが届く「ベジコベ」。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Main CTA */}
              <div className="flex flex-col">
                <Button className="bg-orange hover:bg-orange-dark text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
                  「客単価アップ」について相談する
                </Button>
                <span className="text-xs text-slate-500 mt-2 text-center sm:text-left">
                  ※LINEで30秒で登録完了。営業電話はしません。
                </span>
              </div>

              {/* Sub CTA */}
              <div className="flex flex-col">
                <Button
                  variant="outline"
                  className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-bold text-lg py-6 px-8 rounded-xl transition-all duration-200"
                >
                  「リピート率アップ」について相談する
                </Button>
                <span className="text-xs text-slate-500 mt-2 text-center sm:text-left">
                  ※まずは事例を見るだけでもOKです。
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <img
                src="/images/hero-chef.png"
                alt="スマホを持ち、自信に満ちた笑顔のシェフと新鮮な野菜"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-lg p-4 md:p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">導入店舗</p>
                    <p className="text-xl font-black text-slate-800">150店舗+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
