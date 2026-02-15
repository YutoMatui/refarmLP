export default function AboutSectionV2() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6">
            私たちについて
          </span>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
            ベジコベとは？
          </h2>

          {/* Description */}
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              ベジコベは、神戸市内の個人飲食店と地元農家をつなぐ
              <span className="font-bold text-emerald-600">地産地消プラットフォーム</span>です。
            </p>
            <p>
              「こだわりの食材を使いたい」「地域に貢献したい」という想いを持つオーナー様のために、
              仕入れの手間を最小限にしながら、新鮮で高品質な神戸産野菜を直接お届けします。
            </p>
            <p>
              農家さんとの連絡調整、配送手配、請求書管理まですべてベジコベにお任せください。
              オーナー様は、料理と接客に集中していただけます。
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-bold text-slate-900 mb-1">地産地消</h3>
              <p className="text-sm text-slate-600">神戸産の新鮮野菜を直送</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-slate-900 mb-1">ワンストップ</h3>
              <p className="text-sm text-slate-600">仕入れから管理まで一括対応</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-bold text-slate-900 mb-1">カンタン操作</h3>
              <p className="text-sm text-slate-600">LINEで注文・管理が完結</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
