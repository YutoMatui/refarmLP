export default function FooterV2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="ベジコベ"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              神戸の飲食店向け野菜仕入れプラットフォーム。生産者の想いを届けます。
            </p>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-bold text-white mb-4">サービス</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  お試し配送
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  農家紹介
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">会社</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h4 className="font-bold text-white mb-4">フォロー</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm text-center">
            &copy; {currentYear} ベジコベ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
