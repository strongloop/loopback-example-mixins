// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-mixins
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

module.exports = function(Model, options) {
  // give each dog a unique tag for tracking
  Model.defineProperty('tag', {
    type: String,
    'defaultFn': 'uuid',
    index: true,
    unique: true,
  });
};
