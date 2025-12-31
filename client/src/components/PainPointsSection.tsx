import { useState, useEffect, useCallback } from "react";
import {
  TrendingDown, Users, Clock,
  ChevronRight, ChevronLeft, Check,
  ShoppingBag, Smile, Smartphone, X
} from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { event } from "@/lib/gtag";

// ---------------------------
// Data Definition
// ---------------------------

interface Solution {
  title: string;
  description: string;
  points: string[];
  image: string;
  icon: any;
}

interface PainPoint {
  id: string;
  title: string;
  description: string;
  solution: Solution;
}

const painPoints: PainPoint[] = [
  {
    id: "price",
    title: "値上げしたいが、客離れが怖い",
    description: "原材料費は高騰する一方。でも、理由のない値上げはお客様を遠ざけてしまう…。",
    solution: {
      title: "「規格外野菜」活用で原価ダウン！",
      description: "形が少し悪いだけの「規格外野菜」を活用し、原価を下げながら満足度をキープ。お客様には「安くて美味しい」を提供し、お店は利益率を改善できます。",
      points: [
        "味は一級品の「規格外野菜」を活用",
        "原価率を下げて、しっかり利益を確保",
        "お客様への価格転嫁を最小限に"
      ],
      image: "/images/solution-price.jpg",
      icon: ShoppingBag
    }
  },
  {
    id: "customers",
    title: "新規集客のコストが限界",
    description: "グルメサイトに頼った集客は、リピートに繋がらない。SNSの運用は時間もコストも嵩む。",
    solution: {
      title: "「物語」でファンを作る！",
      description: "野菜の「物語（ストーリー）」が最大のコンテンツ！農家の想いやこだわりを伝えるだけで、ファンが定着し、自然とリピート率が向上します。",
      points: [
        "生産者のストーリーを自動でコンテンツ化",
        "「語れるメニュー」でスタッフの接客品質UP",
        "お客様の記憶に残る食体験を提供"
      ],
      image: "/images/solution-customers.jpg",
      icon: Smile
    }
  },
  {
    id: "operations",
    title: "発注業務に追われている",
    description: "深夜のFAX、電話や注文作業。日々の雑務で、新メニューを考える時間すらない。",
    solution: {
      title: "LINEひとつで完結！",
      description: "LINEひとつで全農家への発注が完了！履歴からの再注文も簡単。空いた時間で、新メニュー開発や接客に集中できます。",
      points: [
        "LINEで完結する簡単発注システム",
        "インボイス対応の請求書一元管理",
        "発注時間を最大90%削減"
      ],
      image: "/images/solution-operations.jpg",
      icon: Smartphone
    }
  },
];

// ---------------------------
// Sub Components
// ---------------------------

const PainPointCard = ({ point, onClick, className }: { point: PainPoint, onClick: () => void, className?: string }) => (
  <div className={`relative flex flex-col h-full ${className} pb-6`}>
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative h-full flex flex-col text-left border border-slate-100"
    >
      <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
        {point.title}
      </h3>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
        {point.description}
      </p>
      <div className="mt-auto w-full bg-emerald-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 group-hover:bg-emerald-700 transition-colors shadow-md">
        ベジコベで解決する <ChevronRight className="w-5 h-5" />
      </div>
      <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white filter drop-shadow-sm group-hover:-bottom-6 transition-all duration-300"></div>
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

  // Carousel Sync
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  // Sync React state to Carousel
  useEffect(() => {
    if (!api) return;
    if (api.selectedScrollSnap() !== currentIndex) {
      api.scrollTo(currentIndex);
    }
  }, [currentIndex, api]);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
    event({
      action: "pain_point_click",
      category: "Engagement",
      label: painPoints[index].title,
    });
  };

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % painPoints.length);
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);
  }, []);

  const currentPoint = painPoints[currentIndex];
  const SolutionIcon = currentPoint.solution.icon;

  return (
    <section id="pain-points" className="py-16 md:py-24 bg-emerald-600 overflow-hidden font-sans">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 drop-shadow-md">
            店舗のお悩み<span className="bg-white text-emerald-600 px-2 py-1 rounded mx-2 inline-block transform -rotate-2 shadow-sm">ベジコベ</span>で<br className="md:hidden" />すべて解決できます！
          </h2>
          <p className="text-emerald-50 text-sm md:text-lg font-medium opacity-90">
            飲食店経営の3つの壁、私たちがサポートします
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-12">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={point.id}
              point={point}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto pb-8">
          <Carousel
            opts={{ align: "center", loop: true }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-8">
              {painPoints.map((point, index) => (
                <CarouselItem key={point.id} className="pl-4 basis-11/12">
                  <PainPointCard
                    point={point}
                    onClick={() => handleCardClick(index)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-3 mt-0">
              {painPoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 shadow-sm ${index === currentIndex ? "bg-white scale-125" : "bg-transparent opacity-60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-4 md:mt-8">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 rounded-full px-8 py-6 text-lg font-bold transition-all">
            全機能・解決策を見る <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Solution Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {/* PC: max-w-6xl で幅制限と余白を確保, SP: 幅95% */}
        <DialogContent className="max-w-[95vw] md:max-w-6xl w-full p-0 bg-transparent border-0 shadow-none overflow-visible flex items-center justify-center my-8">

          <div className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]">

            {/* Close Button (Inside Top-Right) */}
            <DialogClose className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full text-slate-500 transition-colors md:hidden">
              <X className="w-6 h-6" />
            </DialogClose>

            {/* PC Navigation Buttons (Outside) */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 text-white rounded-full items-center justify-center transition-all z-50 backdrop-blur-sm border-2 border-white/50 shadow-lg"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 text-white rounded-full items-center justify-center transition-all z-50 backdrop-blur-sm border-2 border-white/50 shadow-lg"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row h-full">

              {/* Left: Image Area */}
              <div className="w-full md:w-1/2 bg-emerald-50 relative shrink-0 min-h-[300px] md:h-auto flex items-center justify-center overflow-hidden">
                <img
                  src={currentPoint.solution.image}
                  alt={currentPoint.solution.title}
                  className="w-full h-full object-cover md:object-cover"
                />

                {/* Mobile Title Overlay (SPのみ画像の上にタイトル表示) */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20 md:hidden">
                  <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-sm border border-white/20">
                    現在のお悩み
                  </span>
                  <h2 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                    {currentPoint.title}
                  </h2>
                </div>

                {/* SP Navigation Buttons (Inside Image Side-Center) */}
                <button
                  onClick={handlePrev}
                  className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Right: Text Content Area */}
              <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col h-full overflow-y-auto bg-white">

                {/* PC Header */}
                <div className="hidden md:block mb-8 pb-6 border-b border-slate-100">
                  <span className="inline-block bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full mb-3">
                    現在のお悩み
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-800 leading-tight">
                    {currentPoint.title}
                  </h2>
                </div>

                {/* Solution Detail */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4 mt-2 md:mt-0">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md rotate-3 shrink-0">
                      <SolutionIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-emerald-600 font-bold text-xl md:text-2xl tracking-wide">
                      ベジコベなら！
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-800 mb-4 leading-snug">
                    {currentPoint.solution.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                    {currentPoint.solution.description}
                  </p>

                  <div className="bg-emerald-50 rounded-2xl p-5 md:p-6 border border-emerald-100">
                    <ul className="space-y-3">
                      {currentPoint.solution.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                          </div>
                          <span className="text-slate-700 font-bold text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}