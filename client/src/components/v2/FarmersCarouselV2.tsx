import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function FarmersCarouselV2() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const farmers = [
    {
      name: "鶴田農園",
      farmer: "鶴田さん",
      specialty: "ナス",
      image: "https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=Tsuruta+Farm",
      motto: "「農業は国防」がモットー。",
      description:
        "ボリビアの経験を活かした持続可能な農業。真っ黒に輝く宝石のようなナス。1本から300個採れる木を、質重視で200個に厳選して栽培。",
    },
    {
      name: "くさとねやはし農園",
      farmer: "くさとねやはし",
      specialty: "根菜・有機野菜",
      image:
        "https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=Kusatone+Farm",
      motto: "雑草や花を「畑のパートナー」とする。",
      description:
        "自然共生型栽培。40歳過ぎてからの就農。皮ごと食べられる滋味深い野菜。",
    },
    {
      name: "若葉ファーム",
      farmer: "田中さん",
      specialty: "葉物野菜",
      image: "https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=Wakaba+Farm",
      motto: "土作りにこだわる若手農家。",
      description:
        "新しい視点と伝統の融合。新鮮で栄養価の高い葉物野菜を毎日供給。",
    },
    {
      name: "希少野菜園",
      farmer: "佐藤さん",
      specialty: "西洋野菜",
      image:
        "https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=Rare+Veggies",
      motto: "珍しい西洋野菜の栽培に挑戦。",
      description:
        "希少性の高い野菜で、メニューの差別化をサポート。レストランのシェフからも信頼厚い。",
    },
    {
      name: "甘い農園",
      farmer: "鈴木さん",
      specialty: "トマト・イチゴ",
      image:
        "https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=Sweet+Farm",
      motto: "熟練の技で甘さを引き出す。",
      description:
        "40年以上の農業経験。トマトとイチゴの甘さは神戸一。デザートとしても使える品質。",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // カード幅 + gap
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 見出し */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            提携農家のご紹介
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            神戸を支える5人の農家さんたち
          </p>
        </div>

        {/* カルーセルコンテナ */}
        <div className="relative">
          {/* スクロール可能なコンテナ */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
          >
            {farmers.map((farmer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[320px] md:w-[300px]"
              >
                <div className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-emerald-100 h-full flex flex-col">
                  {/* 画像 */}
                  <div className="w-full h-48 md:h-40 overflow-hidden bg-emerald-100">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* コンテンツ */}
                  <div className="p-5 md:p-4 flex-1 flex flex-col">
                    <h3 className="text-lg md:text-base font-black text-slate-900 mb-1">
                      {farmer.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">
                      <span className="font-bold">{farmer.farmer}</span> /{" "}
                      <span className="text-emerald-600 font-bold">
                        {farmer.specialty}
                      </span>
                    </p>

                    <p className="text-sm font-bold text-orange-600 mb-2">
                      {farmer.motto}
                    </p>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed flex-1">
                      {farmer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ナビゲーションボタン（PC用） */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-2">
            <button
              onClick={() => scroll("left")}
              className="pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:bg-emerald-50 transition-colors"
              aria-label="前へ"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:bg-emerald-50 transition-colors"
              aria-label="次へ"
            >
              <ChevronRight className="w-6 h-6 text-emerald-600" />
            </button>
          </div>
        </div>

        {/* モバイル用スクロールヒント */}
        <p className="text-center text-xs text-slate-500 mt-4 md:hidden">
          ← スワイプして他の農家さんを見る →
        </p>
      </div>
    </section>
  );
}
