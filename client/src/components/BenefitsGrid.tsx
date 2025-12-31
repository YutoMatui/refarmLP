import { useEffect, useRef } from "react";
import { trackSectionScroll } from "../lib/gtag";

// 3つのコアな選ばれる理由
// imageのパスは前回の指示通り、分割保存されたファイルを指しています
const reasons = [
    {
        id: "unit-price",
        title: "物語の力で単価UP",
        subtitle: "メニューに書くだけで価値が伝わる",
        description: "生産者の顔やストーリーがセットで届くから、メニューや接客で「語れる一皿」に変わります。「地元のこだわり野菜」という付加価値が、20%以上の単価アップを正当化します。",
        image: "/images/icons/icon-story-value.png",
        highlight: "料理の味は変えずに、価値を変える。",
    },
    {
        id: "repeat",
        title: "納得と驚きでリピート",
        subtitle: "次も来たくなる「予告」の仕掛け",
        description: "市場にはない「朝採れ」の圧倒的な美味しさと、その背景情報が納得感を生み、ファンの心を掴みます。さらに「来月はこの野菜」という旬の予告が、次回の来店動機を自然に生み出します。",
        image: "/images/icons/icon-repeat-cycle.png",
        highlight: "いつもの食事を、記憶に残る体験へ。",
    },
    {
        id: "cost",
        title: "「訳あり野菜」で原価DOWN",
        subtitle: "味は同じでコスト削減",
        description: "形が少し悪い、サイズが不揃いといった「訳あり野菜」も積極的にラインナップ。味や鮮度は一級品と同じですが、価格は抑えられます。スープやソース、お通しなどに賢く活用できます。",
        image: "/images/icons/icon-smart-cost.png",
        highlight: "コストパフォーマンスを最大化。",
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
            className="py-16 md:py-24 bg-slate-50" // 背景を少しグレーにして白カードを目立たせる
            data-event="scroll_to_benefits"
        >
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4 leading-tight">
                        ベジコベが選ばれる<br className="md:hidden" />3つの理由
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        お店の利益とファンを増やす仕組みです
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.id}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >

                            {/* Icon Container - 変更点 */}
                            {/* CSSでの背景色(bg-emerald-500)や角丸(rounded-full)を削除しました */}
                            <div className="w-28 h-28 relative mb-8">
                                <img
                                    src={reason.image}
                                    alt={reason.title}
                                    // 画像自体が丸いので、コンテナいっぱいに表示します (w-full h-full)
                                    // 画像自体に影がありますが、さらに立体感を出すためにdrop-shadowを追加し、ホバー時の動きもつけました
                                    className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                                />
                                {/* Number Badge */}
                                {/* 画像の上に確実に乗るように z-10 を追加 */}
                                <div className="absolute -top-1 -right-1 bg-orange-500 text-white font-bold w-9 h-9 rounded-full flex items-center justify-center shadow-lg text-base border-4 border-white z-10">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-3 leading-tight">
                                {reason.title}
                            </h3>

                            {/* Subtitle (Highlight Color) */}
                            <p className="text-emerald-600 font-bold text-sm mb-5">
                                {reason.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                                {reason.description}
                            </p>

                            {/* Bottom Highlight Box */}
                            <div className="mt-auto pt-5 border-t border-slate-100 w-full">
                                <p className="text-slate-800 font-bold text-sm flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    {reason.highlight}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}