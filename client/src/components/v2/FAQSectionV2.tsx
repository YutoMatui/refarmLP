import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSectionV2() {
  const faqs = [
    {
      question: "配送エリアは神戸市のどこまでですか？",
      answer:
        "現在、神戸市内全域への配送に対応しています。お店の場所によって配送時間が異なりますが、朝採れの野菜を最短でお届けするよう努めています。詳細はヒアリング時にご確認ください。",
    },
    {
      question: "1回だけのスポット注文も可能ですか？",
      answer:
        "はい、可能です。定期配送だけでなく、必要に応じてスポット注文もご利用いただけます。ただし、定期配送の方がコストメリットが大きいため、まずはお試し配送でご体験ください。",
    },
    {
      question: "LINE運用代行とは具体的に何をしてくれますか？",
      answer:
        "農家の物語やこだわりを伝えるPOP素材の提供、お店の公式LINEでの配信サポート、顧客との関係構築のアドバイスなどを行います。リピーター定着と客単価アップを目指した伴走型のサポートです。",
    },
    {
      question: "支払いのタイミングと方法は？",
      answer:
        "配送の翌日に請求書をLINEで送付いたします。月末締め翌月末払いが基本ですが、ご相談に応じて柔軟に対応可能です。銀行振込またはクレジットカード決済をご選択いただけます。",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        {/* 見出し */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            よくある質問
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            ご不明な点はお気軽にお問い合わせください
          </p>
        </div>

        {/* FAQ アコーディオン */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-emerald-200 py-2"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 md:py-5">
                  <span className="text-base md:text-lg font-bold text-slate-900 flex items-start gap-3">
                    <span className="text-emerald-600 font-black flex-shrink-0 mt-1">
                      Q{index + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 md:pb-5">
                  <div className="flex gap-3">
                    <span className="text-orange-600 font-black flex-shrink-0">
                      A.
                    </span>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
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
