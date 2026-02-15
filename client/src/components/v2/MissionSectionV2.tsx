export default function MissionSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight">
            一つ一つの野菜が持つ物語で食卓をもっと豊かに。
            <br />
            神戸の農業をもっと明るく。
          </h2>

          {/* Body */}
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              神戸には誇れる農家がたくさんいます。<br />
              しかし、それを知る術がほとんどありません。
            </p>

            <p className="text-emerald-100">
              本当においしい神戸の野菜をプロに届け、<br />
              そのおいしさで一人でも多くの方を笑顔にしたい。
            </p>

            <p>
              それが、私たちの想いです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
