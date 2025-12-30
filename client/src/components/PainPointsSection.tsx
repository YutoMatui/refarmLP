import { useState, useEffect } from "react";
import { TrendingDown, Users, Clock, ArrowRight, X, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { trackSectionScroll, event } from "@/lib/gtag";

// ---------------------------
// Data Definition
// ---------------------------

interface Solution {
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
      title: "「規格外野菜」活用で原価ダウン！",
      description: "形が少し悪いだけの「規格外野菜」を活用し、原価を下げながら満足度をキープ。お客様には「安くて美味しい」を提供し、お店は利益率を改善できます。",
      points: [
        "味は一級品の「規格外野菜」を活用",
        "原価率を下げて、しっかり利益を確保",
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
      title: "「物語」でファンを作る！",
      description: "野菜の「物語（ストーリー）」が最大のコンテンツ！農家の想いやこだわりを伝えるだけで、ファンが定着し、自然とリピート率が向上します。",
      points: [
        "生産者のストーリーを自動でコンテンツ化",
        "「語れるメニュー」でスタッフの接客品質UP",
        "お客様の記憶に残る食体験を提供"
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
      title: "LINEひとつで完結！",
      description: "LINEひとつで全農家への発注が完了！履歴からの再注文も簡単。空いた時間で、新メニュー開発や接客に集中できます。",
      points: [
        "LINEで完結する簡単発注システム",
        "インボイス対応の請求書一元管理",
        "発注時間を最大90%削減"
      ]
    }
  },
];

// ---------------------------
// Sub Components
// ---------------------------

const PainPointCard = ({ point, onClick, className }: { point: PainPoint, onClick: () => void, className?: string }) => (
  <div
    onClick={onClick}
    className={`group cursor-pointer bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-emerald-500 relative h-full flex flex-col items-center text-center ${className}`}
  >
    {/* Mobile Overlay Hint */}
    <div className="absolute top-1/2 right-4 -translate-y-1/2 md:hidden">
      <ChevronRight className="w-6 h-6 text-slate-300 animate-pulse" />
    </div>

    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors shadow-sm">
      <point.icon className="w-8 h-8 text-orange-500 group-hover:text-emerald-600 transition-colors" />
    </div>

    <span className="inline-block text-xs font-bold text-slate-500 mb-3 border border-slate-200 px-2 py-1 rounded bg-white">
      {point.subtitle}
    </span>

    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors leading-snug">
      {point.title}
    </h3>

    <p className="text-sm text-slate-500 line-clamp-2 mb-4">
      {point.description}
    </p>

    {/* "Click for Solution" Hint */}
    <div className="mt-auto pt-4 flex items-center justify-center text-emerald-600 font-bold text-sm gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
      解決策を見る <ArrowRight className="w-4 h-4" />
    </div>
  </div>
);

// ---------------------------
// Main Component
// ---------------------------

export default function PainPointsSection() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
    // GA4 Tracking
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
    <section id="pain-points" className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight mb-4">
            「美味しい料理を作るだけでは、
            <br className="hidden sm:block" />
            生き残れない時代です。」
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            飲食店経営の3つの壁、ベジコベが解決します。<br />
            <span className="text-emerald-600 font-bold mt-2 inline-block">気になるお悩みをタップしてください</span>
          </p>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={point.id}
              point={point}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Mobile View: Carousel Layout */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-4">
              {painPoints.map((point, index) => (
                <CarouselItem key={point.id} className="pl-4 basis-11/12">
                  <PainPointCard
                    point={point}
                    onClick={() => handleCardClick(index)}
                    className="shadow-md border border-slate-100"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Dots indicator could be added here if needed */}
            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Solution Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          // [&>button]:hidden removes the default shadcn close button to avoid duplication
          className="[&>button]:hidden w-[95vw] max-w-[900px] p-0 bg-white rounded-3xl overflow-visible border-0 shadow-2xl"
        >
          {/* Custom Close Button (Floating Outside) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-slate-800 text-white p-2 md:p-3 rounded-full hover:bg-slate-700 transition-colors z-50 shadow-lg border-4 border-white"
            aria-label="Close"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Left Column: The Problem */}
            <div className="md:w-5/12 bg-slate-50 p-6 md:p-10 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 relative">
              <div className="absolute top-6 left-6 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-500">
                お悩み
              </div>

              <div className="mt-6 md:mt-0 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm text-orange-500">
                  <currentPoint.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-snug">
                  {currentPoint.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentPoint.description}
                </p>
              </div>

              {/* Arrow Indicator for Mobile/Desktop */}
              <div className="flex justify-center mt-6 md:hidden text-emerald-500">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 border border-slate-100 shadow-sm text-emerald-500">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Right Column: The Solution */}
            <div className="md:w-7/12 p-6 md:p-10 bg-white rounded-b-3xl md:rounded-r-3xl flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full">
                  ベジコベなら
                </span>
              </div>

              <h4 className="text-xl md:text-2xl font-black text-emerald-600 mb-4">
                {currentPoint.solution.title}
              </h4>

              <p className="text-slate-700 font-bold leading-relaxed mb-6 text-sm md:text-base">
                {currentPoint.solution.description}
              </p>

              <div className="bg-emerald-50/50 rounded-xl p-4 md:p-6 border border-emerald-100">
                <ul className="space-y-3">
                  {currentPoint.solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrev}
                  className="text-slate-400 hover:text-slate-600 pl-0 hover:bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" /> 前の悩み
                </Button>
                <div className="flex gap-1">
                  {painPoints.map((_, idx) => (
                    <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  className="text-slate-400 hover:text-slate-600 pr-0 hover:bg-transparent"
                >
                  次の悩み <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}