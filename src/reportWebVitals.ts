import { ReportHandler } from 'web-vitals';

// The reportWebVitals function is used to measure the performance of the application.
// It takes an optional callback function (onPerfEntry) as an argument.
// If the callback function is provided and is a valid function, it dynamically imports the 'web-vitals' library.
// The 'web-vitals' library provides functions to measure various web vitals metrics.
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // getCLS measures Cumulative Layout Shift (CLS)
      getCLS(onPerfEntry);
      // getFID measures First Input Delay (FID)
      getFID(onPerfEntry);
      // getFCP measures First Contentful Paint (FCP)
      getFCP(onPerfEntry);
      // getLCP measures Largest Contentful Paint (LCP)
      getLCP(onPerfEntry);
      // getTTFB measures Time to First Byte (TTFB)
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
