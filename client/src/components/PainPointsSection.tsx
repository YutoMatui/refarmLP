import { useState, useEffect } from "react";
import { TrendingDown, Users, Clock, ArrowRight, X, ChevronRight, ChevronLeft } from "lucide-react";
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
      image: "/images/icons/icon-cost.png",
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

// Card component for reuse
const PainPointCard = ({ point, onClick, className }: { point: PainPoint, onClick: () => void, className?: string }) => (
  <div
    onClick={onClick}
    className={`group cursor-pointer bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-emerald-500 relative h-full flex flex-col items-center text-center ${className}`}
  >
    {/* Overlay Arrow Hint */}
    <div className="absolute top-1/2 right-2 -translate-y-1/2 md:hidden">
      <ChevronRight className="w-6 h-6 text-slate-300 animate-pulse" />
    </div>

    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
      <point.icon className="w-7 h-7 text-orange-500 group-hover:text-emerald-600 transition-colors" />
    </div>

    <span className="inline-block text-xs font-bold text-slate-500 mb-2 border border-slate-200 px-2 py-0.5 rounded">
      {point.subtitle}
    </span>

    <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
      {point.title}
    </h3>

    {/* "Click for Solution" Hint */}
    <div className="mt-auto pt-4 flex items-center justify-center text-emerald-600 font-bold text-sm gap-1 opacity-80 group-hover:opacity-100">
      解決策を見る <ArrowRight className="w-4 h-4" />
    </div>
  </div>
);

export default function PainPointsSection() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

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

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      // Logic for selecting event if needed in carousel view
    });
  }, [api]);

  return (
    <section id="pain-points" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 leading-tight">
            「美味しい料理を作るだけでは、
            <br className="hidden sm:block" />
            生き残れない時代です。」
          </h2>
          <p className="mt-4 text-slate-600">
            飲食店経営の3つの壁、ベジコベが解決します。<br />
            <span className="text-sm text-emerald-600 font-bold">気になるお悩みをタップしてください</span>
          </p>
        </div>

        {/* Desktop View: Grid Layout (No Carousel) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={point.id}
              point={point}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Mobile View: Carousel Layout */}
        <div className="md:hidden relative max-w-5xl mx-auto px-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {painPoints.map((point, index) => (
                <CarouselItem key={point.id} className="pl-4">
                  <PainPointCard
                    point={point}
                    onClick={() => handleCardClick(index)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Solution Modal (Bubble Style) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="w-[90vw] max-w-[400px] md:max-w-4xl p-6 md:p-10 bg-white border-2 border-emerald-500 rounded-3xl shadow-2xl overflow-visible"
          style={{ margin: '0 auto' }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-3 -right-3 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-700 transition-colors z-50 shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Left: Problem Recap */}
            <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 mb-3">
                {currentPoint.subtitle}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {currentPoint.title}
              </h3>
              <div className="w-full h-px bg-slate-100 my-2 md:hidden" />
              <div className="text-emerald-600 font-black text-4xl mb-2 hidden md:block">
                ↓
              </div>
            </div>

            {/* Right: Solution */}
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  ベジコベなら
                </div>
                <h4 className="text-lg font-bold text-emerald-700">
                  {currentPoint.solution.title}
                </h4>
              </div>

              <p className="text-xl md:text-2xl font-black text-slate-800 mb-4 leading-snug">
                {currentPoint.solution.description}
              </p>

              <div className="bg-emerald-50 rounded-xl p-4 md:p-5">
                <ul className="space-y-2">
                  {currentPoint.solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm md:text-base">
                      <span className="text-emerald-500 shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation inside modal */}
              <div className="flex justify-between mt-6 pt-4 border-t border-slate-100">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrev}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> 前の悩み
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  className="text-slate-400 hover:text-slate-600"
                >
                  次の悩み <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
