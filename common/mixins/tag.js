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
