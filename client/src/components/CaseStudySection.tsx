import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Quote, ChevronDown, ChevronUp } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// ---------------------------
// Data Definition
// ---------------------------

const cases = [
    {
        id: 1,
        name: "野菜食堂堀江座",
        category: "カレー",
        image: "/images/case-curry.png",
        badge: "売上 110% 達成",
        title: "メインはいじらず、「脇役」で単価アップに成功。",
        description: "「値上げは怖かったので、ベジコベの規格外野菜を使って自家製アチャール（漬物）を始めました。原価を抑えつつ『野菜も摂れる』と好評で、半数以上の方が追加注文してくれるように。無理なく客単価が上がりました。」",
    },
    {
        id: 2,
        name: "Centrare",
        category: "イタリアン",
        image: "/images/case-italian.png",
        badge: "売上 120% 達成",
        title: "スタッフが「語れる」メニューで、季節の一皿が大人気に。",
        description: "「野菜と一緒に届く生産者さんのストーリーをスタッフに共有したところ、接客が変わりました。お客様との会話が弾み、高単価な季節限定メニューが飛ぶように売れています。」",
    }
];

// ---------------------------
// Sub Components
// ---------------------------

const CaseStudyCard = ({ data, isMobile = false }: { data: typeof cases[0], isMobile?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white">
            <div className="relative h-64 overflow-hidden shrink-0">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* 売上アップ表示を右側に配置 */}
                <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-3 py-1 text-sm font-bold shadow-md">
                        {data.badge}
                    </Badge>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                    <p className="text-white font-bold text-sm opacity-90">
                        {data.category} | {data.name}
                    </p>
                </div>
            </div>

            <CardContent className="p-6 md:p-8 bg-white relative flex flex-col grow">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 fill-slate-100" />

                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug pr-4">
                    {data.title}
                </h3>

                <div className="space-y-4 grow">
                    <div className="flex gap-3 items-start">
                        <div className="w-1 bg-slate-200 h-full min-h-[3rem] rounded-full shrink-0"></div>
                        <div className="text-slate-600 text-sm leading-relaxed w-full">
                            <p className={cn(!isExpanded && "line-clamp-3")}>
                                {data.description}
                            </p>

                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-emerald-600 font-bold text-sm mt-2 hover:underline flex items-center gap-1 ml-auto"
                            >
                                {isExpanded ? (
                                    <>閉じる <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>すべて見る <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

// ---------------------------
// Main Component
// ---------------------------

export default function CaseStudySection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="py-16 md:py-24 bg-slate-50 font-sans">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Success Stories
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
                        「ベジコベ」で、<br className="md:hidden" />
                        お店が変わった。
                    </h2>
                    <p className="mt-4 text-slate-600">
                        実際に導入されたオーナー様のリアルな変化をご紹介します。
                    </p>
                </div>

                {/* PC View: Grid */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {cases.map((item) => (
                        <CaseStudyCard key={item.id} data={item} />
                    ))}
                </div>

                {/* Mobile View: Carousel */}
                <div className="md:hidden relative max-w-sm mx-auto px-4">
                    <Carousel
                        setApi={setApi}
                        className="w-full"
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {cases.map((item) => (
                                <CarouselItem key={item.id}>
                                    <div className="p-1 h-full">
                                        <CaseStudyCard data={item} isMobile={true} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white border-0 shadow-md text-slate-800" />
                        <CarouselNext className="-right-4 bg-white/80 hover:bg-white border-0 shadow-md text-slate-800" />
                    </Carousel>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={cn(
                                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                                    current === index ? "bg-emerald-500 w-4" : "bg-slate-300 hover:bg-emerald-300"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
