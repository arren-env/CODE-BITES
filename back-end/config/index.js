const dotenv = require('dotenv');
dotenv.config();

const files = {
    PORT,
} = process.env;

module.exports = files;