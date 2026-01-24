import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom duration-500">
            <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                <div className="flex gap-3 max-w-md mx-auto">
                    <Button
                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black py-6 rounded-xl shadow-md flex items-center justify-center gap-2"
                        onClick={() => window.open('https://lin.ee/qMfjf66', '_blank')}
                    >
                        無料で利用開始
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 border-2 border-slate-800 text-slate-800 hover:bg-slate-50 font-bold py-6 rounded-xl shadow-md flex items-center justify-center gap-2"
                        onClick={() => window.open('https://lin.ee/qMfjf66', '_blank')}
                    >
                        資料請求
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
