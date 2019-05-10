const defaultConfig = require('./protractor.conf').config;
defaultConfig.capabilities.chromeOptions = {
  args: ['--headless']
};

exports.config = defaultConfig;
