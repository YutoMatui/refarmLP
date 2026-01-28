import { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, ChevronUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick, trackSectionScroll, event } from "@/lib/gtag";

interface Plan {
  id: string;
  name: string;
  price: string;
  targetUsers: string[];
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant: "primary" | "secondary";
}

const plans: Plan[] = [
  {
    id: "vegetable-only",
    name: "野菜仕入れ専用プラン",
    price: "月額 0円",
    targetUsers: ["まずは野菜の味と品質を確かめたい"],
    features: [
      "契約農家の野菜閲覧・発注",
      "インボイス対応請求書",
      "1回ごとの都度配送（送料800円）"
    ],
    buttonText: "今の神戸野菜を見てみる",
    buttonVariant: "secondary",
  },
  {
    id: "unit-price-up",
    name: "客単価アップ支援プラン",
    price: "月額 6,400円",
    targetUsers: [
      "週2回、定期的に野菜を仕入れる（送料がお得！）",
      "SNS投稿は自分でする方"
    ],
    features: [
      "【特典】月8回まで送料無料（実質0円以下）",
      "プロ撮影の野菜写真・動画素材の提供",
      "ホール用「おすすめトーク」台本提供"
    ],
    buttonText: "動画素材について詳しく聞く",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    id: "repeat-up",
    name: "客単価・リピート率アッププラン",
    price: "月額 34,980円",
    targetUsers: ["客単価もお店のファンも増やしたい方"],
    features: [
      "【特典】公式LINE構築 初期費用0円",
      "公式LINE運用代行（丸投げOK）",
      "オリジナルPR動画制作（3ヶ月に1回）",
      "専任担当による毎月の集客ミーティング",
      "ベーシックの全機能（送料無料含む）"
    ],
    buttonText: "お店のファン化について詳しく聞く",
    buttonVariant: "secondary",
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const [isExpanded, setIsExpanded] = useState(plan.isPopular);

  const handleLineClick = () => {
    trackLineRegistration("Pricing Section");
    trackCTAClick(`${plan.name}選択`, "Pricing");

    // パラメータを付与して流入経路を区別可能にする
    const baseUrl = "https://lin.ee/qMfjf66";
    const params = new URLSearchParams({
      utm_source: "lp",
      utm_medium: "pricing_button",
      utm_campaign: plan.id
    });

    window.open(`${baseUrl}?${params.toString()}`, "_blank");
  };

  const handleExpandToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    event({
      action: "pricing_expand",
      category: "engagement",
      label: `${plan.name} - ${newState ? "open" : "close"}`,
    });
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl ${plan.isPopular
        ? "border-2 border-emerald-600 ring-4 ring-emerald-600/10 scale-105 z-10"
        : "border border-slate-200"
        }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
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
        </div>

        {/* Target Users */}
        <div className="mb-6 bg-slate-50 p-4 rounded-xl">
          <p className="text-xs font-bold text-slate-500 mb-2">こんな人におすすめ</p>
          <ul className="space-y-2">
            {plan.targetUsers.map((user, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-snug">
                  {user}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        {plan.buttonVariant === "primary" ? (
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            onClick={handleLineClick}
          >
            {plan.buttonText}
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-6 rounded-xl transition-all"
            onClick={handleLineClick}
          >
            {plan.buttonText}
          </Button>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={handleExpandToggle}
          className="w-full flex items-center justify-center gap-2 mt-4 py-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
          data-event="pricing_expand"
          data-event-plan={plan.id}
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
          className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="pt-4 border-t border-slate-100">
            <ul className="space-y-3">
              {plan.features.map((feature, index) => {
                const isHighlight = feature.includes("【特典】") || feature.includes("初期費用0円");
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${isHighlight ? "text-red-500" : "text-emerald-600/70"
                        }`}
                    />
                    <span
                      className={`text-sm ${isHighlight
                        ? "font-bold text-red-600"
                        : "text-slate-600"
                        }`}
                    >
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedScroll = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedScroll.current) {
            hasTrackedScroll.current = true;
            trackSectionScroll("料金セクション");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 md:py-24 bg-slate-50"
      data-event="scroll_to_pricing"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            料金プラン
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
