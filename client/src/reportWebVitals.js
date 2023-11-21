const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      const measures = {
        // Define web vitals metrics here
        // For example, you can use the Web Vitals library to collect metrics:
        // https://web.dev/vitals/
      };
      onPerfEntry(measures);
    }
  };
  
  export default reportWebVitals;
  