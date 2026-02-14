/**
 * VegeKobe LP2 - Section 4: 5 Reasons to Choose VegeKobe
 * Fresh, Affordable, SDGs, Admin Reduction, Value Communication
 */

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  BadgePercent,
  Globe,
  Smartphone,
  Megaphone,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: Sparkles,
    category: "鮮度",
    catchCopy: "その日の朝に採れた野菜が、その日のうちに届く。",
    description:
      "市場を通さない農家直送物流。圧倒的な鮮度が料理の味を底上げします。",
    gradient: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    id: 2,
    icon: BadgePercent,
    category: "コスト",
    catchCopy: "「規格外野菜」の活用で、原価を賢く抑える。",
    description:
      "味は一級品だが形が不揃いな野菜も積極的に提供。コストパフォーマンスの高い仕入れが可能です。",
    gradient: "from-orange-500 to-orange-600",
    lightBg: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    icon: Globe,
    category: "SDGs貢献",
    catchCopy: "仕入れるだけで、神戸の地域農業と環境を守れる。",
    description:
      "フードロス削減と地産地消への貢献。お店のCSR活動としてもアピールできます。",
    gradient: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    id: 4,
    icon: Smartphone,
    category: "事務作業削減",
    catchCopy: "毎日の発注も、月次の請求書も、LINEひとつで。",
    description:
      "電話やFAXは不要。請求書もLINEで自動送付され、事務作業の時間を大幅に削減できます。",
    gradient: "from-orange-500 to-orange-600",
    lightBg: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    id: 5,
    icon: Megaphone,
    category: "集客支援",
    catchCopy: "「こだわりの理由」をお客様に届けるまでをサポート。",
    description:
      "良い食材を使うだけでは意味がない。農家の物語を伝えるPOP素材の提供や、飲食店の「公式LINE運用代行」もサポートし、リピーター定着と客単価アップまで伴走します。",
    gradient: "from-emerald-500 to-orange-500",
    lightBg: "bg-gradient-to-br from-emerald-50 to-orange-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
];

export default function LP2ReasonsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-reasons"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[200px] h-[200px] bg-orange-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section title */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-orange-200">
            選ばれる理由
          </span>
          <h2 className="text-[1.35rem] md:text-3xl font-black text-slate-800 leading-[1.5]">
            VegeKobeが選ばれる
            <br className="md:hidden" />
            <span className="text-emerald-600">5つ</span>の理由
          </h2>
        </div>

        {/* Reason cards */}
        <div className="max-w-lg mx-auto space-y-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className={`rounded-2xl border ${reason.borderColor} overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
              >
                {/* Header stripe */}
                <div className={`bg-gradient-to-r ${reason.gradient} px-5 py-2.5 flex items-center gap-3`}>
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-[11px] font-bold">
                      0{reason.id}
                    </span>
                    <span className="text-white text-sm font-bold">
                      {reason.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${reason.lightBg} p-5`}>
                  <h3 className="text-[15px] font-black text-slate-800 mb-2 leading-snug">
                    {reason.catchCopy}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
