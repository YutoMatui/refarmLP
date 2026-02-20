import { ExternalLink, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLineRegistration } from "@/lib/gtag";
import { trackLineClick } from "@/lib/fbpixel";

const LINE_URL = "https://lin.ee/UX0sUuD";

export default function ThanksPageV2() {
    const handleLineClick = () => {
        trackLineRegistration("Thanks Page V2");
        trackLineClick("Thanks Page V2");
        window.open(LINE_URL, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">
                    お申し込みありがとうございます！
                </h1>
                <p className="text-slate-500 text-base mb-8 leading-relaxed">
                    ご入力のメールアドレスに確認メールをお送りしました。
                    <br />
                    ご確認の上、以下のご案内をご覧ください。
                </p>

                {/* Important Notice */}
                <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6 mb-8 text-left">
                    <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="font-black text-orange-600 text-base">
                            重要なご案内
                        </span>
                    </div>
                    <p className="text-slate-700 text-base font-bold leading-relaxed">
                        お試し1000円分の野菜の受け取り・発注には
                        <br />
                        <span className="text-orange-600 underline underline-offset-2">
                            公式LINEへのご登録が必要
                        </span>
                        です。
                    </p>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        LINEご登録後、担当者よりお客様専用の
                        <br />
                        発注アカウントをご案内いたします。
                    </p>
                </div>

                {/* LINE CTA */}
                <Button
                    onClick={handleLineClick}
                    className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-lg md:text-xl py-7 rounded-2xl shadow-xl shadow-green-200 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 mb-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M19.952 9.469c0-4.233-4.242-7.674-9.453-7.674S1.046 5.236 1.046 9.469c0 3.796 3.367 6.976 7.915 7.579.308.067.728.203.834.468.096.24.063.615.031.859l-.134.81c-.041.24-.192.939.822.512 1.015-.427 5.476-3.226 7.472-5.523 1.378-1.51 2.041-3.046 2.041-4.705h-.075Z" />
                    </svg>
                    公式LINEに登録する（1タップで完了）
                    <ExternalLink className="w-4 h-4" />
                </Button>

                <p className="text-slate-400 text-xs leading-relaxed">
                    ※ LINEアプリが開きます。「友だち追加」ボタンを押してください。
                </p>

                {/* Steps */}
                <div className="mt-10 bg-white border border-slate-100 rounded-2xl p-6 text-left shadow-sm">
                    <h2 className="font-black text-slate-700 text-sm mb-4 text-center">
                        【LINE登録後の流れ】
                    </h2>
                    <ol className="space-y-3">
                        {[
                            "LINEの「友だち追加」ボタンを押す",
                            "担当者からお客様専用アカウントをご案内",
                            "スマホから1000円分のお好きな野菜をご注文！",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white text-xs font-black rounded-full flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <span className="text-slate-600 text-sm leading-relaxed">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
