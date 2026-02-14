/**
 * VegeKobe LP2 - Sticky CTA (Mobile bottom bar)
 * Fixed bottom bar with main CTA
 */

import { Leaf } from "lucide-react";

const CTA_URL = "https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv";

export default function LP2StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-md mx-auto">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-[15px] py-3.5 rounded-xl shadow-lg shadow-orange-200/50 active:scale-[0.98] transition-transform"
          >
            <Leaf className="w-4 h-4" />
            神戸のこだわり野菜を受け取る
          </a>
          <p className="text-center text-[10px] text-slate-400 mt-1.5">
            まずは無料でお試し配送・ヒアリング予約
          </p>
        </div>
      </div>
    </div>
  );
}
