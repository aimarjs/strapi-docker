'use strict';

const ORG = process.env.ORG || 'strapi';
const REPO = 'strapi/strapi';
const BASE_IMAGE_NAME = `${ORG}/strapi-base`;
const STRAPI_IMAGE_NAME = `${ORG}/strapi`;
const NODE_VERSIONS = [10, '12-buster-slim'];
const LATEST_NODE_VERSION = '12-buster-slim';

module.exports = {
  ORG,
  REPO,
  BASE_IMAGE_NAME,
  STRAPI_IMAGE_NAME,
  NODE_VERSIONS,
  LATEST_NODE_VERSION,
};
