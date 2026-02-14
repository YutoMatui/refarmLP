import { CheckCircle2, ArrowRight } from "lucide-react";

export default function OnboardingFlowV2() {
  const steps = [
    {
      number: "1",
      title: "予約フォームから申し込み",
      description: "アカウント発行のためのヒアリング（30分）を予約。",
    },
    {
      number: "2",
      title: "ヒアリング実施・アカウント発行",
      description: "お店のニーズを聞き取り、最適な農家とマッチング。",
    },
    {
      number: "3",
      title: "1,000円分のお試し野菜配送（無料）",
      description: "実際に味とサービスを体験。気に入れば継続。",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 見出し */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            導入の流れは<span className="text-emerald-600">3ステップ</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            シンプルで、すぐに始められます
          </p>
        </div>

        {/* ステップフロー */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* ステップカード */}
              <div className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-6 md:p-8 border-2 border-emerald-200 h-full flex flex-col">
                {/* ステップ番号 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg md:text-xl">
                      {step.number}
                    </span>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 hidden md:block" />
                </div>

                {/* テキスト */}
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>

              {/* 矢印（PC用） */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-8 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-emerald-600" />
                </div>
              )}

              {/* 矢印（モバイル用） */}
              {index < steps.length - 1 && (
                <div className="flex md:hidden justify-center mt-4">
                  <div className="w-1 h-8 bg-emerald-600 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
