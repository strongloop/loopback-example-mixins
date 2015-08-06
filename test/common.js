/* exported global */
global.loopback = require('loopback');
global.assert = require('assert');
global.app = require('../server/server');

// setup default data sources
global.loopback.setDefaultDataSourceForType('db', {
  connector: global.loopback.Memory
});

// auto attach data sources to models
// global.loopback.autoAttach();
