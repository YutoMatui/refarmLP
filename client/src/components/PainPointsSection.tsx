import { useState, useEffect } from "react";
import {
  TrendingDown, Users, Clock,
  ArrowRight, X, ChevronRight, ChevronLeft, Check,
  ShoppingBag, Smile, Smartphone // 解決策用のアイコン
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
  image: string; // 画像パスを追加
  icon: any;     // 解決策アイコン
}

interface PainPoint {
  id: string;
  icon: any; // 悩みアイコン
  title: string;
  description: string;
  solution: Solution;
}

const painPoints: PainPoint[] = [
  {
    id: "price",
    icon: TrendingDown,
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
    icon: Users,
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
    icon: Clock,
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
    {/* Box Container */}
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative h-full flex flex-col text-left"
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
        {point.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
        {point.description}
      </p>

      {/* Button Style Action */}
      <div className="mt-auto w-full bg-emerald-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 group-hover:bg-emerald-700 transition-colors shadow-md">
        ベジコベで解決する <ChevronRight className="w-5 h-5" />
      </div>

      {/* Speech Bubble Tail (Triangle) */}
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

  // Carousel Sync Logic
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  // Auto-play (optional)
  useEffect(() => {
    if (!api || open) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api, open]);

  // Sync React state back to Carousel
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

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % painPoints.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);

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

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pb-8">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={point.id}
              point={point}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Mobile View: Carousel Layout */}
        <div className="md:hidden relative max-w-sm mx-auto pb-4">
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

            {/* Dots indicator */}
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

        {/* Bottom Link (Optional) */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-emerald-100 text-sm mb-4">他にもこんなお悩みありませんか？</p>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 rounded-full px-8 py-6 text-lg font-bold transition-all">
            全機能・解決策を見る <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Solution Modal - Fullscreen Design */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-screen h-screen max-w-none m-0 p-0 bg-white overflow-y-auto border-0 rounded-none flex flex-col focus:outline-none">

          {/* Sticky Header */}
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                <currentPoint.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm md:text-lg font-bold text-slate-800 line-clamp-1">
                {currentPoint.title}
              </h3>
            </div>
            <DialogClose asChild>
              <button className="p-2 rounded-full hover:bg-slate-100 transition-colors bg-slate-50 border border-slate-200" aria-label="Close">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </DialogClose>
          </div>

          {/* Main Content Body */}
          <div className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-5xl">

            {/* 1. Problem Statement */}
            <div className="mb-12 text-center md:text-left">
              <span className="inline-block bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                現在のお悩み
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-5 leading-tight">
                {currentPoint.title}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {currentPoint.description}
              </p>
            </div>

            {/* 2. Visual & Solution */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Main Visual Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-square relative group bg-emerald-50 border-4 border-white ring-1 ring-slate-100">
                <img
                  src={currentPoint.solution.image}
                  alt={currentPoint.solution.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Solution Details */}
              <div className="flex flex-col justify-center h-full pt-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
                    <SolutionIcon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-emerald-600 font-bold text-xl tracking-wide ml-2">ベジコベなら！</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 leading-tight">
                  {currentPoint.solution.title}
                </h3>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                  {currentPoint.solution.description}
                </p>

                {/* Points List */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 border border-emerald-100">
                  <ul className="space-y-4">
                    {currentPoint.solution.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-bold text-base md:text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Footer Navigation */}
          <div className="sticky bottom-0 z-50 bg-white border-t border-slate-100 px-6 py-4 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <Button variant="ghost" onClick={handlePrev} className="text-slate-500 hover:text-emerald-600 gap-2 pl-0 hover:bg-slate-50">
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden md:inline">前の悩み</span>
              <span className="md:hidden">前へ</span>
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {painPoints.map((_, idx) => (
                <div key={idx} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-600 scale-125' : 'bg-slate-200'}`} />
              ))}
            </div>

            <Button variant="ghost" onClick={handleNext} className="text-slate-500 hover:text-emerald-600 gap-2 pr-0 hover:bg-slate-50">
              <span className="hidden md:inline">次の悩み</span>
              <span className="md:hidden">次へ</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

        </DialogContent>
      </Dialog>
    </section>
  );
}