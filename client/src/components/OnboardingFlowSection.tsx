import { Button } from "@/components/ui/button";
import { trackLineRegistration, trackCTAClick } from "../lib/gtag";

const steps = [
    {
        id: 1,
        title: "お申し込み",
        subtitle: "LINE登録",
        description: "LINEで友だち追加するだけ。30秒で完了します。",
        icon: "/images/icons/step-1-apply.png",
    },
    {
        id: 2,
        title: "ご相談",
        subtitle: "お店の課題ヒアリング",
        description: "お店の状況や課題をお聞かせください。最適なプランをご提案します。",
        icon: "/images/icons/step-2-consult.png",
    },
    {
        id: 3,
        title: "導入サポート",
        subtitle: "LINE連携・アカウント設定・農家提案",
        description: "専任スタッフがアカウント設定から農家マッチングまでサポートします。",
        icon: "/images/icons/step-3-setup.png",
    },
    {
        id: 4,
        title: "利用開始",
        subtitle: "サービススタート",
        description: "準備完了！朝採れ野菜とストーリーがお店に届きます。",
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
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        導入の流れ
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        ご利用開始までの流れ
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        最短3日で利用開始。導入から運用まで専任スタッフがサポートします。
                    </p>
                </div>

                {/* Steps Flow */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                                {/* Connector Line (Desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-emerald-600/30">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full" />
                                    </div>
                                )}

                                {/* Step Card */}
                                <div className="flex flex-col items-center text-center">
                                    {/* Step Number Badge */}
                                    <div className="relative mb-4">
                                        <div className="w-24 h-24 bg-emerald-600/10 rounded-2xl flex items-center justify-center overflow-hidden">
                                            <img
                                                src={step.icon}
                                                alt={step.title}
                                                className="w-16 h-16 object-contain"
                                            />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                                            {step.id}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-emerald-600 font-medium mb-2">
                                        {step.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-6 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                        onClick={handleLineClick}
                        data-event="line_registration_click"
                        data-event-location="onboarding_cta"
                    >
                        まずはLINEで相談する
                    </Button>
                    <p className="text-sm text-slate-500 mt-3">
                        ※無料相談・営業電話なし
                    </p>
                </div>
            </div>
        </section>
    );
}
