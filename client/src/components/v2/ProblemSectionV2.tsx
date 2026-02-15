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
  iconEmoji: string;
  title: string;
  body: string;
}

interface PainPoint {
  id: string;
  iconEmoji: string;
  title: string;
  subText: string;
  solution: Solution;
}

const painPoints: PainPoint[] = [
  {
    id: "procurement",
    iconEmoji: "😓",
    title: "農家さんと直接やりとりしたい。\nでも、個別の連絡や手配が面倒…",
    subText: "複数の農家へ個別に電話したり、配送手配をする時間がない。天候で欠品した時の対応も不安。",
    solution: {
      iconEmoji: "🤝",
      title: "窓口は「ベジコベ」ひとつだけ。\n面倒な調整はすべて私たちが引き受けます。",
      body: "オーナー様は、アプリから欲しい野菜を選ぶだけでOK。農家さんとの連絡や配送手配はすべて弊社が行います。\n\n【安心の欠品保証】\n万が一、天候などで目当ての野菜が採れない場合でも、私たちがすぐに提携する別の農家さんから代替野菜をご提案。お店のメニューに穴をあけさせません。",
    },
  },
  {
    id: "value",
    iconEmoji: "📢",
    title: "こだわりの食材を使っているのに、\nお客様にその価値が伝わっていない…",
    subText: "「いいもの」を入れている自信はある。でも、忙しくてPOPを作ったり、SNSで発信する余裕がない。",
    solution: {
      iconEmoji: "💡",
      title: "スマホを見れば「語れるストーリー」がある。\n伝え方の提案から運用代行までサポート。",
      body: "アプリ内で「生産者のこだわり動画」や「インタビュー」が見られるため、スタッフさんも自信を持って接客できます。\n\n【価値伝達サポート】\nさらにお店に合わせて、「どう伝えれば注文されるか」をご提案。ご希望であれば、飲食店の公式LINE運用代行までお任せいただき、リピーター定着まで伴走します。",
    },
  },
  {
    id: "admin",
    iconEmoji: "📑",
    title: "毎日のFAX発注、月末の請求書整理…\n事務作業に追われていませんか？",
    subText: "営業後の疲れ切った体で事務作業。紙の請求書が山積みで、管理が大変。",
    solution: {
      iconEmoji: "✨",
      title: "発注も請求書も、LINEの中で完結。\n紙の山をゼロにして、料理と接客に集中できます。",
      body: "発注は「いつもの注文」ボタンで一瞬で完了。\n\n【経理もスマートに】\n紙の請求書管理はもう必要ありません。日々の納品書も、月次の請求書も、すべてアプリ内で確認・管理が可能。事務コストを大幅に削減し、オーナー様の時間を生み出します。",
    },
  },
];

const PainPointCard = ({ point, onClick, className }: { point: PainPoint; onClick: () => void; className?: string }) => (
  <div className={`relative flex flex-col h-full ${className} pb-6`}>
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative h-full flex flex-col text-left border border-emerald-50"
    >
      <div className="text-3xl mb-3">{point.iconEmoji}</div>
      <h3 className="text-lg md:text-xl font-black text-slate-800 mb-4 leading-snug group-hover:text-emerald-600 transition-colors whitespace-pre-line">
        {point.title}
      </h3>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
        {point.subText}
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

  useEffect(() => {
    if (!api || !open) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, open]);

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
          <p className="text-emerald-50 text-sm md:text-base mb-4 opacity-90">
            素晴らしい食材が近くにあるのに、使っていないのは「もったいない」。
          </p>
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

      {/* Solution Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-3xl w-full p-0 bg-transparent border-0 shadow-none overflow-visible flex items-center justify-center my-8 pb-20 md:pb-0 focus:outline-none">
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

              <div className="p-6 md:p-10">
                {/* Problem header */}
                <div className="mb-6 text-center">
                  <span className="text-emerald-500 text-sm font-bold mb-1 block">
                    現在のお悩み
                  </span>
                  <div className="text-2xl mb-2">{currentPoint.iconEmoji}</div>
                  <h2 className="text-lg md:text-xl font-black text-slate-800 leading-tight whitespace-pre-line">
                    {currentPoint.title}
                  </h2>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2 mb-4 justify-center">
                    <span className="text-2xl">{currentPoint.solution.iconEmoji}</span>
                    <span className="text-emerald-600 font-bold text-lg md:text-xl">
                      ベジコベなら!
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-slate-800 mb-4 text-center whitespace-pre-line">
                    {currentPoint.solution.title}
                  </h3>

                  <div className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {currentPoint.solution.body}
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
