import { Leaf, Zap, Recycle, Clock, Megaphone } from "lucide-react";

export default function BenefitsSectionV2() {
  const benefits = [
    {
      icon: Zap,
      number: "1",
      title: "【鮮度】",
      catch: "その日の朝に採れた野菜が、その日のうちに届く。",
      description:
        "市場を通さない農家直送物流。圧倒的な鮮度が料理の味を底上げする。",
      color: "emerald",
    },
    {
      icon: Leaf,
      number: "2",
      title: "【安価（コスト）】",
      catch: "「規格外野菜」の活用で、原価を賢く抑える。",
      description:
        "味は一級品だが形が不揃いな野菜も積極的に提供。コストパフォーマンスの高い仕入れが可能。",
      color: "emerald",
    },
    {
      icon: Recycle,
      number: "3",
      title: "【貢献（SDGs）】",
      catch: "仕入れるだけで、神戸の地域農業と環境を守れる。",
      description:
        "フードロス削減と地産地消への貢献。お店のCSR活動としてもアピールできる。",
      color: "orange",
    },
    {
      icon: Clock,
      number: "4",
      title: "【事務作業削減】",
      catch: "毎日の発注も、月次の請求書も、LINEひとつで。",
      description:
        "電話やFAXは不要。請求書もLINEで自動送付され、事務作業の時間を大幅に削減できる。",
      color: "orange",
    },
    {
      icon: Megaphone,
      number: "5",
      title: "【価値伝達（集客支援）】",
      catch: "「こだわりの理由」をお客様に届けるまでをサポート。",
      description:
        "良い食材を使うだけでは意味がない。農家の物語を伝えるPOP素材の提供や、飲食店の「公式LINE運用代行」もサポートし、リピーター定着と客単価アップまで伴走する。",
      color: "emerald",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        {/* 見出し */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            VegeKobeが<span className="text-emerald-600">選ばれる5つの理由</span>
          </h2>
        </div>

        {/* ベネフィットカード */}
        <div className="space-y-6 md:space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const bgColor =
              benefit.color === "emerald"
                ? "bg-emerald-50 border-emerald-200"
                : "bg-orange-50 border-orange-200";
            const accentColor =
              benefit.color === "emerald"
                ? "text-emerald-600"
                : "text-orange-600";
            const badgeColor =
              benefit.color === "emerald"
                ? "bg-emerald-600"
                : "bg-orange-600";

            return (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 border-2 ${bgColor} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex gap-4 md:gap-6">
                  {/* 左側：アイコンと番号 */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${badgeColor} flex items-center justify-center mb-2`}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* 右側：テキスト */}
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl font-black ${accentColor} mb-1`}>
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
