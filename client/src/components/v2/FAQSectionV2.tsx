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
      "現在、神戸市内全域への配送に対応しています。お店の場所によって配送時間が異なりますが、朝採れの野菜を最短でお届けするよう努めています。詳細はヒアリング時にご確認ください。",
  },
  {
    id: "q2",
    question: "今の仕入れ先との付き合いがあるのですが…",
    answer:
      "すべて切り替える必要はありません。まずは「本日のおすすめ」や「サラダ」など、一部のメニューから併用してスタートされるお店が多いです。",
  },
  {
    id: "q3",
    question: "本当に誰でも簡単に発注できますか？",
    answer:
      "はい、LINEが使えれば大丈夫です。難しい操作は一切ありません。導入時にスタッフ様向けの丁寧な説明も行います。",
  },
  {
    id: "q4",
    question: "LINE運用代行とは具体的に何をしてくれますか？",
    answer:
      "店内でのビジュアルメニューコミュニケーション（メニューシート・卓上POP・サイネージ等）の制作と、公式LINEを活用したメッセージ配信によるリピート促進を行います。客単価とリピート率の向上を目指し、効果測定まで一貫してサポートいたします。詳細はヒアリング時にご説明いたします。",
  },
  {
    id: "q5",
    question: "規格外野菜はいつでも買えますか？",
    answer:
      "自然のものですので「出たときのみ」のご案内になります。その分、価格は農家さんが決めた「お買い得価格」になりますので、アプリの通知をお待ちください。",
  },
];

export default function FAQSectionV2() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-emerald-600/10 text-emerald-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
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
                    <span className="text-emerald-600 font-black text-lg">Q.</span>
                    <span className="text-slate-800 font-bold text-base md:text-lg">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="flex items-start gap-3 pl-0">
                    <span className="text-orange-500 font-black text-lg">A.</span>
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
