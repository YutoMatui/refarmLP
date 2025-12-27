import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from "../lib/gtag";

export default function GoogleAnalytics() {
    useEffect(() => {
        if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
            console.log('GA4: Measurement ID not configured. Skipping GA4 initialization.');
            return;
        }

        // gtag.js スクリプトを動的に挿入
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // gtag 初期化スクリプト
        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `;
        document.head.appendChild(script2);

        console.log('GA4: Initialized with ID:', GA_MEASUREMENT_ID);

        return () => {
            // クリーンアップ（必要に応じて）
        };
    }, []);

    return null;
}
