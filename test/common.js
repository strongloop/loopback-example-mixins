// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-mixins
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

/* exported global */
global.loopback = require('loopback');
global.assert = require('assert');
global.app = require('../server/server');

// setup default data sources
global.loopback.createDataSource('db', {
  connector: global.loopback.Memory,
});

// auto attach data sources to models
// global.loopback.autoAttach();
