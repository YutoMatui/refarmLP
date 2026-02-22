import { Sparkles, Leaf, Recycle, Clock, Megaphone } from "lucide-react";

export default function BenefitsSectionV2() {
  const benefits = [
    {
      icon: Sparkles,
      number: "1",
      title: "【鮮度】",
      catch: "畑から６時間以内に厨房まで届きます。",
      description:
        "市場を通さない農家直送だからこそ、圧倒的な鮮度が料理の味を底上げします。",
    },
    {
      icon: Leaf,
      number: "2",
      title: "【コスト】",
      catch: "規格外野菜の活用で、原価を賢く抑える。",
      description:
        "味は一級品だが形が不揃いな野菜も提供。コストパフォーマンスの高い仕入れが可能です。",
    },
    {
      icon: Recycle,
      number: "3",
      title: "【地域貢献（SDGs）】",
      catch: "仕入れるだけで、神戸の地域農業と環境を守れる。",
      description:
        "フードロス削減と地産地消への貢献。お店のCSR活動としてもアピールできます。",
    },
    {
      icon: Clock,
      number: "4",
      title: "【事務作業】",
      catch: "毎日の発注も、月次の請求書管理も、LINEひとつで。",
      description:
        "電話やFAXは不要。請求書もLINEで自動送付され、事務作業の時間を大幅に削減できます。",
    },
    {
      icon: Megaphone,
      number: "5",
      title: "【満足度アップ支援】",
      catch: "「こだわりの理由」をお客様に届けるまでをサポート。",
      description:
        "良い食材を使うだけでなく、そのこだわりを伝える公式LINE運用もサポートし、リピーター定着と客単価アップまで伴走します。",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title - matching FeaturesSection design */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            選ばれる理由
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800">
            ベジコベが選ばれる5つの理由
          </h2>
        </div>

        {/* Benefit Cards - unified design */}
        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Left: Icon with number */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-600 flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-black text-emerald-600 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-base md:text-lg font-bold text-slate-900 mb-2">
                      {benefit.catch}
                    </p>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {benefit.description}
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
