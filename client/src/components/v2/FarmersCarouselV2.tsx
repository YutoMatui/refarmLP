import { motion } from "framer-motion";

const farmers = [
  {
    name: "鶴田農園",
    specialty: "なす、水菜",
    image: "/images/farmers/tsuruta.png",
  },
  {
    name: "くさとねやはし農園",
    specialty: "有機野菜全般",
    image: "/images/farmers/kusatone.png",
  },
  {
    name: "芦田農園",
    specialty: "しいたけ、とうもろこし、イチゴ",
    image: "/images/farmers/ashida.png",
  },
  {
    name: "もりたんぼ",
    specialty: "人参、ハーブ",
    image: "/images/farmers/moritanbo.png",
  },
  {
    name: "ヘルシーファーム",
    specialty: "有機野菜",
    image: "/images/farmers/healthy.jpg",
  },
  {
    name: "ヤスオ農園",
    specialty: "トマト",
    image: "/images/farmers/yasuo.png",
  },
  {
    name: "熊井農園",
    specialty: "イタリア野菜",
    image: "/images/farmers/kumai.jpg",
  },
  {
    name: "ココナッツファーム",
    specialty: "黄ニラ",
    image: "/images/farmers/coconut.png",
  },
  {
    name: "アベファーム",
    specialty: "ブロッコリー、きゅうり",
    image: "/images/farmers/abe.jpg",
  },
];

// Double the farmers for seamless marquee
const allFarmers = [...farmers, ...farmers];

export default function FarmersCarouselV2() {
  const buildFallbackImage = (label: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect width="400" height="500" fill="#E8F5E9"/><text x="200" y="260" text-anchor="middle" font-size="32" font-family="sans-serif" fill="#2E7D32">${label}</text></svg>`
    )}`;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            提携農家
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-2">
            提携農家のご紹介
          </h2>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 36,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {allFarmers.map((farmer, i) => (
            <div
              key={`${farmer.name}-${i}`}
              className="w-64 md:w-80 shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-emerald-100"
            >
              {/* Image */}
              <div className="w-full h-48 md:h-56 overflow-hidden bg-emerald-100">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.startsWith("data:image/svg+xml")) {
                      target.src = buildFallbackImage(farmer.name);
                    }
                  }}
                />
              </div>
              {/* Info */}
              <div className="p-4 md:p-5 text-center">
                <h3 className="text-base md:text-lg font-black text-slate-900 mb-1">
                  {farmer.name}
                </h3>
                <p className="text-emerald-600 font-bold text-xs md:text-sm">
                  {farmer.specialty}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
