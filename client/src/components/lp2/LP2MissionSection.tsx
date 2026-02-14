/**
 * VegeKobe LP2 - Section 6: Our Mission
 * "一つ一つの野菜が持つ物語で食卓をもっと豊かに。神戸の農業をもっと明るく。"
 */

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export default function LP2MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lp2-mission"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-orange-400" />

      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Icon */}
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-full border-2 border-emerald-200">
              <Heart className="w-6 h-6 text-emerald-600" />
            </div>
          </div>

          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
              私たちの想い
            </span>
          </div>

          {/* Main heading */}
          <h2
            className={`text-[1.3rem] md:text-2xl font-black text-slate-800 leading-[1.7] mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            一つ一つの野菜が持つ物語で
            <br />
            食卓をもっと<span className="text-emerald-600">豊か</span>に。
            <br />
            神戸の農業をもっと<span className="text-orange-500">明るく</span>。
          </h2>

          {/* Mission image */}
          <div
            className={`mb-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/lp2/mission-kobe-farm.jpg"
                alt="神戸の農園風景"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Body text */}
          <div
            className={`space-y-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-sm md:text-base text-slate-600 leading-[1.8]">
              神戸には、誇れる農家がいます。
              <br />
              丹精込めて育てた野菜は、どれも一級品。
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-[1.8]">
              しかし、その素晴らしい食材が
              <br />
              地元の飲食店に十分に届いていない現状があります。
            </p>
            <p className="text-sm md:text-base text-slate-700 font-bold leading-[1.8]">
              本当においしい地域の野菜を届け、
              <br />
              生産者と飲食店が共に成長し、
              <br />
              地域農業に貢献するサイクルを作りたい。
            </p>
            <p className="text-sm text-slate-500 leading-[1.8]">
              それが、VegeKobeの原点です。
            </p>
          </div>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-8 h-[2px] bg-emerald-300 rounded-full" />
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <div className="w-8 h-[2px] bg-orange-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
