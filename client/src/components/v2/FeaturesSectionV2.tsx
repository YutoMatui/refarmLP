import { useState, useRef, useEffect } from "react";
import { Smartphone, Truck, Megaphone } from "lucide-react";
import { trackFeatureTabClick, trackSectionScroll } from "@/lib/gtag";

const features = [
  {
    id: "farmer-story",
    icon: Megaphone,
    title: "農家ストーリー画面",
    description:
      "生産者の顔写真、動画、こだわり文章が表示。スタッフも自信を持っておすすめできます。",
    image:
      "https://via.placeholder.com/300x400/E8F5E9/2E7D32?text=Farmer+Story",
    imageAlt: "農家ストーリー画面",
  },
  {
    id: "one-tap",
    icon: Smartphone,
    title: "ワンタップ発注画面",
    description:
      "「いつもの注文」ボタンで、忙しい営業後でも1秒で発注完了。履歴から即発注できます。",
    image:
      "https://via.placeholder.com/300x400/E8F5E9/2E7D32?text=One+Tap+Order",
    imageAlt: "ワンタップ発注画面",
  },
  {
    id: "irregular",
    icon: Truck,
    title: "規格外野菜リスト",
    description:
      "安価で良質な規格外品が一覧で並ぶ画面。掘り出し物が見つかります。",
    image:
      "https://via.placeholder.com/300x400/E8F5E9/2E7D32?text=Irregular+Veggies",
    imageAlt: "規格外野菜リスト",
  },
];

export default function FeaturesSectionV2() {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedScroll = useRef(false);

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedScroll.current) {
            hasTrackedScroll.current = true;
            trackSectionScroll("機能セクションV2");
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (featureId: string) => {
    setActiveTab(featureId);
    trackFeatureTabClick(featureId);
  };

  return (
    <section ref={sectionRef} id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            機能紹介
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 leading-tight">
            忙しい営業の合間でも、サクサク使える。
            <br />
            飲食店の現場に特化した3つの機能
          </h2>
        </div>

        {/* Tab UI - same as V1 FeaturesSection design */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: Tab Buttons */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:gap-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => handleTabClick(feature.id)}
                  className={`flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 px-2 lg:px-4 py-3 lg:py-4 rounded-xl text-center lg:text-left transition-all duration-200 ${
                    activeTab === feature.id
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      activeTab === feature.id ? "bg-white/20" : "bg-emerald-600/10"
                    }`}
                  >
                    <feature.icon
                      className={`w-4 h-4 lg:w-5 lg:h-5 ${
                        activeTab === feature.id ? "text-white" : "text-emerald-600"
                      }`}
                    />
                  </div>
                  <span className="font-bold text-xs lg:text-base">
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Panel */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Text */}
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center">
                      <activeFeature.icon className="w-6 h-6 text-emerald-600" />
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
