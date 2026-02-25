const comparisonRows = [
  {
    label: "価格（有機人参1kg）",
    normal: "540円",
    refarm: "540円",
  },
  {
    label: "生産者情報",
    normal: "全国どこから届くか不明",
    refarm: "農家さんの実際の顔写真と名前が見える",
  },
  {
    label: "鮮度",
    normal: "収穫から数日経過",
    refarm: "圧倒的な鮮度（最短6時間）",
  },
];

const testimonials = [
  {
    shop: "神戸市中央区 / ビストロオーナー",
    comment:
      "仕入れ先を切り替えてから、野菜の説明に説得力が出ました。生産者の顔と名前までご案内できたことで、お客様に驚かれました。旬野菜メニューの注文が増え、リピート獲得につながりました。",
  },
  {
    shop: "神戸市灘区 / 創作和食店 店主",
    comment:
      "有機人参を同じ540円で仕入れても、鮮度が違うと料理全体の印象が変わりました。『この野菜はどこの農家さんですか？』と会話が生まれ、お客様に驚かれました。結果として次回来店が増え、リピート獲得につながりました。",
  },
  {
    shop: "神戸市東灘区 / カフェレストラン シェフ",
    comment:
      "畑から最短6時間で届くので、仕込み時点で野菜のコンディションが安定しました。こだわりを伝えやすくなり、お客様に驚かれました。ランチの再来店率が上がり、リピート獲得につながりました。",
  },
];

export default function ValueProofSectionV2() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              なぜ「りふぁーむ」なのか？
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
              同じ540円でも、価値はここまで変わる
            </h2>
            <p className="text-slate-700 font-bold text-sm md:text-lg">
              安さで選ばない本当にいいものを求めている方に選ばれています。
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm mb-14">
            <div className="grid md:grid-cols-3 border-b border-slate-200">
              <div className="hidden md:block bg-slate-100" />
              <div className="p-5 bg-slate-100 border-t md:border-t-0 md:border-l border-slate-200">
                <p className="text-center text-slate-800 font-black">通常の仕入れ</p>
              </div>
              <div className="p-5 bg-emerald-50 border-t md:border-t-0 md:border-l border-slate-200">
                <p className="text-center text-emerald-700 font-black">りふぁーむ</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 border-b border-slate-200">
              <div className="p-5 bg-slate-50 font-bold text-slate-700">有機人参1kgの比較写真</div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200">
                <img
                  src="/images/before-service.png"
                  alt="通常の仕入れの野菜イメージ"
                  className="w-full h-40 md:h-44 object-cover rounded-xl"
                />
              </div>
              <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 bg-emerald-50/40">
                <img
                  src="/images/after-service.png"
                  alt="りふぁーむで届く野菜イメージ"
                  className="w-full h-40 md:h-44 object-cover rounded-xl"
                />
              </div>
            </div>

            {comparisonRows.map((row) => (
              <div key={row.label} className="grid md:grid-cols-3 border-b border-slate-200 last:border-b-0">
                <div className="p-5 bg-slate-50 font-bold text-slate-700">{row.label}</div>
                <div className="p-5 border-t md:border-t-0 md:border-l border-slate-200 text-slate-700">
                  {row.normal}
                </div>
                <div className="p-5 border-t md:border-t-0 md:border-l border-slate-200 text-slate-800 font-bold bg-emerald-50/40">
                  {row.refarm}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 text-center mb-8">
              導入店舗様の声
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((voice, index) => (
                <article
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
                >
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-5">
                    「{voice.comment}」
                  </p>
                  <p className="text-emerald-700 font-bold text-sm">{voice.shop}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
