/**
 * VegeKobe Support Section (Peace of Mind)
 */

import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const supportPoints = [
    {
        icon: ShieldCheck,
        title: "安全・品質へのこだわり",
        description: "契約農家はすべて、こだわり抜いた栽培方法を実践。ベジコベ独自の品質基準に基づき、最高鮮度の状態でお店にお届けします。"
    },
    {
        icon: Clock,
        title: "迅速なトラブル対応",
        description: "万が一の欠品や配送トラブルにも、LINEですぐに対応。担当スタッフが迅速に代替品の提案や調整を行い、お店の営業を止めません。"
    },
    {
        icon: HeartHandshake,
        title: "継続的なメニュー相談",
        description: "ただ野菜を売るだけではありません。季節の野菜を使ったおすすめメニューの提案や、販促POPの作成など、集客まで並走します。"
    }
];

export default function SupportSection() {
    return (
        <section className="py-16 md:py-24 bg-emerald-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        安心の理由
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        長く選ばれ続けるための、<br className="md:hidden" />充実したサポート体制
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        導入前から導入後まで、私たちが全力でお店をバックアップします。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {supportPoints.map((point, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                <point.icon className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">
                                {point.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
