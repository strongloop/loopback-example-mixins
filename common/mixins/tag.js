// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-mixins
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(Model, options) {
  'use strict';

  // give each dog a unique tag for tracking
  Model.defineProperty('tag', {
    type: String,
    'defaultFn': 'uuid',
    index: true,
    unique: true
  });

};
