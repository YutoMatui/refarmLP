export default function FeaturesSectionV2() {
  const features = [
    {
      title: "農家ストーリー画面",
      description: "生産者の顔写真、動画、こだわり文章が表示されている画面",
      highlight: "誰が作ったか一目瞭然",
      image:
        "https://via.placeholder.com/300x400/E8F5E9/2E7D32?text=Farmer+Story",
    },
    {
      title: "ワンタップ発注画面",
      description: "「いつもの注文」ボタンがあり、履歴から即発注できる画面",
      highlight: "忙しい営業後でも1秒で発注",
      image:
        "https://via.placeholder.com/300x400/E8F5E9/2E7D32?text=One+Tap+Order",
    },
    {
      title: "規格外野菜リスト",
      description: "安価で良質な規格外品が一覧で並ぶ画面",
      highlight: "掘り出し物が見つかる",
      image:
        "https://via.placeholder.com/300x400/E8F5E9/2E7D32?text=Irregular+Veggies",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 見出し */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            「これなら<span className="text-emerald-600">カンタンだ</span>」と<br />
            直感させるアプリ機能
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            VegeKobeなら、複雑な発注も、生産者との関係構築も、すべてがシンプルに
          </p>
        </div>

        {/* フィーチャーカード */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 画像 */}
              <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>

              {/* テキスト */}
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                {feature.description}
              </p>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
