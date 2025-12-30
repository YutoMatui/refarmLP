import { useState, useRef } from "react";
import { TrendingDown, Users, Clock, ArrowRight, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { trackSectionScroll, event } from "@/lib/gtag";

// Define the structure for pain points and solutions
interface Solution {
  image: string;
  title: string;
  description: string;
  points: string[];
}

interface PainPoint {
  id: string;
  icon: typeof TrendingDown;
  title: string;
  subtitle: string;
  description: string;
  solution: Solution;
}

const painPoints: PainPoint[] = [
  {
    id: "price",
    icon: TrendingDown,
    title: "「値上げしたいが、客離れが怖い」",
    subtitle: "利益圧迫の悩み",
    description: "原材料費は高騰する一方。でも、理由のない値上げはお客様を遠ざけてしまう…。",
    solution: {
      image: "/images/icons/icon-cost.png", // Using existing icon as placeholder for solution image
      title: "ベジコベなら！",
      description: "「規格外野菜」の活用で、原価を下げながら満足度をキープ！お客様には「安くて美味しい」を提供し、お店は利益率を改善できます。",
      points: [
        "味は一級品の「規格外野菜」を活用",
        "原価率を下げて、利益を確保",
        "お客様への価格転嫁を最小限に"
      ]
    }
  },
  {
    id: "customers",
    icon: Users,
    title: "「新規集客のコストが限界」",
    subtitle: "集客の悩み",
    description: "グルメサイトに頼った集客は、リピートに繋がらない。SNSの運用は時間もコストも嵩む。",
    solution: {
      image: "/images/icons/icon-discovery.png",
      title: "ベジコベなら！",
      description: "野菜の「物語（ストーリー）」が最大のコンテンツ！農家の想いやこだわりを伝えるだけで、ファンが定着し、自然とリピート率が向上します。",
      points: [
        "生産者のストーリーをコンテンツ化",
        "「語れるメニュー」で接客品質UP",
        "お客様の記憶に残る体験を提供"
      ]
    }
  },
  {
    id: "operations",
    icon: Clock,
    title: "「発注業務に追われている」",
    subtitle: "業務効率の悩み",
    description: "深夜のFAX、電話や注文作業。日々の雑務で、新メニューを考える時間すらない。",
    solution: {
      image: "/images/icons/icon-efficiency.png",
      title: "ベジコベなら！",
      description: "LINEひとつで全農家への発注が完了！履歴からの再注文も簡単。空いた時間で、新メニュー開発や接客に集中できます。",
      points: [
        "LINEで完結する簡単発注システム",
        "インボイス対応の請求書一元管理",
        "発注時間を最大90%削減"
      ]
    }
  },
];

export default function PainPointsSection() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
    event({
      action: "pain_point_click",
      category: "Engagement",
      label: painPoints[index].title,
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % painPoints.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);
  };

  const currentPoint = painPoints[currentIndex];

  return (
    <section id="pain-points" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 leading-tight">
            「美味しい料理を作るだけでは、
            <br className="hidden sm:block" />
            生き残れない時代です。」
          </h2>
          <p className="mt-4 text-slate-600">
            飲食店経営の3つの壁、ベジコベが解決します。<br />
            <span className="text-sm text-emerald-600 font-bold">気になるお悩みをクリックしてください</span>
          </p>
        </div>

        {/* Pain Point Cards (Interactive) */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={point.id}
              onClick={() => handleCardClick(index)}
              className="group cursor-pointer bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-emerald-500 relative overflow-hidden"
            >
              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 px-4 py-2 rounded-full shadow-sm text-emerald-700 font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  解決策を見る <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                <point.icon className="w-7 h-7 text-orange-500 group-hover:text-emerald-600 transition-colors" />
              </div>

              {/* Subtitle */}
              <span className="inline-block text-xs font-bold text-slate-500 mb-2 border border-slate-200 px-2 py-0.5 rounded">
                {point.subtitle}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Modal (Smaregi Style) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-none rounded-2xl shadow-2xl">
          <div className="flex flex-col md:flex-row h-full md:h-[500px]">
            {/* Left: Problem Statement (Darker Background) */}
            <div className="md:w-2/5 bg-slate-100 p-8 flex flex-col justify-center relative border-b md:border-b-0 md:border-r border-slate-200">
              <div className="absolute top-4 left-4 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                お悩み {currentIndex + 1}
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
                <currentPoint.icon className="w-8 h-8 text-orange-500" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 text-center md:text-left leading-snug">
                {currentPoint.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-center md:text-left">
                {currentPoint.description}
              </p>

              {/* Mobile Navigation Arrows */}
              <div className="flex justify-between mt-6 md:hidden">
                <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Right: Solution (White Background) */}
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative bg-white">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

              <div className="mb-2 text-emerald-600 font-bold text-lg flex items-center gap-2">
                {currentPoint.solution.title}
              </div>

              <h4 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 leading-tight">
                {currentPoint.solution.description}
              </h4>

              <div className="bg-emerald-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {currentPoint.solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
                <Button
                  variant="ghost"
                  onClick={handlePrev}
                  className="text-slate-400 hover:text-slate-700 pl-0 hover:bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> 前の悩み
                </Button>
                <div className="flex gap-1">
                  {painPoints.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-emerald-500' : 'bg-slate-200'}`}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  onClick={handleNext}
                  className="text-slate-400 hover:text-slate-700 pr-0 hover:bg-transparent"
                >
                  次の悩み <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
