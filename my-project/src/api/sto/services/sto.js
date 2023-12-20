'use strict';

/**
 * sto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sto.sto');
