/**
 * VegeKobe LP2 - Section 8: FAQ
 * 4 commonly asked questions with reassuring answers
 */

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "配送エリアは神戸市のどこまでですか？",
    answer:
      "現在、神戸市内全域（東灘区・灘区・中央区・兵庫区・長田区・須磨区・垂水区・北区・西区）に対応しております。配送ルートの最適化を行っており、一部エリアでは曜日指定となる場合がございます。詳しくはヒアリング時にお伝えいたします。",
  },
  {
    id: "q2",
    question: "1回だけのスポット注文も可能ですか？",
    answer:
      "はい、可能です。定期便だけでなく、イベントや季節メニューに合わせたスポット注文にも柔軟に対応しております。「今週だけ特別な野菜が欲しい」といったご要望もお気軽にどうぞ。",
  },
  {
    id: "q3",
    question: "LINE運用代行とは具体的に何をしてくれますか？",
    answer:
      "お店の公式LINEアカウントの運用を代行いたします。具体的には、配信メッセージの作成・スケジュール管理、リッチメニューの設計、クーポン配信の企画、顧客セグメント配信の設定などを行います。「今が旬の食材」や「生産者のストーリー」を活かしたコンテンツで、お客様のリピート来店を促進します。",
  },
  {
    id: "q4",
    question: "支払いのタイミングと方法は？",
    answer:
      "月末締め・翌月末払いの請求書払いとなります。請求書はLINEで自動送付されますので、紙の請求書の管理は不要です。お支払い方法は銀行振込に対応しております。初月のお試し配送分（1,000円分）は完全無料ですのでご安心ください。",
  },
];

export default function LP2FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-faq"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-[1.35rem] md:text-3xl font-black text-slate-800 leading-[1.5]">
            よくある質問
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`max-w-lg mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-slate-50 rounded-xl border-none px-5 data-[state=open]:shadow-md data-[state=open]:bg-white data-[state=open]:border data-[state=open]:border-emerald-100 transition-all"
              >
                <AccordionTrigger className="text-left py-4 hover:no-underline [&[data-state=open]>span>span:first-child]:text-emerald-600">
                  <span className="flex items-start gap-3">
                    <span className="text-emerald-500 font-black text-base mt-0.5 flex-shrink-0">
                      Q.
                    </span>
                    <span className="text-slate-800 font-bold text-[14px] md:text-[15px] leading-relaxed">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-black text-base mt-0.5 flex-shrink-0">
                      A.
                    </span>
                    <p className="text-[13px] text-slate-600 leading-[1.8]">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
