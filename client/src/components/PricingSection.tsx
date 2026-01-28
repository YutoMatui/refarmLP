import { useRef, useEffect } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick, trackSectionScroll } from "@/lib/gtag";

interface Plan {
  id: string;
  name: string;
  price: string;
  targetUsers: string[];
  features: string[];
  buttonText: string;
  isPopular?: boolean;
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
    buttonText: "LINEでお店のファン化について詳しく聞く",
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const handleLineClick = () => {
    trackLineRegistration("Pricing Section");
    trackCTAClick(`${plan.name}選択`, "Pricing");

    // パラメータを付与して流入経路を区別可能にする
    const baseUrl = "https://lin.ee/qMfjf66";
    // アプリ遷移時にパラメータが落ちる場合もあるが、ブラウザ経由での計測用として付与
    const params = new URLSearchParams({
      utm_source: "lp",
      utm_medium: "pricing_button",
      utm_campaign: plan.id
    });

    window.open(`${baseUrl}?${params.toString()}`, "_blank");
  };

  return (
    <div
      className={`relative h-full flex flex-col bg-white rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl ${plan.isPopular
          ? "border-2 border-emerald-600 ring-4 ring-emerald-600/10 scale-105 z-10"
          : "border border-slate-200"
        }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-max">
          <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            おすすめ
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-slate-700 mb-4">{plan.name}</h3>
          <div className="text-3xl font-black text-slate-800">
            {plan.price}
          </div>
        </div>

        {/* Target Users */}
        <div className="mb-8 bg-slate-50 p-4 rounded-xl">
          <p className="text-xs font-bold text-slate-500 mb-3 text-center uppercase tracking-wider">
            こんな人におすすめ
          </p>
          <ul className="space-y-2">
            {plan.targetUsers.map((user, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-bold text-slate-700 leading-snug">
                  {user}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-8 flex-1">
          <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wider">
            主な内容
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => {
              // 特典などの強調表示
              const isHighlight = feature.includes("【特典】") || feature.includes("初期費用0円");

              return (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isHighlight ? "bg-red-500" : "bg-emerald-400"}`} />
                  <span className={`text-sm leading-relaxed ${isHighlight ? "font-bold text-red-600" : "text-slate-600"}`}>
                    {feature}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Button */}
        <Button
          className={`w-full font-bold py-6 rounded-xl shadow-md transition-all ${plan.isPopular
              ? "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg"
              : "bg-[#06C755] hover:bg-[#05b64d] text-white hover:shadow-lg"
            }`}
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
      className="py-20 md:py-32 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
            料金プラン
          </h2>
          <p className="text-slate-500">
            あなたの店舗に最適なプランをお選びください
          </p>
        </div>

        {/* Grid Layout: 1 column on mobile, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div key={plan.id} className="flex">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

