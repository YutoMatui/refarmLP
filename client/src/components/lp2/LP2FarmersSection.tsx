/**
 * VegeKobe LP2 - Section 5: Partner Farmers (Carousel)
 * Horizontal scrollable farmer cards - 5 farmers total
 */

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const farmers = [
  {
    id: 1,
    name: "鶴田農園（鶴田さん）",
    crop: "ナス",
    image: "/images/lp2/farmer-tsuruda.jpg",
    motto: "「農業は国防」がモットー",
    description:
      "ボリビアの経験を活かした持続可能な農業。真っ黒に輝く宝石のようなナス。1本から300個採れる木を、質重視で200個に厳選して栽培。",
    tag: "持続可能な農業",
    location: "神戸市西区",
  },
  {
    id: 2,
    name: "くさとねやはし農園",
    crop: "根菜・有機野菜",
    image: "/images/lp2/farmer-kusatone.jpg",
    motto: "雑草や花を「畑のパートナー」とする自然共生型栽培",
    description:
      "40歳過ぎてからの就農。皮ごと食べられる滋味深い野菜。土の力を信じ、自然と共に育てる農法で、野菜本来の旨みを引き出しています。",
    tag: "自然共生型栽培",
    location: "神戸市北区",
  },
  {
    id: 3,
    name: "みどり葉ファーム（田中さん）",
    crop: "葉物野菜",
    image: "/images/lp2/farmer-tanaka.jpg",
    motto: "土作りに3年かけた、本物の葉物を届けたい",
    description:
      "20代で脱サラし就農した若手農家。微生物の力を活かした土作りに徹底的にこだわり、えぐみのない柔らかな小松菜やほうれん草を生産。",
    tag: "若手農家",
    location: "神戸市西区",
  },
  {
    id: 4,
    name: "ポルト農園（山本さん）",
    crop: "西洋野菜",
    image: "/images/lp2/farmer-yamamoto.jpg",
    motto: "神戸の畑から、ヨーロッパの食卓を",
    description:
      "フランス修行経験を持つ異色の農家。ビーツ、フェンネル、トレビスなど、市場では手に入りにくい珍しい西洋野菜を少量多品種で栽培。",
    tag: "希少な西洋野菜",
    location: "神戸市北区",
  },
  {
    id: 5,
    name: "陽だまり農園（佐藤さん）",
    crop: "トマト・イチゴ",
    image: "/images/lp2/farmer-sato.jpg",
    motto: "40年の経験が生む、甘さの極み",
    description:
      "3代続く農家の熟練技術。糖度12度超えのフルーツトマトと、完熟朝摘みイチゴが自慢。「食べた人が笑顔になる」がこの農園の基準。",
    tag: "熟練の技",
    location: "神戸市西区",
  },
];

export default function LP2FarmersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-farmers"
      className="py-16 md:py-24 bg-emerald-50/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-white text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-emerald-200">
            提携農家のご紹介
          </span>
          <h2 className="text-[1.35rem] md:text-3xl font-black text-slate-800 leading-[1.5]">
            <span className="text-emerald-600">神戸</span>の誇る生産者たち
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            横にスクロールしてご覧ください
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Scroll buttons (desktop) */}
          <button
            onClick={() => scroll("left")}
            className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center border border-slate-200 transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="前へスクロール"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center border border-slate-200 transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="次へスクロール"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>

          {/* Scrollable area */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {farmers.map((farmer, index) => (
              <div
                key={farmer.id}
                className={`flex-shrink-0 w-[280px] md:w-[300px] snap-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 h-full flex flex-col">
                  {/* Farmer photo */}
                  <div className="relative h-[200px]">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                        {farmer.tag}
                      </span>
                    </div>

                    {/* Crop badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                        {farmer.crop}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[15px] font-black text-slate-800 mb-1">
                      {farmer.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span className="text-[11px] text-slate-400">
                        {farmer.location}
                      </span>
                    </div>
                    <p className="text-emerald-600 text-[12px] font-bold mb-2 italic">
                      {farmer.motto}
                    </p>
                    <p className="text-[12px] text-slate-500 leading-relaxed flex-1">
                      {farmer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots (mobile) */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {farmers.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 0 ? "bg-emerald-500" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
