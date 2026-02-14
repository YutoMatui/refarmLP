import { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, ChevronUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick, trackSectionScroll, event } from "@/lib/gtag";

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
    id: "free",
    name: "フリープラン",
    price: "¥0",
    description: "まずはどんな野菜が届くかを見てみたい方です。",
    features: [
      { text: "全提携農家の野菜の閲覧・発注（訳あり野菜を含む）" },
      { text: "インボイス対応の請求書のDL機能" },
      { text: "店舗へのお届け（一回当たり800円）" },
    ],
    buttonVariant: "secondary",
  },
  {
    id: "basic",
    name: "ベーシックプラン",
    price: "¥6,400",
    description: "素材さえあれば自分でインスタの投稿やメニュー表の作成などができる方",
    isPopular: true,
    features: [
      { text: "フリープランの全機能", highlighted: true },
      { text: "月八回まで無料配送", highlighted: true },
      { text: "農家のこだわり動画提供" },
      { text: "接客スクリプト提供" },
      { text: "来月の野菜予告機能" },
    ],
    buttonVariant: "primary",
  },
  {
    id: "premium",
    name: "プレミアムプラン",
    price: "¥34,980",
    description: "要望を伝えたあとはすべてお任せして売上アップを実現したい方",
    features: [
      { text: "ベーシックプランの全機能", highlighted: true },
      { text: "オリジナル動画制作（3ヵ月に一回）" },
      { text: "メニュー表作成（月一回）" },
      { text: "公式Lineの運用" },
      { text: "専任担当による効果測定と提案" },
    ],
    buttonVariant: "secondary",
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const [isExpanded, setIsExpanded] = useState(plan.isPopular);

  const handleLineClick = () => {
    trackLineRegistration("Pricing Section");
    trackCTAClick(`${plan.name}プラン選択`, "Pricing");
    window.open("https://lin.ee/qMfjf66", "_blank");
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
          <span className="text-slate-500">/月</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

        {/* CTA Button */}
        {plan.buttonVariant === "primary" ? (
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            onClick={handleLineClick}
            data-event="line_registration_click"
            data-event-location={`pricing_${plan.id}`}
          >
            このプランで始める
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-6 rounded-xl transition-all"
            onClick={handleLineClick}
            data-event="line_registration_click"
            data-event-location={`pricing_${plan.id}`}
          >
            このプランで始める
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
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className={`w-5 h-5 shrink-0 mt-0.5 ${feature.highlighted ? "text-emerald-600" : "text-emerald-600/70"
                      }`}
                  />
                  <span
                    className={`text-sm ${feature.highlighted
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

