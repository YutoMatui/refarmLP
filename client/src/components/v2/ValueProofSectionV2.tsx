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
  {
    label: "満足度・ファン化",
    normal: "一般的な野菜では差別化要素になりにくい",
    refarm: "野菜を変えるだけで満足度が上がり、ファンが増える",
  },
];

const testimonials = [
  {
    shop: "神戸市中央区 / ビストロオーナー",
    comment:
      "生産者の顔と名前まで案内できるようになり、お客様に驚かれました。旬野菜メニューの注文が増え、リピート獲得につながりました。",
  },
  {
    shop: "神戸市灘区 / 創作和食店 店主",
    comment:
      "有機人参を同じ540円で仕入れても鮮度が違い、お客様に驚かれました。野菜の話題で会話が増え、リピート獲得につながりました。",
  },
  {
    shop: "神戸市東灘区 / カフェレストラン シェフ",
    comment:
      "畑から最短6時間で届くため仕込み品質が安定し、お客様に驚かれました。再来店率が上がり、リピート獲得につながりました。",
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

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm mb-14 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-5 bg-slate-100 text-left text-slate-800 font-black border-b border-slate-200">
                      比較項目
                    </th>
                    <th className="p-5 bg-slate-100 text-center text-slate-800 font-black border-b border-l border-slate-200">
                      通常の仕入れ
                    </th>
                    <th className="p-5 bg-emerald-50 text-center text-emerald-700 font-black border-b border-l border-slate-200">
                      りふぁーむ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-5 bg-slate-50 font-bold text-slate-700 border-b border-slate-200">
                      有機人参1kgの比較写真
                    </td>
                    <td className="p-4 border-b border-l border-slate-200">
                      <img
                        src="/images/before-service.png"
                        alt="通常の仕入れの野菜イメージ"
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    </td>
                    <td className="p-4 border-b border-l border-slate-200 bg-emerald-50/40">
                      <img
                        src="/images/after-service.png"
                        alt="りふぁーむで届く野菜イメージ"
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    </td>
                  </tr>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="p-5 bg-slate-50 font-bold text-slate-700 border-b border-slate-200">
                        {row.label}
                      </td>
                      <td className="p-5 text-slate-700 border-b border-l border-slate-200">
                        {row.normal}
                      </td>
                      <td className="p-5 text-slate-800 font-bold bg-emerald-50/40 border-b border-l border-slate-200">
                        {row.refarm}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 px-4 py-3 bg-slate-50 border-t border-slate-200 md:hidden">
              表は横にスクロールして比較できます。
            </p>
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
