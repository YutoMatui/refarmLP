import { useState, useEffect, useCallback } from "react";
import {
  TrendingDown, Users, Clock,
  ChevronRight, ChevronLeft, Check,
  ShoppingBag, Smile, Smartphone
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
      className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative h-full flex flex-col text-left border border-emerald-50"
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
      {/* 吹き出しのしっぽ */}
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
        {/* スマホ修正: pb-20 (下部に余白) を追加してカードを上に押し上げる */}
        <DialogContent className="max-w-[95vw] md:max-w-5xl w-full p-0 bg-transparent border-0 shadow-none overflow-visible flex items-center justify-center my-8 pb-20 md:pb-0 focus:outline-none">

          <div className="relative w-full">

            {/* PC用矢印 (カードの外側) */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full items-center justify-center transition-all z-50 shadow-lg"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full items-center justify-center transition-all z-50 shadow-lg"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* カード本体 */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">

              {/* スマホ修正: 矢印をカード全体の中心線（ライン）に配置。色は見やすいように少し濃く調整 */}
              <button
                onClick={handlePrev}
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/10 text-slate-500 rounded-full flex items-center justify-center hover:bg-black/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/10 text-slate-500 rounded-full flex items-center justify-center hover:bg-black/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row min-h-[500px]">
                {/* 画像エリア */}
                <div className="w-full md:w-5/12 bg-white flex items-center justify-center p-6 pb-0 md:p-8 md:pr-0">
                  {/* 画像 (横長) */}
                  <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
                    <img
                      src={currentPoint.solution.image}
                      alt={currentPoint.solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* テキストエリア */}
                <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center">
                  {/* 課題タイトル */}
                  <div className="mb-6 text-center md:text-left">
                    <span className="text-emerald-500 text-sm font-bold mb-1 block">
                      現在のお悩み
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-slate-800 leading-tight">
                      {currentPoint.title}
                    </h2>
                  </div>

                  {/* 解決策詳細 */}
                  <div className="border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                      <span className="text-emerald-600 font-bold text-lg md:text-xl">
                        ベジコベなら！
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 text-center md:text-left">
                      {currentPoint.solution.title}
                    </h3>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                      {currentPoint.solution.description}
                    </p>

                    <ul className="space-y-2">
                      {currentPoint.solution.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 shrink-0" strokeWidth={3} />
                          <span className="text-slate-700 font-bold text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 吹き出しのしっぽ (PCのみ) */}
              <div className="hidden md:block absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
            </div>

            {/* インジケーター */}
            <div className="flex justify-center gap-2 mt-8">
              {painPoints.map((_, idx) => (
                <div key={idx} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40'}`} />
              ))}
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
