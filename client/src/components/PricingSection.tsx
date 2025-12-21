/**
 * VegeKobe Pricing Section Component
 * Design: 3-column pricing cards with Standard highlighted
 * Features: Accordion/expandable details for each plan
 */

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanFeature {
  text: string;
  highlighted?: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: PlanFeature[];
  buttonVariant: "primary" | "secondary";
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "ベーシック",
    price: "¥15,000",
    description: "まず試したい店舗向け",
    features: [
      { text: "野菜配送(週2回、14-18時)" },
      { text: "簡単注文システム(1分で完結)" },
      { text: "独自検品(規格品+規格外選択可)" },
      { text: "農家紹介カード(A5、月2農家)" },
      { text: "卓上QRコードPOP(15秒動画)" },
      { text: "農家との直接チャット" },
      { text: "効果測定シート" },
      { text: "来月の野菜予告" },
    ],
    buttonVariant: "secondary",
  },
  {
    id: "standard",
    name: "スタンダード",
    price: "¥29,800",
    description: "本気で売上改善したい店舗向け",
    isPopular: true,
    features: [
      { text: "ベーシックの全機能", highlighted: true },
      { text: "配送頻度アップ(週3回)", highlighted: true },
      { text: "店内ポスター「今月の農家」(A2、月1回)" },
      { text: "季節限定メニュー企画支援" },
      { text: "価格設定・POP制作サポート" },
      { text: "月次レポート(詳細分析)" },
      { text: "スタッフ教育資料提供" },
      { text: "LINE公式アカウント運用支援" },
    ],
    buttonVariant: "primary",
  },
  {
    id: "premium",
    name: "プレミアム",
    price: "¥49,800",
    description: "地域No.1を目指す店舗向け",
    features: [
      { text: "スタンダードの全機能", highlighted: true },
      { text: "専属農家マッチング" },
      { text: "オリジナル野菜栽培" },
      { text: "農家ドキュメンタリー動画(3-5分、月2本)" },
      { text: "Instagram/TikTok用動画制作(月4本)" },
      { text: "戦略会議(月1回、改善提案)" },
      { text: "優先サポート対応" },
      { text: "専任担当者アサイン" },
    ],
    buttonVariant: "secondary",
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const [isExpanded, setIsExpanded] = useState(plan.isPopular);

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl ${
        plan.isPopular
          ? "border-2 border-emerald ring-4 ring-emerald/10 scale-105 z-10"
          : "border border-slate-200"
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-emerald text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            人気No.1
          </span>
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Plan Name */}
        <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl md:text-4xl font-black text-slate-800">
            {plan.price}
          </span>
          <span className="text-slate-500">/月</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

        {/* CTA Button */}
        {plan.buttonVariant === "primary" ? (
          <Button className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            このプランで始める
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-bold py-6 rounded-xl transition-all"
          >
            このプランで始める
          </Button>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 mt-4 py-2 text-sm text-slate-500 hover:text-emerald transition-colors"
        >
          <span>{isExpanded ? "詳細を閉じる" : "詳細を見る"}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Features List (Expandable) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-slate-100">
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      feature.highlighted ? "text-emerald" : "text-emerald/70"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      feature.highlighted
                        ? "font-bold text-slate-800"
                        : "text-slate-600"
                    }`}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald/10 text-emerald text-sm font-bold px-4 py-2 rounded-full mb-4">
            PRICING
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800">
            料金プラン
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-start max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500 mt-8">
          ※別途、野菜の購入代金がかかります。
        </p>
      </div>
    </section>
  );
}
