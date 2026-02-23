import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q6",
    question: "利用料金はかかりますか？",
    answer:
      "入会金・月額固定費はかかりません。お支払いは野菜代金と送料です。なお初回は1,000円分無料・送料無料でお試しいただけます。",
  },
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
    question: "ベジコベアプリを使いこなせるか不安です。",
    answer:
      "ご安心ください。初回お試し野菜のお届け時に、実際のスマホ画面を見ながら使い方を同席でご案内します。導入後もLINE・電話でいつでもご相談いただけます。",
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
