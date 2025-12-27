import { useEffect, useRef } from 'react';
import { trackSectionScroll } from '@/lib/gtag';

interface ScrollTrackingOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollTracking(
    sectionId: string,
    sectionName: string,
    options: ScrollTrackingOptions = {}
) {
    const hasTracked = useRef(false);
    const { threshold = 0.5, rootMargin = '0px' } = options;

    useEffect(() => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTracked.current) {
                        hasTracked.current = true;
                        trackSectionScroll(sectionName);
                        // console.log(`GA4: Tracked scroll to ${sectionName}`);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [sectionId, sectionName, threshold, rootMargin]);
}

// 複数セクションを一括でトラッキング
export function useMultiSectionTracking(
    sections: { id: string; name: string }[],
    options: ScrollTrackingOptions = {}
) {
    const trackedSections = useRef<Set<string>>(new Set());
    const { threshold = 0.5, rootMargin = '0px' } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.id;
                    const section = sections.find((s) => s.id === sectionId);

                    if (entry.isIntersecting && section && !trackedSections.current.has(sectionId)) {
                        trackedSections.current.add(sectionId);
                        trackSectionScroll(section.name);
                        // console.log(`GA4: Tracked scroll to ${section.name}`);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sections, threshold, rootMargin]);
}
