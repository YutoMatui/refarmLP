// client/src/lib/fbpixel.ts
export const FB_PIXEL_ID = '1860893351213953';

// Declare global types for fbq
declare global {
    interface Window {
        fbq: (...args: any[]) => void;
        _fbq: any;
    }
}

// Track standard Facebook events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window.fbq !== 'undefined') {
        window.fbq('track', eventName, parameters);
    }
};

// Track custom Facebook events
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window.fbq !== 'undefined') {
        window.fbq('trackCustom', eventName, parameters);
    }
};

// Specific tracking functions for VegeKobe
export const trackLineClick = (location: string) => {
    trackEvent('Lead', {
        content_name: 'LINE Registration',
        content_category: 'Conversion',
        value: 1,
        currency: 'JPY',
        source: location
    });
};

export const trackDownloadClick = (location: string) => {
    trackEvent('Lead', {
        content_name: 'Document Download',
        content_category: 'Conversion',
        value: 0.5,
        currency: 'JPY',
        source: location
    });
};

export const trackPageScroll = (sectionName: string) => {
    trackCustomEvent('SectionView', {
        section_name: sectionName
    });
};

export const trackFAQOpen = (question: string) => {
    trackCustomEvent('FAQOpen', {
        question: question
    });
};
