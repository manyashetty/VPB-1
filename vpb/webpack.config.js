
module.exports = {
    // ... other Webpack settings
  
    resolve: {
      fallback: {
        "path":false,
        "os": false 
      }
    },
  };