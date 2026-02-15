export default function AboutSectionV2() {
  const items = [
    {
      image: "/images/fresh-vegetables.png",
      text: "神戸野菜を朝仕入れてその日のうちにお届け!",
    },
    {
      image: "/images/farmer-portrait.png",
      text: "顔が見える関係で仕入れ可能!",
    },
    {
      image: "/images/line-ordering.png",
      text: "LINEアプリで30秒発注!",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Speech Bubble Label */}
          <div className="flex justify-center mb-8">
            <div className="relative bg-emerald-600 text-white font-black text-lg md:text-xl px-8 py-3 rounded-full shadow-md">
              ベジコベなら
              {/* Bubble tail */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-emerald-600" />
            </div>
          </div>

          {/* 3 Items - horizontal on PC, vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/96x96/E8F5E9/2E7D32?text=${index + 1}`;
                  }}
                />
                <p className="text-slate-800 font-bold text-sm md:text-base leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
