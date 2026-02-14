import { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, ChevronUp, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick, trackSectionScroll, event } from "@/lib/gtag";

interface Plan {
  id: string;
  name: string;
  price: string;
  priceNote?: string; // 価格の注釈用（例: 要相談の場合など）
  targetUsers: string[];
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant: "primary" | "secondary" | "tertiary"; // デザインバリエーション追加
}

const plans: Plan[] = [
  {
    id: "free-entry",
    name: "神戸農家応援プラン",
    price: "¥0 /月",
    targetUsers: ["まずは野菜の味と品質を確かめたい"],
    features: [
      "契約農家の野菜閲覧・発注",
      "農家動画・販促素材の閲覧（無料）", // 追加機能
      "インボイス対応請求書",
      "1回ごとの都度配送（送料800円）"
    ],
    buttonText: "神戸野菜・農家さんを詳しく知る",
    buttonVariant: "secondary",
  },
  {
    id: "standard-line",
    name: "客単価・リピート率アッププラン", // 旧プレミアムの内容
    price: "¥34,980 /月",
    targetUsers: [
      "LINE構築・運用を丸投げしたい",
      "お店のファン・リピーターを増やしたい"
    ],
    features: [
      "【特典】公式LINE構築・運用代行",
      "オリジナルPR動画制作（3ヶ月に1回）",
      "月8回まで送料無料（実質0円以下）",
      "専任担当による毎月の集客ミーティング",
      "フリープラン機能全て込み",
    ],
    buttonText: "お店のファン化について相談",
    isPopular: true, // これをスタンダード（推奨）にする
    buttonVariant: "primary",
  },
  {
    id: "premium-marketing",
    name: "Web集客フルサポートプラン", // 新プレミアム（オプション）
    price: "要相談",
    priceNote: "※有料プランのオプション",
    targetUsers: ["SNSも検索対策も全て任せたい方"],
    features: [
      "Instagram / TikTok 運用代行",
      "SEO対策（検索順位向上）",
      "MEO対策（Googleマップ集客）",
      "競合調査・マーケティング戦略設計",
    ],
    buttonText: "Web集客全般を相談する",
    buttonVariant: "tertiary", // 特別な色味（黒やゴールドなど）
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const [isExpanded, setIsExpanded] = useState(plan.isPopular);

  const handleLineClick = () => {
    trackLineRegistration("Pricing Section");
    trackCTAClick(`${plan.name}選択`, "Pricing");

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

  // ボタンのデザイン分岐
  const getButtonStyles = () => {
    switch (plan.buttonVariant) {
      case "primary": // スタンダード（一番目立たせる）
        return "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200";
      case "tertiary": // プレミアム（高級感・黒ベースなど）
        return "bg-slate-800 hover:bg-slate-900 text-white border border-slate-700";
      case "secondary": // フリー（控えめ）
      default:
        return "bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50";
    }
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl flex flex-col h-full ${plan.isPopular
        ? "border-2 border-emerald-600 ring-4 ring-emerald-600/10 scale-105 z-10"
        : "border border-slate-200"
        }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            推奨プラン
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 flex-grow">
        {/* Plan Name */}
        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 min-h-[3.5rem] flex items-center">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          <span className={`font-black text-slate-800 tracking-tight ${plan.price === "要相談" ? "text-3xl" : "text-3xl md:text-4xl"}`}>
            {plan.price}
          </span>
        </div>
        {/* Price Note (for Premium) */}
        {plan.priceNote && (
          <p className="text-xs text-slate-500 mb-4 font-medium">{plan.priceNote}</p>
        )}
        {!plan.priceNote && <div className="h-6 mb-2"></div>} {/* Spacer alignment */}


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

        {/* Features List (Expandable) */}
        <div className="mb-6">
          <button
            onClick={handleExpandToggle}
            className="w-full flex items-center justify-between py-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors mb-2"
            data-event="pricing_expand"
            data-event-plan={plan.id}
          >
            <span className="font-bold">プラン内容詳細</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="pt-2 border-t border-slate-100">
              <ul className="space-y-3 mt-2">
                {plan.features.map((feature, index) => {
                  const isHighlight = feature.includes("【特典】") || feature.includes("運用代行");
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${isHighlight ? "text-emerald-600" : "text-emerald-600/70"
                          }`}
                      />
                      <span
                        className={`text-sm ${isHighlight
                          ? "font-bold text-emerald-700"
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

      {/* CTA Button Area (Fixed at bottom) */}
      <div className="p-6 md:p-8 pt-0 mt-auto">
        <Button
          className={`w-full font-bold py-6 rounded-xl shadow-md hover:shadow-lg transition-all ${getButtonStyles()}`}
          onClick={handleLineClick}
        >
          {plan.buttonText}
        </Button>
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
            お店に合わせた3つのプラン
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            まずは無料で野菜を試すか、集客を丸ごとプロに任せるか。<br className="hidden md:block" />
            あなたのお店の課題に合わせてお選びください。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500 mt-12 bg-slate-100 py-4 rounded-lg max-w-3xl mx-auto">
          ※すべてのプランで、入会金・解約金はかかりません。（パートナー契約期間中は除く）<br />
        </p>
      </div>
    </section>
  );
}