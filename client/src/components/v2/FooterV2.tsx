export default function FooterV2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">VK</span>
              </div>
              <span className="font-black text-lg">VegeKobe</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              神戸の飲食店向け野菜仕入れプラットフォーム。生産者の想いを届けます。
            </p>
          </div>

          {/* サービス */}
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

          {/* 会社 */}
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

        {/* 区切り線 */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm text-center">
            © {currentYear} VegeKobe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
