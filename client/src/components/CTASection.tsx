import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { trackLineRegistration, trackCTAClick } from "@/lib/gtag";

export default function CTASection() {
    const handleLineClick = (type: string) => {
        // GA4計測用
        trackLineRegistration("CTA Section");
        trackCTAClick(type, "CTA");
        // LINE公式アカウント等のURLへ遷移
        window.open("https://lin.ee/qMfjf66", "_blank");
    };

    return (
        // 背景色をスマレジの青から、ベジコベらしい「エメラルドグリーン」に変更
        <section className="py-16 md:py-24 bg-emerald-600 font-sans relative overflow-hidden">

            {/* 背景の装飾（うっすらとした野菜のイメージや光） */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Headline */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">
                        まずはLINEで、
                        <br className="md:hidden" />
                        今の野菜を覗いてみませんか？
                    </h2>
                    <p className="text-emerald-100 mt-4 text-sm md:text-lg font-medium">
                        無理な営業は一切いたしません。まずはお客様のペースでご覧ください。
                    </p>
                </div>

                {/* Cards Container: スマホで縦積み、PCで横並び */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 px-2">

                    {/* Card 1: 資料・ラインナップ (Left) */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-visible relative flex flex-col pt-12 md:pt-14 border-4 border-white transform transition-transform hover:scale-[1.02] duration-300">
                        {/* Floating Badge (左上の丸いバッジ) */}
                        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg flex flex-col items-center justify-center z-10 border-4 border-emerald-50 transform -rotate-12">
                            <span className="text-xs md:text-sm font-bold text-slate-500">簡単</span>
                            <span className="text-2xl md:text-3xl font-black text-emerald-600 leading-none">1分</span>
                        </div>

                        <div className="px-6 flex-1 text-center pb-6">
                            <div className="mb-4 flex justify-center h-48 md:h-56 items-center">
                                {/* 資料イメージ画像プレースホルダー */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src="/images/cta-doc-mockup.png"
                                        alt="資料とスマホ画面"
                                        className="max-h-full w-full object-cover rounded-lg drop-shadow-lg"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-40 bg-slate-100 rounded border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">資料・スマホ画像<br/>(要差替)</div>';
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">
                                ベジコベの仕組みや効果が<br />
                                <span className="text-emerald-600">すぐにわかる！</span>
                            </h3>
                            <p className="text-slate-500 text-xs md:text-sm">
                                PDF資料と、実際のアプリ画面をご覧いただけます。
                            </p>
                        </div>

                        {/* Bottom Button Area - 黄色/オレンジ系で緑背景に映える色に */}
                        <div
                            className="mt-auto p-5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors cursor-pointer group rounded-b-2xl"
                            onClick={() => handleLineClick("Material Download")}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-slate-900 font-black text-lg md:text-xl tracking-wide">
                                    早わかり資料を見る
                                </span>
                                <ChevronRight className="w-6 h-6 text-slate-900 group-hover:translate-x-1 transition-transform stroke-[3]" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: 相談・サポート (Right) */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-visible relative flex flex-col pt-12 md:pt-14 border-4 border-white transform transition-transform hover:scale-[1.02] duration-300">
                        {/* Floating Badge */}
                        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg flex flex-col items-center justify-center z-10 border-4 border-emerald-50 transform -rotate-12">
                            <span className="text-xs md:text-sm font-bold text-slate-500">気軽に</span>
                            <span className="text-2xl md:text-3xl font-black text-emerald-600 leading-none">相談</span>
                        </div>

                        <div className="px-6 flex-1 text-center pb-6">
                            <div className="mb-4 flex justify-center h-48 md:h-56 items-center">
                                {/* スタッフ/サポート画像プレースホルダー */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src="/images/cta-staff-smile.png"
                                        alt="笑顔のスタッフ"
                                        className="max-h-full w-full object-cover rounded-lg drop-shadow-lg"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-32 bg-slate-100 rounded border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">スタッフ・相談画像<br/>(要差替)</div>';
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">
                                誰に相談したらいいか分からない<br />
                                <span className="text-emerald-600">お店の悩みを無料相談！</span>
                            </h3>
                            <p className="text-slate-500 text-xs md:text-sm">
                                導入サポートや使い方のご質問もお気軽にどうぞ。
                            </p>
                        </div>

                        {/* Bottom Button Area */}
                        <div
                            className="mt-auto p-5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors cursor-pointer group rounded-b-2xl"
                            onClick={() => handleLineClick("Free Consultation")}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-slate-900 font-black text-lg md:text-xl tracking-wide">
                                    LINEから無料相談する
                                </span>
                                <ChevronRight className="w-6 h-6 text-slate-900 group-hover:translate-x-1 transition-transform stroke-[3]" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}