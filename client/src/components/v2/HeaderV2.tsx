import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeaderV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCTAClick = () => {
    window.open("https://www.jicoo.com/t/Q6dX269xuoEM/e/pqDziUpv", "_blank");
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Navigation (PC) */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              私たちについて
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              選ばれる理由
            </button>
            <button
              onClick={() => scrollToSection("farmers")}
              className="text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              提携農家
            </button>
            <button
              onClick={() => scrollToSection("flow")}
              className="text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              導入の流れ
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button (PC) */}
          <Button
            className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-2 px-6 rounded-lg transition-colors"
            onClick={handleCTAClick}
          >
            お試し配送を申し込む
          </Button>

          {/* Hamburger menu (Mobile) */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-emerald-100 pt-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              私たちについて
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              選ばれる理由
            </button>
            <button
              onClick={() => scrollToSection("farmers")}
              className="block w-full text-left text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              提携農家
            </button>
            <button
              onClick={() => scrollToSection("flow")}
              className="block w-full text-left text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              導入の流れ
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors"
            >
              FAQ
            </button>
            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-2 rounded-lg transition-colors mt-2"
              onClick={handleCTAClick}
            >
              お試し配送を申し込む
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
