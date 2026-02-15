export default function AboutSectionV2() {
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
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Speech Bubble Label */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative bg-emerald-600 text-white font-black text-lg md:text-xl px-10 py-3 rounded-full shadow-md">
              ベジコベなら！
              {/* Bubble tail */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-emerald-600" />
            </div>
          </div>

          {/* 2x2 Grid - Mobile & Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-emerald-50/50 rounded-2xl p-4 md:p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-4 shadow-md bg-white border-2 border-white">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/96x96/E8F5E9/2E7D32?text=${index + 1}`;
                    }}
                  />
                </div>
                <p className="text-slate-800 font-black text-xs md:text-sm lg:text-base leading-tight">
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
