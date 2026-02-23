import { ExternalLink, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLineRegistration } from "@/lib/gtag";
import { trackLineClick } from "@/lib/fbpixel";
import { Link } from "wouter";

const LINE_URL = "https://lin.ee/UX0sUuD";

export default function ThanksPageV2() {
    const handleLineClick = () => {
        trackLineRegistration("Thanks Page V2");
        trackLineClick("Thanks Page V2");
        window.open(LINE_URL, "_blank");
    };

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dcfce7,white_45%)] px-4 py-10 md:py-16">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 md:px-10 py-8 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <p className="text-sm font-bold tracking-wide">FORM COMPLETED</p>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-black leading-tight">
                            お申し込みありがとうございます
                        </h1>
                        <p className="text-emerald-50 mt-3 leading-relaxed">
                            入力内容を受け付けました。次のステップとして、LINE登録をお願いいたします。
                        </p>
                    </div>

                    <div className="p-6 md:p-10 grid md:grid-cols-5 gap-6 md:gap-8">
                        <section className="md:col-span-3">
                            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 md:p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <MessageCircle className="w-5 h-5 text-emerald-700" />
                                    <span className="text-sm font-black text-emerald-700">次に必要なこと</span>
                                </div>
                                <p className="text-slate-700 font-bold leading-relaxed">
                                    お試し野菜の受け取り・発注には、公式LINE登録が必要です。
                                </p>
                            </div>

                            <div className="mt-5 space-y-3">
                                {[
                                    "「公式LINEに登録する」をタップ",
                                    "メールで届く連携URLを公式LINEトークに送ってタップ",
                                    "アプリでお試し野菜を注文",
                                ].map((text, i) => (
                                    <div key={text} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5">
                                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <aside className="md:col-span-2">
                            <Button
                                onClick={handleLineClick}
                                className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-base py-6 rounded-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M19.952 9.469c0-4.233-4.242-7.674-9.453-7.674S1.046 5.236 1.046 9.469c0 3.796 3.367 6.976 7.915 7.579.308.067.728.203.834.468.096.24.063.615.031.859l-.134.81c-.041.24-.192.939.822.512 1.015-.427 5.476-3.226 7.472-5.523 1.378-1.51 2.041-3.046 2.041-4.705h-.075Z" />
                                </svg>
                                公式LINEに登録する
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                                ※ LINEアプリが開きます。「友だち追加」を押してください。
                            </p>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                ※ 連携URLは、メールをご確認のうえLINEトーク内で開くとスムーズです。
                            </p>

                            <Link href="/2" className="block mt-6 text-center text-sm font-bold text-emerald-700 hover:text-emerald-800">
                                前のページに戻る
                            </Link>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
}
