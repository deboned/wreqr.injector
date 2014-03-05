/* global Backbone, afterEach */

describe('req', function () {
  'use strict';

  var depInjector = new Backbone.Wreqr.Injector();

  afterEach(function () {
    depInjector.removeAllHandlers();
  });

  it('should be defined without the handler existing', function () {
    var req = depInjector.req('service', 'world');
    req.should.be.type('function');
  });

  it('should throw when called without the handler existing', function () {
    var req = depInjector.req('service', 'world');
    req.should.throw();
  });

  it('should call the correct handler', function () {
    var req = depInjector.req('service', 'world');
    depInjector.setHandler('service', function (what) {
      return 'hello ' + what;
    });
    console.log(req());
    req().should.eql('hello world');
  });
});
