/**
 * VegeKobe FAQ Section Component
 * Design: Accordion-style FAQ with smooth animations
 * Features: Expandable Q&A items
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "今の八百屋付き合いがあるのですが…",
    answer:
      "すべて切り替える必要はありません。まずは「本日のおすすめ」や「サラダ」など、一部のメニューから併用してスタートされるお店が多いです。",
  },
  {
    id: "q2",
    question: "本当に誰でも簡単に発注できますか？",
    answer:
      "はい、LINEが使えれば大丈夫です。難しい操作は一切ありません。導入時にスタッフ様向けの説明（3分程度）も行います。",
  },
  {
    id: "q3",
    question: "契約期間の縛りはありますか？",
    answer:
      "ありません。いつでも解約可能です。「合わない」と思ったら翌月からストップできますので、リスクなくお試しいただけます。",
  },
  {
    id: "q4",
    question: "規格外野菜はいつでも買えますか？",
    answer:
      "自然のものですので「出たときのみ」のご案内になります。その分、価格は農家さんが決めた「お買い得価格」になりますので、アプリの通知をお待ちください。",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald/10 text-emerald text-sm font-bold px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800">
            よくある質問
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-slate-50 rounded-xl border-none px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span className="text-emerald font-black text-lg">Q.</span>
                    <span className="text-slate-800 font-bold text-base md:text-lg">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="flex items-start gap-3 pl-0">
                    <span className="text-orange font-black text-lg">A.</span>
                    <p className="text-slate-600 leading-relaxed">
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
