export default function MissionSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* 見出し */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            一つ一つの野菜が持つ物語で<br />
            食卓をもっと豊かに。<br />
            神戸の農業をもっと明るく。
          </h2>

          {/* 本文 */}
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              神戸には誇れる農家がいます。<br />
              しかし、その素晴らしい野菜が飲食店に使われていない現状があります。
            </p>

            <p className="text-emerald-100">
              本当においしい地域の野菜を届け、<br />
              地域農業に貢献するサイクルを作りたい。
            </p>

            <p>
              それが、VegeKobeの想いです。
            </p>
          </div>

          {/* デコレーション */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-1 h-16 bg-orange-400 rounded-full" />
            <div className="w-1 h-16 bg-white rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
