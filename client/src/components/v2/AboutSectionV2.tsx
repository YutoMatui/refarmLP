export default function AboutSectionV2() {
  const buildFallbackImage = (label: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="#E8F5E9"/><text x="60" y="66" text-anchor="middle" font-size="24" font-family="sans-serif" fill="#2E7D32">${label}</text></svg>`
    )}`;

  const items = [
    {
      image: "/images/about-v2-fresh.png",
      text: "圧倒的鮮度でお届け！",
    },
    {
      image: "/images/about-v2-trust.png",
      text: "顔が見えて安心！",
    },
    {
      image: "/images/about-v2-line.png",
      text: "Lineアプリで30秒発注！",
    },
    {
      image: "/images/about-v2-value.png",
      text: "こだわりを価値として伝える！",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Speech Bubble Label */}
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="relative bg-emerald-600 text-white font-black text-xl md:text-2xl px-12 py-4 rounded-full shadow-lg">
              ベジコベなら！
              {/* Bubble tail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[16px] border-t-emerald-600" />
            </div>
          </div>

          {/* 2x2 Grid - Mobile & Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center bg-white rounded-3xl p-4 md:p-6 border-2 border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-black">
                  {index + 1}
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden mb-4 md:mb-5 shadow-md bg-emerald-50 border border-emerald-100">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = buildFallbackImage(String(index + 1));
                    }}
                  />
                </div>
                <p className="text-slate-800 font-black text-sm md:text-base lg:text-lg leading-snug">
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
