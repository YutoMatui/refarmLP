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
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Speech Bubble Label */}
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="relative bg-emerald-600 text-white font-black text-xl md:text-2xl px-12 py-4 rounded-full shadow-lg">
              ベジコベなら！
              {/* Bubble tail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[16px] border-t-emerald-600" />
            </div>
          </div>

          {/* 2x2 Grid - Mobile & Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-emerald-50/50 rounded-3xl p-6 md:p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-6 shadow-md bg-white border-4 border-white">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/120x120/E8F5E9/2E7D32?text=${index + 1}`;
                    }}
                  />
                </div>
                <p className="text-slate-800 font-black text-sm md:text-lg lg:text-xl leading-tight tracking-tighter">
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
