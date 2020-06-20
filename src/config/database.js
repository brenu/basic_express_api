const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

module.exports = {
  dialect: process.env['DB_DIALECT'],
  host: process.env['DB_HOST'],
  port: process.env['DB_PORT'],
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: 'basic_express_api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
