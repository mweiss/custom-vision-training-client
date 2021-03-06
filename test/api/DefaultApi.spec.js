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
    instance = new TrainingApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('createImagesFromData', function() {
      it('should call createImagesFromData successfully', function(done) {
        //uncomment below and update the code to test createImagesFromData
        //instance.createImagesFromData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImagesFromPredictions', function() {
      it('should call createImagesFromPredictions successfully', function(done) {
        //uncomment below and update the code to test createImagesFromPredictions
        //instance.createImagesFromPredictions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImagesFromUrls', function() {
      it('should call createImagesFromUrls successfully', function(done) {
        //uncomment below and update the code to test createImagesFromUrls
        //instance.createImagesFromUrls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProject', function() {
      it('should call createProject successfully', function(done) {
        //uncomment below and update the code to test createProject
        //instance.createProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTag', function() {
      it('should call createTag successfully', function(done) {
        //uncomment below and update the code to test createTag
        //instance.createTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageLabel', function() {
      it('should call deleteImageLabel successfully', function(done) {
        //uncomment below and update the code to test deleteImageLabel
        //instance.deleteImageLabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImages', function() {
      it('should call deleteImages successfully', function(done) {
        //uncomment below and update the code to test deleteImages
        //instance.deleteImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIteration', function() {
      it('should call deleteIteration successfully', function(done) {
        //uncomment below and update the code to test deleteIteration
        //instance.deleteIteration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePrediction', function() {
      it('should call deletePrediction successfully', function(done) {
        //uncomment below and update the code to test deletePrediction
        //instance.deletePrediction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProject', function() {
      it('should call deleteProject successfully', function(done) {
        //uncomment below and update the code to test deleteProject
        //instance.deleteProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTag', function() {
      it('should call deleteTag successfully', function(done) {
        //uncomment below and update the code to test deleteTag
        //instance.deleteTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountInfo', function() {
      it('should call getAccountInfo successfully', function(done) {
        //uncomment below and update the code to test getAccountInfo
        //instance.getAccountInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllTaggedImages', function() {
      it('should call getAllTaggedImages successfully', function(done) {
        //uncomment below and update the code to test getAllTaggedImages
        //instance.getAllTaggedImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllUntaggedImages', function() {
      it('should call getAllUntaggedImages successfully', function(done) {
        //uncomment below and update the code to test getAllUntaggedImages
        //instance.getAllUntaggedImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDomain', function() {
      it('should call getDomain successfully', function(done) {
        //uncomment below and update the code to test getDomain
        //instance.getDomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDomains', function() {
      it('should call getDomains successfully', function(done) {
        //uncomment below and update the code to test getDomains
        //instance.getDomains(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getImagesByTags', function() {
      it('should call getImagesByTags successfully', function(done) {
        //uncomment below and update the code to test getImagesByTags
        //instance.getImagesByTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIteration', function() {
      it('should call getIteration successfully', function(done) {
        //uncomment below and update the code to test getIteration
        //instance.getIteration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIterationPerformance', function() {
      it('should call getIterationPerformance successfully', function(done) {
        //uncomment below and update the code to test getIterationPerformance
        //instance.getIterationPerformance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIterations', function() {
      it('should call getIterations successfully', function(done) {
        //uncomment below and update the code to test getIterations
        //instance.getIterations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNextPredictionResults', function() {
      it('should call getNextPredictionResults successfully', function(done) {
        //uncomment below and update the code to test getNextPredictionResults
        //instance.getNextPredictionResults(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPredictionResults', function() {
      it('should call getPredictionResults successfully', function(done) {
        //uncomment below and update the code to test getPredictionResults
        //instance.getPredictionResults(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProject', function() {
      it('should call getProject successfully', function(done) {
        //uncomment below and update the code to test getProject
        //instance.getProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjects', function() {
      it('should call getProjects successfully', function(done) {
        //uncomment below and update the code to test getProjects
        //instance.getProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTag', function() {
      it('should call getTag successfully', function(done) {
        //uncomment below and update the code to test getTag
        //instance.getTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTags', function() {
      it('should call getTags successfully', function(done) {
        //uncomment below and update the code to test getTags
        //instance.getTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postImageLabel', function() {
      it('should call postImageLabel successfully', function(done) {
        //uncomment below and update the code to test postImageLabel
        //instance.postImageLabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trainProject', function() {
      it('should call trainProject successfully', function(done) {
        //uncomment below and update the code to test trainProject
        //instance.trainProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIteration', function() {
      it('should call updateIteration successfully', function(done) {
        //uncomment below and update the code to test updateIteration
        //instance.updateIteration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProject', function() {
      it('should call updateProject successfully', function(done) {
        //uncomment below and update the code to test updateProject
        //instance.updateProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTag', function() {
      it('should call updateTag successfully', function(done) {
        //uncomment below and update the code to test updateTag
        //instance.updateTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
