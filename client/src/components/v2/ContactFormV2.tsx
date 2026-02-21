import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { trackCTAClick } from "@/lib/gtag";

const formSchema = z.object({
    shopName: z.string().min(1, "店名を入力してください"),
    contactPerson: z.string().min(1, "担当者名を入力してください"),
    phone: z
        .string()
        .min(10, "正しい電話番号を入力してください")
        .regex(/^[0-9\-+() ]+$/, "電話番号は数字・ハイフンで入力してください"),
    email: z.string().email("正しいメールアドレスを入力してください"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormV2Props {
    onSuccess?: () => void;
}

export default function ContactFormV2({ onSuccess }: ContactFormV2Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);
        trackCTAClick("お試し申し込みフォーム送信", "ContactForm V2");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || "送信に失敗しました。");
            }

            onSuccess?.();
        } catch (err: unknown) {
            setError(
                err instanceof Error
                    ? err.message
                    : "送信中にエラーが発生しました。お電話にてお問い合わせください。"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact-form" className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* 店名 */}
                <div>
                    <label
                        htmlFor="shopName"
                        className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                        店名 <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="shopName"
                        type="text"
                        placeholder="例：神戸ビストロ〇〇"
                        autoComplete="organization"
                        {...register("shopName")}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white text-slate-800 placeholder-slate-400 text-base outline-none transition-all focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 ${errors.shopName
                                ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                                : "border-slate-200"
                            }`}
                    />
                    {errors.shopName && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.shopName.message}
                        </p>
                    )}
                </div>

                {/* 担当者名 */}
                <div>
                    <label
                        htmlFor="contactPerson"
                        className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                        担当者名 <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="contactPerson"
                        type="text"
                        placeholder="例：山田 太郎"
                        autoComplete="name"
                        {...register("contactPerson")}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white text-slate-800 placeholder-slate-400 text-base outline-none transition-all focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 ${errors.contactPerson
                                ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                                : "border-slate-200"
                            }`}
                    />
                    {errors.contactPerson && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.contactPerson.message}
                        </p>
                    )}
                </div>

                {/* 電話番号 */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                        電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="例：078-000-0000"
                        autoComplete="tel"
                        {...register("phone")}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white text-slate-800 placeholder-slate-400 text-base outline-none transition-all focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 ${errors.phone
                                ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                                : "border-slate-200"
                            }`}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* メールアドレス */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                        メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="例：info@example.com"
                        autoComplete="email"
                        {...register("email")}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white text-slate-800 placeholder-slate-400 text-base outline-none transition-all focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 ${errors.email
                                ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                                : "border-slate-200"
                            }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* エラー表示 */}
                {error && (
                    <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <p>{error}</p>
                    </div>
                )}

                {/* 送信ボタン + マイクロコピー */}
                <div className="pt-2">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full whitespace-normal leading-snug bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-black text-base md:text-lg py-6 rounded-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                送信中...
                            </>
                        ) : (
                            <>
                                神戸のこだわり野菜を無料でお試し
                                <ArrowRight className="w-5 h-5 shrink-0" />
                            </>
                        )}
                    </Button>
                    <p className="text-center text-slate-500 text-sm font-bold mt-3">
                        ✅ 簡単申し込み、1分で完了
                    </p>
                </div>
            </form>
        </div>
    );
}
