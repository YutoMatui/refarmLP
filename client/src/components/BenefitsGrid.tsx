import { useEffect, useRef } from "react";
import { trackSectionScroll } from "../lib/gtag";

const benefits = [
    {
        id: "trust",
        label: "安心",
        title: "農家の顔とこだわりが見える",
        description: "農家の顔とこだわりが見えるから、安心して注文できる",
        icon: "/images/icons/icon-trust.png",
    },
    {
        id: "quality",
        label: "品質",
        title: "期待通りの野菜が届く",
        description: "実際の写真・品種・量目表記で、期待通りの野菜が届く",
        icon: "/images/icons/icon-quality.png",
    },
    {
        id: "stability",
        label: "安定",
        title: "欠品時も代替提案が可能",
        description: "複数農家と提携しているため、欠品時も代替提案が可能",
        icon: "/images/icons/icon-stability.png",
    },
    {
        id: "efficiency",
        label: "効率",
        title: "発注時間を短縮",
        description: "LINE感覚の操作、お気に入り機能で発注時間を短縮",
        icon: "/images/icons/icon-efficiency.png",
    },
    {
        id: "discovery",
        label: "発見",
        title: "旬の野菜情報が随時更新",
        description: "旬の野菜や新しい農家情報が随時更新される",
        icon: "/images/icons/icon-discovery.png",
    },
    {
        id: "price",
        label: "価格",
        title: "原価管理がしやすい",
        description: "スーパーのような激しい価格変動がなく、原価管理がしやすい",
        icon: "/images/icons/icon-price.png",
    },
    {
        id: "cost",
        label: "コスト",
        title: "味はそのままで原価を抑える",
        description: "規格外・訳あり野菜の活用で、味はそのままで原価を抑えられる",
        icon: "/images/icons/icon-cost.png",
    },
    {
        id: "management",
        label: "管理",
        title: "データで一元管理",
        description: "発注・請求書をデータで一元管理（インボイス対応）",
        icon: "/images/icons/icon-management.png",
    },
    {
        id: "support",
        label: "支援",
        title: "LINEですぐに相談可能",
        description: "困った時はLINEですぐに相談可能（24時間受付）",
        icon: "/images/icons/icon-support.png",
    },
];

export default function BenefitsGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const hasTracked = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTracked.current) {
                        hasTracked.current = true;
                        trackSectionScroll("メリットセクション");
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
            id="benefits"
            className="py-16 md:py-24 bg-white"
            data-event="scroll_to_benefits"
        >
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        選ばれる理由
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        ベジコベが選ばれる9つの理由
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        飲食店オーナー様の「困った」を解決する機能が揃っています
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-600/20"
                        >
                            {/* Icon and Label */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
                                    <img
                                        src={benefit.icon}
                                        alt={benefit.label}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded mb-1">
                                        {benefit.label}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-800">
                                        {benefit.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
