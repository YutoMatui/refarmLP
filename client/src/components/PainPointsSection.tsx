/**
 * VegeKobe Pain Points Section Component
 * Design: 3-column card layout highlighting customer pain points
 * Features: Icon cards with problem descriptions
 */

import { TrendingDown, Users, Clock } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "「値上げしたいが、客離れが怖い」",
    description:
      "原材料費は高騰する一方。でも、理由のない値上げはお客様を遠ざけてしまう…。",
  },
  {
    icon: Users,
    title: "「新規集客のコストが限界」",
    description:
      "グルメサイトに頼った集客は、リピートに繋がらない。SNSの運用は時間もコストも嵩む。",
  },
  {
    icon: Clock,
    title: "「発注業務に追われている」",
    description:
      "深夜のFAX、電話や注文作業。日々の雑務で、新メニューを考える時間すらない。",
  },
];

export default function PainPointsSection() {
  return (
    <section id="pain-points" className="section-padding bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 leading-tight">
            「美味しい料理を作るだけでは、
            <br className="hidden sm:block" />
            生き残れない時代です。」
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                <point.icon className="w-7 h-7 text-orange" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
