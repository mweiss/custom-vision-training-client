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
    define(['ApiClient', 'model/AccountQuotaModel', 'model/ApiKeysModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountQuotaModel'), require('./ApiKeysModel'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.AccountModel = factory(root.TrainingApi.ApiClient, root.TrainingApi.AccountQuotaModel, root.TrainingApi.ApiKeysModel);
  }
}(this, function(ApiClient, AccountQuotaModel, ApiKeysModel) {
  'use strict';




  /**
   * The AccountModel model module.
   * @module model/AccountModel
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountModel</code>.
   * Represents a user account
   * @alias module:model/AccountModel
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AccountModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountModel} obj Optional instance to populate.
   * @return {module:model/AccountModel} The populated <code>AccountModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('UserName')) {
        obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('Keys')) {
        obj['Keys'] = ApiKeysModel.constructFromObject(data['Keys']);
      }
      if (data.hasOwnProperty('Quotas')) {
        obj['Quotas'] = AccountQuotaModel.constructFromObject(data['Quotas']);
      }
    }
    return obj;
  }

  /**
   * Gets the name of the account owner
   * @member {String} UserName
   */
  exports.prototype['UserName'] = undefined;
  /**
   * Gets the email associated with this account
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * Gets the api keys associated with this account
   * @member {module:model/ApiKeysModel} Keys
   */
  exports.prototype['Keys'] = undefined;
  /**
   * Gets the quotas associated with this account
   * @member {module:model/AccountQuotaModel} Quotas
   */
  exports.prototype['Quotas'] = undefined;



  return exports;
}));

