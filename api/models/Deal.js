/**
 * Deal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      dealName: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      miles: {
        type: 'string'
      },
      expiryDate: {
        type: 'string'
      },
      business: {
        model: 'business'
      }
    }
  };
  
  