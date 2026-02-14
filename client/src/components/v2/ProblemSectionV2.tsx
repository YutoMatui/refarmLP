import { AlertCircle } from "lucide-react";

export default function ProblemSectionV2() {
  const problems = [
    {
      icon: AlertCircle,
      title: "農家さんとのやりとりが大変",
      description:
        "農家さんから直接野菜を買ってみたいが、個別のやりとりは大変そう。",
    },
    {
      icon: AlertCircle,
      title: "こだわりが伝わらない",
      description:
        "お客様に「地域貢献」や「食材へのこだわり」を伝え、選ばれるお店になりたいが伝わっていない。",
    },
    {
      icon: AlertCircle,
      title: "事務作業に追われている",
      description:
        "野菜の発注電話やFAX、月末の請求書整理などの事務作業に追われている。",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        {/* 見出し */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            素晴らしい食材が近くにあるのに、<br />
            <span className="text-emerald-600">使えないのは「もったいない」。</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            こだわりのあるオーナー様が直面する3つの悩み
          </p>
        </div>

        {/* 問題カード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-emerald-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
