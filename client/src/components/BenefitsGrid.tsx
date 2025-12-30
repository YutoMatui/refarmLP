import { useEffect, useRef } from "react";
import { trackSectionScroll } from "@/lib/gtag";

// Updated to 3 Core Reasons - Support section removed to be separate
const reasons = [
    {
        id: "unit-price",
        tag: "客単価UP",
        title: "「物語」で単価UP",
        subtitle: "メニューに書くだけで価値が伝わる",
        description: "生産者の顔やこだわり（ストーリー）がセットで届くから、メニューブックや接客で「語れる一皿」になります。「地元のこだわり野菜」という付加価値が、50円〜100円の値上げを正当化。",
        image: "/images/icons/icon-trust.png", // Using icon as main visual for simple design
        highlight: "料理の味は変えずに、価値を変える。",
    },
    {
        id: "repeat",
        tag: "リピートUP",
        title: "「感動品質」でリピート",
        subtitle: "スーパーにない朝採れ野菜",
        description: "市場経由では手に入らない「朝採れ」や「珍しい品種」が届きます。鮮度抜群の野菜が生む「驚きのおいしさ」が、お客様の記憶に残り、「あの野菜をまた食べたい」という動機を作ります。",
        image: "/images/icons/icon-quality.png",
        highlight: "他店との圧倒的な差別化。",
    },
    {
        id: "cost",
        tag: "原価DOWN",
        title: "「訳あり」で原価DOWN",
        subtitle: "味は同じでコスト削減",
        description: "形が少し悪い、サイズが不揃いといった「訳あり野菜」も積極的にラインナップ。味や鮮度は一級品と同じですが、価格は抑えられています。カレー、スープ、ソースやお通しなどに活用。",
        image: "/images/icons/icon-cost.png",
        highlight: "賢い仕入れで、コストパフォーマンスを最大化。",
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
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4 leading-tight">
                        ベジコベが選ばれる<br className="md:hidden" />3つの理由
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        お店の利益とファンを増やす仕組みです
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div key={reason.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">

                            {/* Icon Circle */}
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 relative">
                                <img
                                    src={reason.image}
                                    alt={reason.title}
                                    className="w-12 h-12 object-contain"
                                />
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Tag */}
                            <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full mb-3">
                                {reason.tag}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-2 leading-tight">
                                {reason.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-orange-500 font-bold text-sm mb-4">
                                {reason.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {reason.description}
                            </p>

                            {/* Highlight */}
                            <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                                <p className="text-emerald-700 font-bold text-sm">
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
