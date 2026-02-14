/**
 * VegeKobe LP2 - Section 3: App Screen Introduction
 * Shows 3 key app screens to convince "これならカンタンだ"
 */

import { useEffect, useRef, useState } from "react";
import { User, Zap, Tag } from "lucide-react";

const appScreens = [
  {
    id: 1,
    icon: User,
    label: "農家ストーリー画面",
    title: "誰が作ったか一目瞭然",
    description:
      "生産者の顔写真、動画、こだわり文章が表示。お客様に語れる「物語」がここにあります。",
    image: "/images/lp2/app-farmer-story.png",
    accentColor: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    badgeColor: "bg-emerald-500",
  },
  {
    id: 2,
    icon: Zap,
    label: "ワンタップ発注画面",
    title: "忙しい営業後でも1秒で発注",
    description:
      "「いつもの注文」ボタンで履歴から即発注。電話もFAXも、もう不要です。",
    image: "/images/lp2/app-one-tap-order.png",
    accentColor: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    badgeColor: "bg-orange-500",
  },
  {
    id: 3,
    icon: Tag,
    label: "規格外野菜リスト",
    title: "掘り出し物が見つかる",
    description:
      "安価で良質な規格外品が一覧で並びます。味は一級品、コストは控えめ。",
    image: "/images/lp2/app-irregular-list.png",
    accentColor: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    badgeColor: "bg-emerald-500",
  },
];

export default function LP2AppScreenSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-app-screens"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section title */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-emerald-200">
            アプリでカンタン
          </span>
          <h2 className="text-[1.35rem] md:text-3xl font-black text-slate-800 leading-[1.5]">
            スマホひとつで、
            <br className="md:hidden" />
            仕入れが<span className="text-emerald-600">変わる</span>。
          </h2>
        </div>

        {/* App screen cards - vertical stack for mobile */}
        <div className="max-w-lg mx-auto space-y-6">
          {appScreens.map((screen, index) => {
            const Icon = screen.icon;
            return (
              <div
                key={screen.id}
                className={`rounded-2xl bg-white shadow-lg overflow-hidden border border-slate-100 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                {/* Phone mockup image area */}
                <div className={`${screen.bgColor} p-6 flex justify-center`}>
                  <div className="relative w-[180px] md:w-[200px]">
                    {/* Phone frame */}
                    <div className="bg-white rounded-[1.5rem] p-1 shadow-xl border-2 border-slate-200">
                      <img
                        src={screen.image}
                        alt={screen.label}
                        className="w-full aspect-[9/16] object-cover rounded-[1.2rem] bg-slate-100"
                      />
                    </div>
                    {/* Number badge */}
                    <div className={`absolute -top-2 -left-2 w-8 h-8 ${screen.badgeColor} rounded-full flex items-center justify-center shadow-md`}>
                      <span className="text-white text-sm font-black">{screen.id}</span>
                    </div>
                  </div>
                </div>

                {/* Description area */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${screen.accentColor} flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {screen.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 mb-1.5">
                    {screen.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {screen.description}
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
