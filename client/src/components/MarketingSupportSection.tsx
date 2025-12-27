import { ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "農家インタビュー",
        subtitle: "食材の魅力を言語化",
        description:
            "りふぁーむが農家にインタビューし、食材の魅力やストーリーを言語化します。「なぜ美味しいのか」「どんなこだわりがあるのか」を引き出します。",
    },
    {
        id: 2,
        title: "販促素材の提供",
        subtitle: "メニュー表・SNS発信素材",
        description:
            "その情報を「メニュー表」や「SNS発信素材」としてお店に提供。スタッフが自信を持って説明できる材料をお渡しします。",
    },
    {
        id: 3,
        title: "リピート促進",
        subtitle: "満足度向上→再来店",
        description:
            "お客さんが「美味しい理由」を知ることで満足度が上がり、LINE等の販促で再来店（リピート）を促す仕組みが完成します。",
    },
];

export default function MarketingSupportSection() {
    return (
        <section id="marketing-support" className="py-16 md:py-24 bg-emerald-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        リピートの仕組み
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        なぜリピートに繋がるのか？
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        食材の魅力を「伝える」ことで、お客様の満足度が変わります。
                        <br className="hidden md:block" />
                        ベジコベは野菜だけでなく、「ストーリー」もお届けします。
                    </p>
                </div>

                {/* Before/After Comparison */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-slate-200">
                            <span className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                BEFORE
                            </span>
                            <div className="mb-4">
                                <h4 className="text-lg font-bold text-slate-800 mb-1">トマトパスタ</h4>
                                <p className="text-2xl font-black text-slate-800">¥1,200</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="text-sm text-slate-500 mb-1">顧客心理</p>
                                <p className="text-base text-slate-700 font-medium">「ちょっと高いな…」</p>
                            </div>
                        </div>

                        {/* After */}
                        <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-emerald-600 relative">
                            <span className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                おすすめ
                            </span>
                            <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                AFTER
                            </span>
                            <div className="mb-4">
                                <h4 className="text-lg font-bold text-emerald-600 mb-1">ヤスオさんの王様トマトのパスタ</h4>
                                <p className="text-2xl font-black text-slate-800">¥1,400</p>
                            </div>
                            <div className="bg-emerald-600/10 rounded-lg p-4">
                                <p className="text-sm text-slate-500 mb-1">顧客心理</p>
                                <p className="text-base text-emerald-600 font-bold">「安い！食べてみたい！」</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-slate-600 mt-6">
                        「なぜ美味しいか」を伝えることで、<span className="font-bold text-emerald-600">価格への納得感</span>が生まれます。
                    </p>
                </div>

                {/* 3-Step Detail - Text only, no icons */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Connector Arrow (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                    <ArrowRight className="w-6 h-6 text-emerald-600" />
                                </div>
                            )}

                            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                                {/* Step Number */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-800 mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-emerald-600 font-medium mb-3">
                                    {step.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Message */}
                <div className="max-w-3xl mx-auto mt-12 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-emerald-600">
                        <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                            「食材の魅力」と「新メニュー」の発信をサポートすることで、
                            <br className="hidden md:block" />
                            <span className="text-emerald-600 font-bold">
                                お客様が「また来たい」と思うお店づくり
                            </span>
                            を実現します。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
