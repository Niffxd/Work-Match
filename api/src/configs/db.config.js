const config = require('../../config.js');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = config;

const dbConfig = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

module.exports = dbConfig;
