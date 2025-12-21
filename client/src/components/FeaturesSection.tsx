/**
 * VegeKobe Features Section Component
 * Design: Left tabs with right content panel (interactive)
 * Features: 4 feature tabs with detailed descriptions
 */

import { useState } from "react";
import { Smartphone, Truck, Megaphone, Tag } from "lucide-react";

const features = [
  {
    id: "line-order",
    icon: Smartphone,
    title: "LINEで1分発注",
    shortTitle: "LINE発注",
    description:
      "専用アプリ不要。いつものLINEで、Amazonで買い物をするように野菜を発注できます。",
    image: "/images/line-ordering.png",
    imageAlt: "LINEで野菜を発注する画面",
  },
  {
    id: "same-day",
    icon: Truck,
    title: "朝採れ当日配送",
    shortTitle: "当日配送",
    description:
      "神戸市内の提携農家が朝収穫した野菜を、その日の14:00-18:00にお店へお届けします。市場経由とは「香り」が違います。",
    image: "/images/delivery-truck.png",
    imageAlt: "野菜を運ぶ配送トラック",
  },
  {
    id: "promotion",
    icon: Megaphone,
    title: "販促ツールもセット",
    shortTitle: "販促ツール",
    description:
      "「この野菜は誰が作ったの？」を伝える卓上POP、15秒動画、ホールスタッフ用スクリプトまで提供。自信を持っておすすめできます。",
    image: "/images/farmer-portrait.png",
    imageAlt: "農家紹介の販促ツール",
  },
  {
    id: "irregular",
    icon: Tag,
    title: "規格外で原価抑制",
    shortTitle: "規格外野菜",
    description:
      "出荷の際に「規格外」が出れば、アプリに通知。農家さんが決めた手頃な価格で購入可能です。スープやソース用に最適です。",
    image: "/images/fresh-vegetables.png",
    imageAlt: "新鮮な規格外野菜",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald/10 text-emerald text-sm font-bold px-4 py-2 rounded-full mb-4">
            FEATURES
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800">
            ベジコベの4つの特徴
          </h2>
        </div>

        {/* Tab UI */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: Tab Buttons */}
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                    activeTab === feature.id
                      ? "bg-emerald text-white shadow-lg"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      activeTab === feature.id
                        ? "bg-white/20"
                        : "bg-emerald/10"
                    }`}
                  >
                    <feature.icon
                      className={`w-5 h-5 ${
                        activeTab === feature.id ? "text-white" : "text-emerald"
                      }`}
                    />
                  </div>
                  <span className="font-bold text-sm lg:text-base">
                    <span className="lg:hidden">{feature.shortTitle}</span>
                    <span className="hidden lg:inline">{feature.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Panel */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center">
                      <activeFeature.icon className="w-6 h-6 text-emerald" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      {activeFeature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Image */}
                <div className="order-1 md:order-2">
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.imageAlt}
                    className="w-full h-auto rounded-xl shadow-md max-h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
