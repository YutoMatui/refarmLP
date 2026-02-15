import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "予約フォームから申し込み",
    subtitle: "お申し込み",
    description: "予約フォームより、30分程度のヒアリングの日程をご予約いただきます。\nアカウント発行に必要な情報をお伺いいたします。",
    icon: "/images/icons/step-1-apply.png",
  },
  {
    id: 2,
    title: "ヒアリング・お試し注文のためのアカウント発行",
    subtitle: "ヒアリング",
    description: "お店のこだわりやご要望をお伺いし、最適な提携農家をご提案いたします。\nその場でお試し用のアカウントを発行いたします。",
    icon: "/images/icons/step-2-consult.png",
  },
  {
    id: 3,
    title: "1,000円分のお試し野菜配送（無料）",
    subtitle: "お試し配送",
    description: "実際に神戸産の新鮮野菜をお届けいたします。\n品質・鮮度をご確認いただき、ご満足いただけましたらそのままご継続いただけます。",
    icon: "/images/icons/step-3-setup.png",
  },
];

export default function OnboardingFlowV2() {
  const handleCTAClick = () => {
    trackLineRegistration("Onboarding Section V2");
    trackCTAClick("予約フォーム", "Onboarding V2");
    window.open("https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv", "_blank");
  };

  return (
    <section id="onboarding" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3">
            導入の流れ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
            ご利用開始までの流れ
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            お申し込みから
            <span className="border-b-2 border-orange-400 font-bold text-slate-800">
              最短1週間
            </span>
            でお試し配送が可能です
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden max-w-md mx-auto space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center p-5 bg-orange-50/50 rounded-2xl border-b-2 border-dashed border-emerald-100 last:border-0 shadow-sm"
            >
              <div className="flex-shrink-0 mr-5">
                <div className="w-20 h-20 rounded-full border-2 border-emerald-400 bg-white flex items-center justify-center shadow-md">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col mb-1">
                  <span className="text-xs font-bold text-emerald-600 font-en mb-1">
                    Step {step.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 whitespace-pre-line leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-start max-w-5xl mx-auto relative mt-12">
          <div className="absolute top-[calc(2rem+6rem)] left-0 w-full h-1 bg-emerald-100 z-0 hidden lg:block rounded-full" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex-1 flex flex-col items-center relative z-10 group px-2"
            >
              <span className="block text-emerald-600 font-black text-xl font-en mb-4 tracking-wider">
                Step {step.id}
              </span>

              <div className="w-48 h-48 rounded-full border-4 border-emerald-500 bg-white flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl relative mb-6">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-24 h-24 object-contain drop-shadow-sm"
                />
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[calc(2rem+6rem-1.5rem)] -right-[15%] text-emerald-400">
                  <ArrowRight size={48} strokeWidth={3} />
                </div>
              )}

              <h3 className="text-lg font-black text-slate-800 mb-3 text-center leading-snug">
                {step.title}
              </h3>

              <div className="text-center">
                <p className="text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Area */}
        <div className="text-center mt-16 md:mt-24">
          <Button
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-xl md:text-2xl py-8 px-16 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 animate-pulse hover:animate-none"
            onClick={handleCTAClick}
          >
            無料でお試し配送を申し込む
          </Button>
          <p className="text-slate-500 text-sm mt-4">
            しつこい営業は一切行いません。
          </p>
        </div>
      </div>
    </section>
  );
}
