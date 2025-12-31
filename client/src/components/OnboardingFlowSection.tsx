import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "../lib/gtag";
import { ArrowRight } from "lucide-react"; // 矢印アイコン用

const steps = [
    {
        id: 1,
        title: "お申し込み",
        subtitle: "LINE登録",
        description: "LINEで友だち追加するだけ。\n30秒で完了します。",
        icon: "/images/icons/step-1-apply.png",
    },
    {
        id: 2,
        title: "ご相談",
        subtitle: "ヒアリング",
        description: "お店の課題をお聞かせください。\n最適なプランをご提案します。",
        icon: "/images/icons/step-2-consult.png",
    },
    {
        id: 3,
        title: "セットアップ",
        subtitle: "導入サポート",
        description: "アカウント設定から農家提案まで\n専任スタッフがサポート。",
        icon: "/images/icons/step-3-setup.png",
    },
    {
        id: 4,
        title: "取引先案内開始",
        subtitle: "利用開始",
        description: "準備完了！\n朝採れ野菜がお店に届きます。",
        icon: "/images/icons/step-4-start.png",
    },
];

export default function OnboardingFlowSection() {
    const handleLineClick = () => {
        trackLineRegistration("Onboarding Section");
        trackCTAClick("LINE登録", "Onboarding");
        window.open("https://lin.ee/qMfjf66", "_blank");
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
                        利用開始までの流れ
                    </h2>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
                        お申し込みから<span className="border-b-2 border-orange-400 font-bold text-slate-800">最短1ヶ月</span>で取引先への案内が可能です
                    </p>
                </div>

                {/* ==============================================
                    Mobile Layout (Image 1 Style: Vertical List) 
                   ============================================== */}
                <div className="md:hidden max-w-md mx-auto space-y-2">
                    {steps.map((step) => (
                        <div key={step.id} className="flex items-center p-4 bg-orange-50/50 rounded-xl border-b-2 border-dashed border-emerald-100 last:border-0">
                            {/* Icon Circle */}
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-16 h-16 rounded-full border-2 border-emerald-400 bg-white flex items-center justify-center shadow-sm">
                                    <img
                                        src={step.icon}
                                        alt={step.title}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-grow">
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="text-sm font-bold text-slate-400 font-en">
                                        Step {step.id}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-800">
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

                {/* ==============================================
                    Desktop Layout (Image 2 Style: Horizontal Circles)
                   ============================================== */}
                <div className="hidden md:flex justify-between items-start max-w-6xl mx-auto relative">
                    {/* Background Connector Line (Absolute centered) */}
                    <div className="absolute top-[6rem] left-0 w-full h-1 bg-transparent z-0 hidden lg:block" />

                    {steps.map((step, index) => (
                        <div key={step.id} className="flex-1 flex flex-col items-center relative z-10 group">

                            {/* Big Circle Container */}
                            <div className="w-52 h-52 rounded-full border-4 border-emerald-600 bg-white flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 group-hover:scale-105 relative">

                                {/* Step Number (Inside Top) */}
                                <span className="absolute top-8 text-emerald-600 font-bold text-lg font-en">
                                    Step {step.id}
                                </span>

                                {/* Icon */}
                                <div className="w-20 h-20 mb-2 flex items-center justify-center">
                                    <img
                                        src={step.icon}
                                        alt={step.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title (Inside Bottom) */}
                                <h3 className="text-lg font-bold text-slate-800 mt-1">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Arrow (Render between items) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[6rem] -right-[20%] text-emerald-600">
                                    <ArrowRight size={48} strokeWidth={3} />
                                </div>
                            )}

                            {/* Description (Below Circle) */}
                            <div className="mt-6 text-center px-4">
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Area */}
                <div className="text-center mt-12 md:mt-20">
                    <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-8 px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        onClick={handleLineClick}
                    >
                        まずはLINEで相談する
                        <span className="ml-2 text-sm font-normal opacity-90">（無料）</span>
                    </Button>
                    <p className="text-slate-500 text-sm mt-4">
                        ※しつこい営業は一切いたしません
                    </p>
                </div>
            </div>
        </section>
    );
}