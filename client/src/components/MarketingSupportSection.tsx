import { ArrowRight, MessageCircle, FileText, Users } from "lucide-react";

// ロジックに基づいた3ステップの構成
const steps = [
    {
        id: 1,
        title: "農家への密着取材",
        subtitle: "想いを言語化・映像化",
        description:
            "りふぁーむが農家にインタビューを行い、栽培のこだわりや生産者の想いを言語化・映像化。「なぜ美味しいのか」というストーリーを引き出します。",
        icon: Users,
    },
    {
        id: 2,
        title: "店内での価値伝達",
        subtitle: "メニュー・POP・SNS素材",
        description:
            "取材情報を「メニュー表」や「POP」として提供。「美味しい」に「情報」が加わることで、お客様の満足度と価格への納得感が向上します。",
        icon: FileText,
    },
    {
        id: 3,
        title: "LINEでの再来店誘導",
        subtitle: "ファン化してリピート",
        description:
            "来店客をLINEへ誘導。食材や新メニューの魅力を定期的に発信することで、忘れられないお店となり「また来たい」を創出します。",
        icon: MessageCircle,
    },
];

export default function MarketingSupportSection() {
    return (
        <section id="marketing-support" className="py-16 md:py-24 bg-emerald-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        売上アップの秘密
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        なぜ、客単価とリピート率が上がるのか？
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        ただ野菜を仕入れるだけではありません。
                        <br className="hidden md:block" />
                        「美味しい理由」をお客様に届けることで、お店の価値が変わります。
                    </p>
                </div>

                {/* Before/After Comparison (Logic 3: 価格への納得感) */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        {/* Before */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-slate-200 opacity-80 scale-95">
                            <span className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                これまでのメニュー
                            </span>
                            <div className="mb-4">
                                <h4 className="text-lg font-bold text-slate-800 mb-1">
                                    トマトパスタ
                                </h4>
                                <p className="text-2xl font-black text-slate-800">¥1,200</p>
                            </div>
                            <div className="bg-slate-100 rounded-lg p-4">
                                <p className="text-sm text-slate-500 mb-1 font-bold">お客様の反応</p>
                                <p className="text-base text-slate-600">
                                    「美味しいけど、ちょっと高いかな…」
                                </p>
                            </div>
                        </div>

                        {/* After */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-emerald-500 relative transform md:scale-105 z-10">
                            <span className="absolute -top-4 right-4 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                                単価UP & 注文数UP!
                            </span>
                            <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                ベジコベ導入後
                            </span>
                            <div className="mb-4">
                                <h4 className="text-lg font-bold text-emerald-800 mb-1">
                                    ヤスオさんの王様トマトのパスタ
                                </h4>
                                <p className="text-3xl font-black text-slate-800">
                                    ¥1,400 <span className="text-sm font-normal text-slate-500 line-through">¥1,200</span>
                                </p>
                            </div>
                            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                <p className="text-sm text-emerald-600 mb-1 font-bold">お客様の反応</p>
                                <p className="text-base text-slate-800 font-bold">
                                    「このトマト食べてみたい！安い！」
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-slate-600 mt-8 font-medium">
                        こだわりが伝わることで、
                        <span className="font-bold text-emerald-600 text-lg border-b-2 border-emerald-600">
                            価格以上の価値
                        </span>
                        を感じていただけます。
                    </p>
                </div>

                {/* 3-Step Logic Flow */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            {/* Connector Arrow (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-emerald-300">
                                    <ArrowRight className="w-8 h-8" strokeWidth={3} />
                                </div>
                            )}
                            {/* Connector Arrow (Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="flex md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-emerald-300 rotate-90">
                                    <ArrowRight className="w-8 h-8" strokeWidth={3} />
                                </div>
                            )}

                            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border-b-4 border-transparent hover:border-emerald-500">
                                {/* Step Header */}
                                <div className="flex flex-col items-center text-center mb-4">
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-emerald-600 font-bold text-sm tracking-wider mb-1">
                                        STEP {step.id}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-800">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-bold mt-1 bg-slate-100 px-2 py-1 rounded">
                                        {step.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed text-center">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Conclusion Message */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 shadow-lg text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                            ただ野菜を届けるだけではありません
                        </h3>
                        <p className="text-base md:text-lg font-medium leading-relaxed opacity-90">
                            「お店のファン作り」までサポートします。
                            <br className="hidden md:block" />
                            美味しい料理と、その裏にある物語で、
                            <br />
                            お客様が<span className="text-yellow-300 font-bold text-xl">「また来たい」</span>と思うお店を一緒に作りましょう。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}