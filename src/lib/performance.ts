// Performance monitoring configuration
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FCP:', entry.startTime);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: 'FCP',
            value: Math.round(entry.startTime)
          });
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('LCP:', entry.startTime);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(entry.startTime)
          });
        }
      });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime)
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('CLS:', entry.value);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(entry.value * 1000)
          });
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}; 