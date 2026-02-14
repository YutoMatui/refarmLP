/**
 * VegeKobe LP2 - Section 2: Empathy / Problem Awareness
 * "素晴らしい食材が近くにあるのに、使えないのは「もったいない」。"
 */

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Users, FileText } from "lucide-react";

const painPoints = [
  {
    id: 1,
    icon: MessageCircle,
    title: "直接仕入れのハードル",
    description:
      "農家さんから直接野菜を買ってみたいが、個別のやりとりは大変そう。",
    accent: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    numberBg: "bg-emerald-500",
  },
  {
    id: 2,
    icon: Users,
    title: "こだわりが伝わらない",
    description:
      'お客様に「地域貢献」や「食材へのこだわり」を伝え、選ばれるお店になりたいが伝わっていない。',
    accent: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-500",
    numberBg: "bg-orange-500",
  },
  {
    id: 3,
    icon: FileText,
    title: "事務作業に追われる日々",
    description:
      "野菜の発注電話やFAX、月末の請求書整理などの事務作業に追われている。",
    accent: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    numberBg: "bg-emerald-500",
  },
];

export default function LP2EmpathySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-empathy"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            こんなお悩みありませんか？
          </span>
          <h2 className="text-[1.4rem] md:text-3xl lg:text-4xl font-black text-slate-800 leading-[1.5]">
            素晴らしい食材が近くにあるのに、
            <br />
            使えないのは
            <span className="relative inline-block">
              <span className="text-orange-500">「もったいない」</span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-300/60 rounded-full" />
            </span>
            。
          </h2>
        </div>

        {/* Pain point cards */}
        <div className="max-w-lg mx-auto space-y-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.id}
                className={`relative rounded-2xl border-2 ${point.accent} p-5 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Number + Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${point.accent.split(" ")[0]}`}>
                        <Icon className={`w-6 h-6 ${point.iconColor}`} />
                      </div>
                      <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 ${point.numberBg} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-[10px] font-bold">
                          {point.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-sm font-black text-slate-700 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition copy */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg">
            <span className="text-lg">↓</span>
            その悩み、ベジコベが解決します
          </div>
        </div>
      </div>
    </section>
  );
}
