// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-mixins
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

describe('mixin example', function() {
  it('should load the module mixin', function() {
    // console.log(app.models.Dog.definition.properties);
    assert.ok(app.models.Dog.definition.properties.createdAt,
      'missing createdAt');
    assert.ok(app.models.Dog.definition.properties.updatedAt,
      'missing updatedAt');
  });

  it('should load the local mixin', function() {
    assert.ok(app.models.Dog.definition.properties.tag, 'missing tag');
  });

  it('should be assigned `squirrel` before saving', function(done) {
    var Dog = app.models.Dog;
    Dog.create({breed: 'Pitbull'}, function(err, dog) {
      if (err) return done(err);
      assert.ok(dog.squirrel);
      assert.ok(dog.tag);
      assert.ok(dog.createdAt);
      assert.ok(dog.updatedAt);
      done();
    });
  });
});
