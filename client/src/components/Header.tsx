/**
 * VegeKobe Sticky Header Component
 * Design: Neo-Corporate Trust style with emerald green brand color
 * Features: Logo with leaf icon, navigation, and CTA buttons
 */

import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "選ばれる理由", href: "#pain-points" },
  { label: "機能", href: "#features" },
  { label: "料金プラン", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
          >
            {/* 
              【ロゴ画像の変更方法】
              1. 使用したいロゴ画像を「public/images」フォルダにアップロードしてください（例: logo.png）。
              2. 以下のコードのコメントアウトを外し、下の<Leaf>と<span>の行を削除またはコメントアウトしてください。
            */}
            {/* ロゴ画像がある場合はこちらを使用 */}
            <img src="/images/logo.png" alt="VegeKobe" className="h-8 md:h-10 w-auto" />

            {/* テキストロゴ（画像がない場合のフォールバックとして残しておくか、不要なら削除） */}
            {/* <Leaf className="w-6 h-6 md:w-7 md:h-7 text-emerald" strokeWidth={2.5} />
            <span className="text-emerald font-black text-xl md:text-2xl tracking-tight">VegeKobe</span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-600 hover:text-emerald font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-emerald text-emerald hover:bg-emerald hover:text-white font-bold rounded-xl px-5"
              onClick={() => window.open("https://lin.ee/qMfjf66", "_blank")}
            >
              LINEで相談する
            </Button>
            <Button
              className="bg-orange hover:bg-orange-dark text-white font-bold rounded-xl px-5"
              onClick={() => window.open("https://lin.ee/qMfjf66", "_blank")}
            >
              資料請求
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-3 px-4 text-slate-600 hover:text-emerald hover:bg-slate-50 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white font-bold rounded-xl"
                onClick={() => window.open("https://lin.ee/qMfjf66", "_blank")}
              >
                LINEで相談する
              </Button>
              <Button
                className="w-full bg-orange hover:bg-orange-dark text-white font-bold rounded-xl"
                onClick={() => window.open("https://lin.ee/qMfjf66", "_blank")}
              >
                資料請求
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
