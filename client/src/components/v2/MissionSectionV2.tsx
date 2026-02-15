export default function MissionSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title - single line */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight">
            一つ一つの野菜が持つ物語で食卓をもっと豊かに。
            <br />
            神戸の農業をもっと明るく。
          </h2>

          {/* Body */}
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
              それが、ベジコベの想いです。
            </p>
          </div>

          {/* Decoration */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-1 h-16 bg-orange-400 rounded-full" />
            <div className="w-1 h-16 bg-white rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
