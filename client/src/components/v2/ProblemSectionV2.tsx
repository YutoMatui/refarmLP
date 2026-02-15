import { useState, useEffect, useCallback } from "react";
import {
  ChevronRight, ChevronLeft, Check,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";

interface Solution {
  title: string;
  description: string;
  points: string[];
  image: string;
}

interface PainPoint {
  id: string;
  title: string;
  description: string;
  solution: Solution;
}

const painPoints: PainPoint[] = [
  {
    id: "procurement",
    title: "農家さんと直接やりとりしたい。でも、個別の連絡や手配が面倒…",
    description: "複数の農家へ個別に電話したり、配送手配をする時間がない。天候で欠品した時の対応も不安。",
    solution: {
      title: "窓口は「ベジコベ」ひとつだけ。面倒な調整はすべて私たちが引き受けます。",
      description: "オーナー様は、アプリから欲しい野菜を選ぶだけでOK。農家さんとの連絡や配送手配はすべて弊社が行います。",
      points: [
        "安心の欠品保証",
        "万が一、天候などで目当ての野菜が採れない場合でも、提携する別の農家さんから代替野菜をご提案",
        "お店のメニューに穴をあけさせません",
      ],
      image: "/images/problem-v2-1.jpg",
    },
  },
  {
    id: "value",
    title: "こだわりの食材を使っているのに、お客様にその価値が伝わっていない…",
    description: "「いいもの」を入れている自信はある。でも、忙しくてPOPを作ったり、SNSで発信する余裕がない。",
    solution: {
      title: "スマホを見れば「語れるストーリー」がある。伝え方の提案から運用代行までサポート。",
      description: "アプリ内で「生産者のこだわり動画」や「インタビュー」が見られるため、スタッフさんも自信を持っておすすめできます。",
      points: [
        "価値伝達サポート",
        "お店に合わせて「どう伝えれば注文されるか」をご提案",
        "飲食店の公式LINE運用代行でリピーター定着まで伴走",
      ],
      image: "/images/problem-v2-2.jpg",
    },
  },
  {
    id: "admin",
    title: "毎日のFAX発注、月末の請求書整理…事務作業に追われていませんか？",
    description: "営業後の疲れ切った体で事務作業。紙の請求書が山積みで、管理が大変。",
    solution: {
      title: "発注も請求書も,LINEの中で完結。紙の山をゼロにして、料理と接客に集中できます。",
      description: "発注は「いつもの注文」ボタンで一瞬で完了。",
      points: [
        "経理もスマートに",
        "日々の納品書も月次の請求書もアプリ内で確認・管理",
        "事務コストを大幅に削減し、オーナー様の時間を生み出します",
      ],
      image: "/images/problem-v2-3.jpg",
    },
  },
];

const PainPointCard = ({ point, onClick, className }: { point: PainPoint; onClick: () => void; className?: string }) => (
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
      <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white filter drop-shadow-sm group-hover:-bottom-6 transition-all duration-300"></div>
    </div>
  </div>
);

export default function ProblemSectionV2() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // UseEffect for auto-scrolling mobile carousel
  useEffect(() => {
    if (!api || open) return;
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [api, open]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.on("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (api.selectedScrollSnap() !== currentIndex) {
      api.scrollTo(currentIndex);
    }
  }, [currentIndex, api]);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
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

  return (
    <section className="py-16 md:py-24 bg-emerald-600 overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 drop-shadow-md">
            こだわりのあるオーナー様が直面する
            <span className="bg-white text-emerald-600 px-2 py-1 rounded mx-1 inline-block transform -rotate-1 shadow-sm">3つの悩み</span>
          </h2>
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
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 shadow-sm ${index === currentIndex ? "bg-white scale-125" : "bg-transparent opacity-60"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Solution Modal - PainPointsSection design: image left, text right */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl w-full p-0 bg-transparent border-0 shadow-none overflow-visible flex items-center justify-center my-8 pb-20 md:pb-0 focus:outline-none">
          <div className="relative w-full">
            {/* PC arrows */}
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

            {/* Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
              {/* Mobile arrows */}
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
                {/* Image Area - left on desktop, top on mobile */}
                <div className="w-full md:w-5/12 bg-white flex items-center justify-center p-6 pb-0 md:p-8 md:pr-0">
                  <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
                    <img
                      src={currentPoint.solution.image}
                      alt={currentPoint.solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text Area - right on desktop, below on mobile */}
                <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center">
                  {/* Problem header */}
                  <div className="mb-6 text-center md:text-left">
                    <span className="text-emerald-500 text-sm font-bold mb-1 block">
                      現在のお悩み
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-slate-800 leading-tight">
                      {currentPoint.title}
                    </h2>
                  </div>

                  {/* Solution */}
                  <div className="border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                      <span className="text-emerald-600 font-bold text-lg md:text-xl">
                        ベジコベなら!
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

              <div className="hidden md:block absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {painPoints.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white scale-125" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
