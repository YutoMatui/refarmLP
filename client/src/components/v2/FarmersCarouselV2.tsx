import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const farmers = [
  {
    name: "鶴田農園",
    specialty: "なす、水菜",
    image: "/images/farmers/tsuruta.jpg",
  },
  {
    name: "くさとねやはし農園",
    specialty: "有機野菜全般",
    image: "/images/farmers/kusatone.jpg",
  },
  {
    name: "芦田農園",
    specialty: "しいたけ、とうもろこし、イチゴ",
    image: "/images/farmers/ashida.jpg",
  },
  {
    name: "もりたんぼ",
    specialty: "人参、ハーブ",
    image: "/images/farmers/moritanbo.jpg",
  },
  {
    name: "ヘルシーファーム",
    specialty: "有機野菜",
    image: "/images/farmers/healthy.jpg",
  },
  {
    name: "ヤスオ農園",
    specialty: "トマト",
    image: "/images/farmers/yasuo.jpg",
  },
  {
    name: "熊井農園",
    specialty: "イタリア野菜",
    image: "/images/farmers/kumai.jpg",
  },
  {
    name: "ココナッツファーム",
    specialty: "黄ニラ",
    image: "/images/farmers/coconut.jpg",
  },
  {
    name: "アベファーム",
    specialty: "ブロッコリー、きゅうり",
    image: "/images/farmers/abe.jpg",
  },
];

export default function FarmersCarouselV2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % farmers.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + farmers.length) % farmers.length);
  }, []);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [goNext]);

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleFarmers = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(farmers[(currentIndex + i) % farmers.length]);
    }
    return result;
  };

  const visibleFarmers = getVisibleFarmers();
  const currentFarmer = farmers[currentIndex];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            提携農家
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-2">
            提携農家のご紹介
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            神戸を支える{farmers.length}つの農家さんたち
          </p>
        </div>

        {/* Desktop: 3 cards visible */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {visibleFarmers.map((farmer, i) => (
              <div
                key={`${farmer.name}-${i}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 border border-emerald-100"
              >
                {/* Image */}
                <div className="w-full h-56 overflow-hidden bg-emerald-100">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=${encodeURIComponent(farmer.name)}`;
                    }}
                  />
                </div>
                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {farmer.name}
                  </h3>
                  <p className="text-emerald-600 font-bold text-sm">
                    {farmer.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-emerald-50 transition-colors z-10"
            aria-label="前へ"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-600" />
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-emerald-50 transition-colors z-10"
            aria-label="次へ"
          >
            <ChevronRight className="w-6 h-6 text-emerald-600" />
          </button>
        </div>

        {/* Mobile: Single card */}
        <div className="md:hidden relative max-w-xs mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-emerald-100">
            {/* Image */}
            <div className="w-full h-64 overflow-hidden bg-emerald-100">
              <img
                src={currentFarmer.image}
                alt={currentFarmer.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x300/E8F5E9/2E7D32?text=${encodeURIComponent(currentFarmer.name)}`;
                }}
              />
            </div>
            {/* Info */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-black text-slate-900 mb-1">
                {currentFarmer.name}
              </h3>
              <p className="text-emerald-600 font-bold text-sm">
                {currentFarmer.specialty}
              </p>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goPrev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-emerald-50"
              aria-label="前へ"
            >
              <ChevronLeft className="w-5 h-5 text-emerald-600" />
            </button>
            <div className="flex gap-1.5">
              {farmers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-emerald-600 w-6" : "bg-emerald-200"}`}
                  aria-label={`${idx + 1}番目の農家`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-emerald-50"
              aria-label="次へ"
            >
              <ChevronRight className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
