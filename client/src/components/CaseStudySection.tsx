import { Badge } from "@/components/ui/badge";

const cases = [
    {
        id: 1,
        title: "メインはいじらず、「脇役」で単価アップ。",
        category: "スパイスカレー店",
        achievement: "売上110%達成",
        tags: ["#規格外野菜活用", "#客単価UP", "#コスト削減"],
        image: "/images/case-spice-curry.png",
        story: "原価高騰に悩んでいたが、ベジコベの「規格外野菜」を使って自家製アチャールを開発。メインのカレーを値上げすることなく、トッピング注文率を上げることで無理なく客単価UPに成功。「安いのに味が濃くて美味しい野菜のおかげです」"
    },
    {
        id: 2,
        title: "スタッフが「語れる」メニューで、季節の一皿が大人気に。",
        category: "イタリアンレストラン",
        achievement: "売上120%達成",
        tags: ["#高付加価値化", "#リピート率UP", "#接客支援"],
        image: "/images/case-italian-restaurant.png",
        story: "「本日のおすすめ」が売れないのが悩みだった。ベジコベから届く野菜の「生産者ストーリー」をスタッフに共有したところ、接客の熱量が変化。お客様との会話が弾み、高単価な季節限定メニューの注文が倍増した。「野菜の背景にある物語が、一番の調味料でした」"
    }
];

export default function CaseStudySection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        導入事例
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        成功店舗の事例
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        多くの飲食店様が、ベジコベで課題を解決しています。
                    </p>
                </div>

                {/* Case Studies */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {cases.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-800 shadow-sm">
                                    {item.category}
                                </div>
                                <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-black shadow-md transform rotate-[-2deg]">
                                    {item.achievement}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    {item.story}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
