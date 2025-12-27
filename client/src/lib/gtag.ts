// client/src/lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID in production

// Declare global types for gtag
declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js',
            targetId: string,
            config?: Record<string, any>
        ) => void;
        dataLayer: any[];
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value?: number;
    [key: string]: any;
};

export const event = ({ action, category, label, value, ...rest }: GTagEvent) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
            ...rest,
        });
    } else {
        // console.log('GA4 Event:', { action, category, label, value, ...rest });
    }
};

// Specific tracking functions
export const trackLineRegistration = (location: string) => {
    event({
        action: 'line_registration_click',
        category: 'Conversion',
        label: location,
    });
};

export const trackCTAClick = (buttonType: string, location: string) => {
    event({
        action: 'cta_click',
        category: 'Conversion',
        label: `${buttonType} - ${location}`,
    });
};

export const trackSectionScroll = (sectionName: string) => {
    event({
        action: 'scroll_view',
        category: 'Interest',
        label: sectionName,
    });
};

export const trackFeatureTabClick = (featureId: string) => {
    event({
        action: 'feature_tab_click',
        category: 'Engagement',
        label: featureId,
    });
};
