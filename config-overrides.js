const {
    addBabelPlugin,
    overrideDevServer,
    watchAll
  } = require("customize-cra");

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
      // ...add your webpack config
      return config;
    },
    // The Jest config to use when running your jest tests - note that the normal rewires do not
    // work here.
    jest: function(config) {
      // ...add your jest config customisation...
    //   // Example: enable/disable some tests based on environment variables in the .env file.
    //   if (!config.testPathIgnorePatterns) {
    //     config.testPathIgnorePatterns = [];
    //   }
    //   if (!process.env.RUN_COMPONENT_TESTS) {
    //     config.testPathIgnorePatterns.push('<rootDir>/src/components/**/*.test.js');
    //   }
    //   if (!process.env.RUN_REDUCER_TESTS) {
    //     config.testPathIgnorePatterns.push('<rootDir>/src/reducers/**/*.test.js');
    //   }
      return config;
    },
    devServer: overrideDevServer(
        addBabelPlugin("@patternfly/react-styles/babel", {
            srcDir: './src',
            outDir: './dist/esm',
            useModules: true
          }),
        watchAll()
    ),
    // The paths config to use when compiling your react app for development or production.
    paths: function(paths, env) {
      // ...add your paths config
      return paths;
    },
  }