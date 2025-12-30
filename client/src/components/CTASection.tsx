/**
 * VegeKobe Mid-Page CTA Section
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight">
                            「神戸の野菜」で、<br className="md:hidden" />
                            お店の新しい価値を作りませんか？
                        </h2>
                        <p className="text-slate-300 text-lg">
                            まずは資料ダウンロード、またはお気軽にご相談ください。
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-7 px-8 rounded-xl shadow-lg transition-all hover:-translate-y-1">
                            コンセプト資料をみる
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
