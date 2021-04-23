/*
 * Speech to Text API v3.0
 * Speech to Text API v3.0.
 *
 * OpenAPI spec version: v3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Evaluation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Evaluation'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.PaginatedEvaluations = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.Evaluation);
  }
}(this, function(ApiClient, Evaluation) {
  'use strict';

  /**
   * The PaginatedEvaluations model module.
   * @module model/PaginatedEvaluations
   * @version v3.0
   */

  /**
   * Constructs a new <code>PaginatedEvaluations</code>.
   * @alias module:model/PaginatedEvaluations
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaginatedEvaluations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginatedEvaluations} obj Optional instance to populate.
   * @return {module:model/PaginatedEvaluations} The populated <code>PaginatedEvaluations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], [Evaluation]);
      if (data.hasOwnProperty('@nextLink'))
        obj.nextLink = ApiClient.convertToType(data['@nextLink'], 'String');
    }
    return obj;
  }

  /**
   * A list of entities limited by either the passed query parameters 'skip' and 'top' or their default values.                When iterating through a list using pagination and deleting entities in parallel, some entities will be skipped in the results.  It's recommended to build a list on the client and delete after the fetching of the complete list.
   * @member {Array.<module:model/Evaluation>} values
   */
  exports.prototype.values = undefined;

  /**
   * A link to the next set of paginated results if there are more entities available; otherwise null.
   * @member {String} nextLink
   */
  exports.prototype.nextLink = undefined;


  return exports;

}));