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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PredictionModel', 'model/PredictionQueryTokenModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PredictionModel'), require('./PredictionQueryTokenModel'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.PredictionQueryModel = factory(root.TrainingApi.ApiClient, root.TrainingApi.PredictionModel, root.TrainingApi.PredictionQueryTokenModel);
  }
}(this, function(ApiClient, PredictionModel, PredictionQueryTokenModel) {
  'use strict';




  /**
   * The PredictionQueryModel model module.
   * @module model/PredictionQueryModel
   * @version 1.0
   */

  /**
   * Constructs a new <code>PredictionQueryModel</code>.
   * @alias module:model/PredictionQueryModel
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PredictionQueryModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredictionQueryModel} obj Optional instance to populate.
   * @return {module:model/PredictionQueryModel} The populated <code>PredictionQueryModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Results')) {
        obj['Results'] = ApiClient.convertToType(data['Results'], [PredictionModel]);
      }
      if (data.hasOwnProperty('Token')) {
        obj['Token'] = PredictionQueryTokenModel.constructFromObject(data['Token']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PredictionModel>} Results
   */
  exports.prototype['Results'] = undefined;
  /**
   * @member {module:model/PredictionQueryTokenModel} Token
   */
  exports.prototype['Token'] = undefined;



  return exports;
}));


