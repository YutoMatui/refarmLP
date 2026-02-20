import { useState } from "react";
import ContactFormV2 from "@/components/v2/ContactFormV2";
import ThanksPageV2 from "@/components/v2/ThanksPageV2";

export default function ContactSectionV2() {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return <ThanksPageV2 />;
    }

    return (
        <section
            id="contact-form-section"
            className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white"
        >
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-10 md:mb-14">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
                        無料お試し申し込み
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        神戸のこだわり野菜を
                        <br className="md:hidden" />
                        <span className="text-orange-500">無料でお試し</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        フォームに入力するだけで、
                        <span className="font-bold text-slate-800">1000円分の野菜</span>
                        を無料でお試しいただけます。
                        <br />
                        入会金・月額費用は一切かかりません。
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 p-6 md:p-10 max-w-lg mx-auto">
                    <ContactFormV2 onSuccess={() => setSubmitted(true)} />
                </div>
            </div>
        </section>
    );
}
