import { useEffect, useRef } from "react";
import { trackSectionScroll } from "@/lib/gtag";
import { Smartphone, Phone, Handshake } from "lucide-react";

// Updated to 3 Core Reasons + Support Section
const reasons = [
    {
        id: "unit-price",
        tag: "客単価UP",
        title: "「物語」という付加価値で、メニュー価格の納得感を創る。",
        description: "神戸の生産者の顔やこだわり（ストーリー）がセットで届くから、メニューブックや接客で「語れる一皿」になります。「地元のこだわり野菜」という付加価値が、50円〜100円の値上げを正当化し、お客様の満足度も高めます。",
        image: "/images/reason-menu-story.png", // AI Generated
        highlight: "料理の味は変えずに、価値を変える。",
    },
    {
        id: "repeat",
        tag: "リピートUP",
        title: "「ここでしか食べられない」感動品質で、ファンを離さない。",
        description: "スーパーや市場経由では手に入らない「朝採れ」や「珍しい品種」が届きます。鮮度抜群の野菜が生む「驚きのおいしさ」が、お客様の記憶に残り、「あの野菜をまた食べたい」という再来店（リピート）の動機を作ります。",
        image: "/images/reason-fresh-salad.png", // AI Generated
        highlight: "他店との圧倒的な差別化。",
    },
    {
        id: "cost",
        tag: "原価DOWN",
        title: "「訳あり野菜」の活用で、品質そのままで利益率は改善。",
        description: "形が少し悪い、サイズが不揃いといった「訳あり野菜」も積極的にラインナップ。味や鮮度は一級品と同じですが、価格は抑えられています。カレー、スープ、ソースやお通しなどに活用することで、全体の原価率を確実に引き下げます。",
        image: "/images/reason-imperfect-veg.png", // AI Generated
        highlight: "賢い仕入れで、コストパフォーマンスを最大化。",
    },
];

const supports = [
    {
        icon: Smartphone,
        title: "やりとりはLINEひとつで完結",
        description: "個別の農家さんとの電話やFAXは不要です。発注から請求書管理まで、いつものLINEで完結。システムがりふぁーむに入るため、配送トラブルや欠品対応もスムーズです。"
    },
    {
        icon: Phone,
        title: "困った時は電話でも相談OK",
        description: "チャットだけでは不安な急ぎの用件や、複雑な相談は電話でも対応します。デジタルツールが苦手な方でも安心してご利用いただけます。"
    },
    {
        icon: Handshake,
        title: "導入から活用まで徹底サポート",
        description: "最初のアカウント設定はもちろん、「この野菜どう使う？」といったメニュー相談まで。専任スタッフがあなたのお店に合わせて並走します。"
    }
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
        <>
            {/* Section 1: 3 Reasons (Business Impact) */}
            <section
                ref={sectionRef}
                id="benefits"
                className="py-16 md:py-24 bg-white"
                data-event="scroll_to_benefits"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                            選ばれる理由
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4 leading-tight">
                            飲食店経営を変える<br />3つの「確かな理由」
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            ただの野菜仕入れではありません。<br />お店の利益とファンを増やす仕組みです。
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                        {reasons.map((reason, index) => (
                            <div key={reason.id} className="group">
                                {/* Image Area */}
                                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                                    <img
                                        src={reason.image}
                                        alt={reason.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 left-0 bg-orange-500 text-white font-black text-lg px-4 py-2 rounded-br-xl shadow-md z-10">
                                        Reason 0{index + 1}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="px-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-emerald-100 text-emerald-800 text-sm font-bold px-3 py-1 rounded-full">
                                            {reason.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                                        {reason.title}
                                    </h3>

                                    <p className="text-emerald-600 font-bold text-sm mb-3 border-l-4 border-emerald-500 pl-3">
                                        {reason.highlight}
                                    </p>

                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Support (Peace of Mind) */}
            <section className="py-16 bg-[#f7f5f0] border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                            地元農家を応援したい。でも手間はかけたくない。<br />
                            そんなオーナー様のための<span className="text-emerald-600">「安心」な仕組み</span>。
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {supports.map((support, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                                    <support.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">
                                    {support.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {support.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
