import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "../lib/gtag";
import { ArrowRight } from "lucide-react";

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
        description: "初期設定やその他お困りごとを\n専任スタッフがサポート。",
        icon: "/images/icons/step-3-setup.png",
    },
    {
        id: 4,
        title: "利用開始",
        subtitle: "利用開始",
        description: "準備完了！\n一緒にお店を成長させていきましょう。",
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
                <div className="md:hidden max-w-md mx-auto space-y-4">
                    {steps.map((step) => (
                        <div key={step.id} className="flex items-center p-5 bg-orange-50/50 rounded-2xl border-b-2 border-dashed border-emerald-100 last:border-0 shadow-sm">
                            {/* Icon Circle - スマホ版のサイズアップ */}
                            <div className="flex-shrink-0 mr-5">
                                <div className="w-20 h-20 rounded-full border-2 border-emerald-400 bg-white flex items-center justify-center shadow-md">
                                    <img
                                        src={step.icon}
                                        alt={step.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-grow">
                                <div className="flex flex-col mb-1">
                                    <span className="text-xs font-bold text-emerald-600 font-en mb-1">
                                        Step {step.id}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-800 leading-tight">
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
                    Desktop Layout (Image 2 Style: Adjusted)
                   ============================================== */}
                <div className="hidden md:flex justify-between items-start max-w-6xl mx-auto relative mt-12">
                    {/* Background Connector Line */}
                    {/* 円の中心を通るように top の位置を調整 (Step文字の高さ + 円の半分) */}
                    <div className="absolute top-[calc(2rem+6rem)] left-0 w-full h-1 bg-emerald-100 z-0 hidden lg:block rounded-full" />

                    {steps.map((step, index) => (
                        <div key={step.id} className="flex-1 flex flex-col items-center relative z-10 group px-2">

                            {/* 1. Step Number (Outside Top) */}
                            <span className="block text-emerald-600 font-black text-xl font-en mb-4 tracking-wider">
                                Step {step.id}
                            </span>

                            {/* 2. Big Circle Container (Icon Only) */}
                            <div className="w-48 h-48 rounded-full border-4 border-emerald-500 bg-white flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl relative mb-6">
                                {/* Icon Image - PC版のサイズアップ */}
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-24 h-24 object-contain drop-shadow-sm"
                                />
                            </div>

                            {/* Arrow Connector */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[calc(2rem+6rem-1.5rem)] -right-[15%] text-emerald-400">
                                    <ArrowRight size={48} strokeWidth={3} />
                                </div>
                            )}

                            {/* 3. Title (Outside Bottom) */}
                            <h3 className="text-xl font-black text-slate-800 mb-3 text-center">
                                {step.title}
                            </h3>

                            {/* 4. Description */}
                            <div className="text-center">
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
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
                        onClick={handleLineClick}
                    >
                        無料で利用開始
                    </Button>
                    <p className="text-slate-500 text-sm mt-4">
                        しつこい営業は一切行いません。
                    </p>
                </div>
            </div>
        </section>
    );
}