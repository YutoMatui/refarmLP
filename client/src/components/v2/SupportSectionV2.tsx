const supportFeatures = [
  {
    image: "/images/support-line.png",
    title: "LINEで即座に対応",
    subtitle: "365日いつでも相談",
    description:
      "発注ミスや配送トラブルも、LINE一本ですぐに解決。電話を待たされるストレスはありません。専任スタッフがスピーディーに対応します。",
  },
  {
    image: "/images/support-quality.png",
    title: "品質・鮮度保証",
    subtitle: "万が一の時も安心",
    description:
      "届いた野菜の品質に問題があった場合は、すぐに代替品の手配や返金対応を行います。独自の品質基準をクリアした野菜のみをお届けします。",
  },
  {
    image: "/images/support-menu.png",
    title: "こだわりを伝えるサポート",
    subtitle: "導入後もずっと伴走",
    description:
      "メニュー表やPOP制作、公式LINEの構築・運用支援など、お店のこだわりをお客様にお届けし、リピート促進までトータルでサポートいたします。",
  },
];

export default function SupportSectionV2() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-6 leading-tight">
            お客様の「困った」も
            <br className="md:hidden" />
            <span className="text-emerald-600 border-b-4 border-emerald-200">
              LINEですぐに解決!
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-bold">
            サポートスタッフは、
            <span className="text-emerald-600">
              お店ごとの専属担当制だから安心
            </span>
          </p>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            お店の事情や想いを理解した専属スタッフが、誠実・丁寧に対応します。
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-emerald-50/50 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg border border-emerald-100/50"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 mb-6 shadow-sm rounded-full shrink-0"
              />
              <p className="text-sm font-bold text-emerald-600 mb-2">
                {feature.subtitle}
              </p>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
