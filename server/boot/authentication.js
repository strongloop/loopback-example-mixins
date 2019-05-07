// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-mixins
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();
};
