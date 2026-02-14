/**
 * VegeKobe LP2 - Section 7: Onboarding Flow (3 Steps)
 * 1. Reserve hearing, 2. Hearing + Account, 3. Trial delivery
 */

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Headphones, Truck } from "lucide-react";

const CTA_URL = "https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv";

const steps = [
  {
    id: 1,
    icon: CalendarCheck,
    title: "予約フォームから申し込み",
    description:
      "アカウント発行のためのヒアリング（30分）を予約。お気軽にお申し込みください。",
    accent: "emerald",
  },
  {
    id: 2,
    icon: Headphones,
    title: "ヒアリング実施・アカウント発行",
    description:
      "お店のニーズを聞き取り、最適な農家とマッチング。あなたのお店に合った提案をいたします。",
    accent: "orange",
  },
  {
    id: 3,
    icon: Truck,
    title: "1,000円分のお試し野菜配送（無料）",
    description:
      "実際に味とサービスを体験。気に入れば継続、もちろん無理な勧誘はいたしません。",
    accent: "emerald",
  },
];

export default function LP2StepsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-steps"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-white text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-emerald-200">
            導入の流れ
          </span>
          <h2 className="text-[1.35rem] md:text-3xl font-black text-slate-800 leading-[1.5]">
            カンタン<span className="text-emerald-600">3ステップ</span>で
            <br className="md:hidden" />
            すぐに始められる
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-lg mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEmerald = step.accent === "emerald";

            return (
              <div
                key={step.id}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] top-[56px] w-[2px] h-[calc(100%-36px)] bg-gradient-to-b from-emerald-300 to-orange-300 z-0" />
                )}

                <div className="flex items-start gap-5 pb-8 relative z-10">
                  {/* Step number circle */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${
                        isEmerald
                          ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                          : "bg-gradient-to-br from-orange-500 to-orange-600"
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[11px] font-black tracking-wider ${
                          isEmerald ? "text-emerald-500" : "text-orange-500"
                        }`}
                      >
                        STEP {step.id}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-black text-slate-800 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-base py-4 px-10 rounded-2xl shadow-xl shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            神戸のこだわり野菜を受け取る
          </a>
          <p className="text-slate-400 text-xs mt-3">
            まずは無料でお試し配送
          </p>
        </div>
      </div>
    </section>
  );
}
