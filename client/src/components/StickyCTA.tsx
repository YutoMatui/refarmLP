import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom duration-500">
            <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                <div className="flex gap-3 max-w-md mx-auto">
                    <Button
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 rounded-xl shadow-md flex items-center justify-center gap-2"
                        onClick={() => window.open('https://lin.ee/qMfjf66', '_blank')}
                    >
                        <MessageCircle className="w-5 h-5" />
                        LINEで無料相談
                    </Button>
                    <Button
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-md flex items-center justify-center gap-2"
                        onClick={() => window.open('https://lin.ee/qMfjf66', '_blank')}
                    >
                        資料をダウンロード
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
