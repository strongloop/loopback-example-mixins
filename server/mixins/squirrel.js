module.exports = function(Model, options) {
  'use strict';

  Model.observe('before save', function event(ctx, next) {
    if (ctx.instance) {
      ctx.instance.squirrel = true;
    } else {
      ctx.data.squirrel = true;
    }
    next();
  });

};
