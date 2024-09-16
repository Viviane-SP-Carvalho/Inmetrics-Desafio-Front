const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',  
    experimentalRunAllSpecs: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportTitle: 'desafio',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'ddmmyyyy_HHMMss',
    }
    },
});
