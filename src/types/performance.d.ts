interface PerformanceEntry {
  startTime: number;
  processingStart?: number;
  value?: number;
}

interface PerformanceObserver {
  observe(options: { entryTypes: string[] }): void;
  disconnect(): void;
}

interface PerformanceObserverCallback {
  (list: { getEntries(): PerformanceEntry[] }): void;
}

interface PerformanceObserverConstructor {
  new (callback: PerformanceObserverCallback): PerformanceObserver;
}

declare global {
  interface Window {
    PerformanceObserver: PerformanceObserverConstructor;
  }
} 