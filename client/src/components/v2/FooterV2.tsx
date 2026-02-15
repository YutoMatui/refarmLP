export default function FooterV2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/images/logo.png"
              alt="ベジコベ"
              className="h-10 w-auto"
            />
          </div>

          {/* Operator Info */}
          <div className="text-slate-400 text-sm space-y-1 mb-6">
            <p>運営: りふぁーむ</p>
            <p>代表: 松井優人</p>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 w-full max-w-md pt-6">
            <p className="text-slate-500 text-xs">
              &copy; {currentYear} ベジコベ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
