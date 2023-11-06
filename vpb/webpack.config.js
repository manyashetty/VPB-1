
module.exports = {
    // ... other Webpack settings
  
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify")
      }
    },
  };