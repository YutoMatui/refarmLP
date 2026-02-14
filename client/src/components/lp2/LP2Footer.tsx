/**
 * VegeKobe LP2 - Footer
 * Simple footer with logo and company info
 */

export default function LP2Footer() {
  return (
    <footer className="py-8 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <a href="/2" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="VegeKobe"
              className="h-8 md:h-10 w-auto brightness-0 invert opacity-80"
            />
          </a>

          {/* Company info */}
          <div className="text-slate-400 text-xs space-y-1">
            <p className="font-bold">運営: りふぁーむ</p>
            <p>代表: 松井 優人</p>
            <p>〒653-0041 神戸市長田区腕塚町5-2-1 新長田キャンパスプラザ5階</p>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-[11px]">
            &copy; 2024 VegeKobe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
