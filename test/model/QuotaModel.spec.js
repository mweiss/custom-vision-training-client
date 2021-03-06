/**
 * TrainingApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TrainingApi);
  }
}(this, function(expect, TrainingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TrainingApi.QuotaModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('QuotaModel', function() {
    it('should create an instance of QuotaModel', function() {
      // uncomment below and update the code to test QuotaModel
      //var instane = new TrainingApi.QuotaModel();
      //expect(instance).to.be.a(TrainingApi.QuotaModel);
    });

    it('should have the property total (base name: "Total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new TrainingApi.QuotaModel();
      //expect(instance).to.be();
    });

    it('should have the property used (base name: "Used")', function() {
      // uncomment below and update the code to test the property used
      //var instane = new TrainingApi.QuotaModel();
      //expect(instance).to.be();
    });

    it('should have the property timeUntilReset (base name: "TimeUntilReset")', function() {
      // uncomment below and update the code to test the property timeUntilReset
      //var instane = new TrainingApi.QuotaModel();
      //expect(instance).to.be();
    });

  });

}));
