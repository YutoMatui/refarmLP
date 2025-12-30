import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Quote } from "lucide-react";

export default function CaseStudySection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 font-sans">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Success Stories
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
                        「ベジコベ」で、<br className="md:hidden" />
                        お店が変わった。
                    </h2>
                    <p className="mt-4 text-slate-600">
                        実際に導入されたオーナー様のリアルな変化をご紹介します。
                    </p>
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Case 1: Curry Shop */}
                    <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                            {/* 画像: カレー屋 */}
                            <img
                                src="/images/case-curry.jpg"
                                alt="野菜カレーを提供する店主"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-3 py-1 text-sm font-bold shadow-md">
                                    売上 110% 達成
                                </Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                                <p className="text-white font-bold text-sm opacity-90">
                                    神戸スパイス堂（カレー専門店）
                                </p>
                            </div>
                        </div>

                        <CardContent className="p-6 md:p-8 bg-white relative">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 fill-slate-100" />

                            <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug pr-4">
                                メインはいじらず、<br />
                                <span className="text-emerald-600">「脇役」で単価アップ</span>に成功。
                            </h3>

                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <div className="w-1 bg-slate-200 h-full min-h-[3rem] rounded-full"></div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        「値上げは怖かったので、ベジコベの<span className="font-bold text-slate-800">規格外野菜</span>を使って自家製アチャール（漬物）を始めました。原価を抑えつつ『野菜も摂れる』と好評で、半数以上の方が追加注文してくれるように。無理なく客単価が上がりました。」
                                    </p>
                                </div>

                                <div className="bg-orange-50 rounded-lg p-3 flex items-center gap-2 text-sm font-bold text-orange-700">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>昨対比 売上10% UP</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Case 2: Italian Restaurant */}
                    <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                            {/* 画像: イタリアン */}
                            <img
                                src="/images/case-italian.jpg"
                                alt="イタリアンレストランのシェフ"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-3 py-1 text-sm font-bold shadow-md">
                                    売上 120% 達成
                                </Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                                <p className="text-white font-bold text-sm opacity-90">
                                    Trattoria V（イタリアン）
                                </p>
                            </div>
                        </div>

                        <CardContent className="p-6 md:p-8 bg-white relative">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 fill-slate-100" />

                            <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug pr-4">
                                スタッフが<span className="text-emerald-600">「語れる」メニュー</span>で、<br />
                                季節の一皿が大人気に。
                            </h3>

                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <div className="w-1 bg-slate-200 h-full min-h-[3rem] rounded-full"></div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        「野菜と一緒に届く<span className="font-bold text-slate-800">生産者さんのストーリー</span>をスタッフに共有したところ、接客が変わりました。お客様との会話が弾み、高単価な季節限定メニューが飛ぶように売れています。」
                                    </p>
                                </div>

                                <div className="bg-emerald-50 rounded-lg p-3 flex items-center gap-2 text-sm font-bold text-emerald-700">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>昨対比 売上20% UP</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}