const bcryptjs = require("bcryptjs");

module.exports = (password) => bcryptjs.hash(password, 16);
