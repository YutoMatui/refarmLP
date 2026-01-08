import { ArrowRight, MessageCircle, FileText, Users, Frown, Smile } from "lucide-react";

// 3ステップのデータ
const steps = [
    {
        id: 1,
        title: "農家への密着取材",
        subtitle: "想いを言語化・映像化",
        description: "りふぁーむが農家にインタビューを行い、栽培のこだわりや生産者の想いを言語化・映像化。「なぜ美味しいのか」というストーリーを引き出します。",
        icon: Users,
        image: "/images/step-interview.jpg",
    },
    {
        id: 2,
        title: "店内での価値伝達",
        subtitle: "メニュー・POP・SNS素材",
        description: "取材情報を「メニュー表」や「POP」として提供。「美味しい」に「情報」が加わることで、お客様の満足度と価格への納得感が向上します。",
        icon: FileText,
        image: "/images/step-pop.jpg",
    },
    {
        id: 3,
        title: "LINEでの再来店誘導",
        subtitle: "ファン化してリピート",
        description: "来店客をLINEへ誘導。食材や新メニューの魅力を定期的に発信することで、忘れられないお店となり「また来たい」を創出します。",
        icon: MessageCircle,
        image: "/images/step-line.jpg",
    },
];

export default function MarketingSupportSection() {
    return (
        <section id="marketing-support" className="py-16 md:py-24 bg-emerald-50 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* 1. Section Title */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-md">
                        売上アップの秘密
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-6 leading-tight">
                        なぜ、客単価とリピート率が上がるのか？
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        ただ野菜を仕入れるだけではありません。
                        <br className="hidden md:block" />
                        「美味しい理由」をお客様に届けることで、<span className="font-bold text-emerald-600 border-b-2 border-emerald-400">お店の価値</span>が変わります。
                    </p>
                </div>

                {/* 2. Before / After Comparison */}
                <div className="max-w-5xl mx-auto mb-24 relative">
                    {/* Background Connector Line (PC) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-slate-200 -z-10 rounded-full"></div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">

                        {/* Before Card */}
                        <div className="bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-200 relative grayscale opacity-90">
                            <div className="absolute -top-4 left-6 bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                これまでのメニュー
                            </div>
                            {/* Image Area */}
                            <div className="aspect-video bg-slate-300 rounded-xl mb-6 overflow-hidden relative">
                                <img src="/images/before-service.png" alt="Before" className="w-full h-full object-cover mix-blend-multiply" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-bold text-slate-600">トマトパスタ</h4>
                                <p className="text-3xl font-black text-slate-500">¥1,500</p>
                                <div className="bg-slate-200/50 p-4 rounded-lg mt-4">
                                    <p className="text-sm font-bold text-slate-500 mb-1">お客様の心理</p>
                                    <p className="text-slate-600">「美味しいけど、これなら他のお店でもいいかな…」</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow Icon (Center) */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-16 h-16 bg-emerald-500 rounded-full items-center justify-center shadow-lg border-4 border-white">
                            <ArrowRight className="w-8 h-8 text-white" />
                        </div>
                        <div className="md:hidden flex justify-center relative z-10 -my-6">
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white rotate-90">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        {/* After Card */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 border-4 border-emerald-500 shadow-2xl relative transform md:scale-105 z-10 mt-16 md:mt-0 md:translate-y-12">
                            <div className="absolute -top-5 right-6 bg-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                単価UP & 注文数UP!
                            </div>
                            <div className="absolute -top-4 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                ベジコベ導入後
                            </div>

                            {/* Image Area */}
                            <div className="aspect-video bg-emerald-50 rounded-xl mb-6 overflow-hidden relative">
                                <img src="/images/after-service.png" alt="After" className="w-full h-full object-cover" />
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-bold text-emerald-800">
                                    <span className="text-orange-500">ヤスオさんの王様トマト</span>のパスタ
                                </h4>
                                <div className="flex items-baseline gap-3">
                                    <p className="text-4xl font-black text-slate-800">¥1,800</p>
                                    <p className="text-lg text-slate-400 line-through decoration-2">¥1,500</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg mt-4 border border-emerald-100">
                                    <p className="text-sm font-bold text-emerald-600 mb-1">お客様の心理</p>
                                    <p className="text-slate-800 font-bold">「こんなにこだわってるからおいしいのか！また来たい！」</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. Logic Flow Steps */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                            <span className="text-emerald-600">「価値」</span>を伝える3つのステップ
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-emerald-100 rounded-full -z-10"></div>

                        {steps.map((step, index) => (
                            <div key={step.id} className="relative group">
                                {/* Connector Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-24 -right-8 text-emerald-300 z-10">
                                        <ArrowRight className="w-10 h-10" strokeWidth={3} />
                                    </div>
                                )}

                                {/* Step Card */}
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
                                    {/* Step Header Image */}
                                    <div className="h-40 bg-slate-100 relative">
                                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />

                                        {/* Step Number Badge */}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-emerald-600 font-black px-3 py-1 rounded shadow-sm text-sm">
                                            STEP 0{step.id}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 pt-8 flex-grow flex flex-col">
                                        <span className="text-xs font-bold text-orange-500 mb-2 block">
                                            {step.subtitle}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Conclusion Message (Letter Style) */}
                <div className="max-w-3xl mx-auto">
                    {/* スマホでのパディングを少し減らしました (p-6) */}
                    <div className="bg-orange-50 rounded-xl p-6 md:p-10 border-2 border-orange-100 relative shadow-sm text-center md:text-left">
                        {/* Clip decoration */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-16 bg-gray-200 rounded-full border-4 border-white shadow-sm hidden md:block"></div>

                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                {/* スマホでのフォントサイズを調整 (text-lg) */}
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 text-center md:text-left">
                                    ただ野菜を届けるだけではありません
                                </h3>
                                <p className="text-slate-700 leading-relaxed font-medium mb-4">
                                    {/* スマホのみ指定位置で改行 */}
                                    私たちは「お店のファン作り」まで、<br className="md:hidden" />
                                    サポートします。
                                    <br />
                                    美味しい料理と、その裏にある物語で、お客様が<span className="text-orange-500 font-bold text-lg border-b-2 border-orange-300">「また来たい」</span>と思うお店を一緒に作りましょう。
                                </p>
                            </div>
                            {/* 代表者署名風 */}
                            <div className="shrink-0 text-center">
                                <div className="w-32 h-32 bg-white rounded-full p-1 shadow-md mx-auto mb-2 overflow-hidden">
                                    {/* 代表者画像があればここに */}
                                    <img src="/images/profile-icon.jpg" alt="松井優人" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <p className="text-sm text-slate-500 font-bold">りふぁーむ代表</p>
                                <p className="text-lg font-black text-slate-800">松井 優人</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

