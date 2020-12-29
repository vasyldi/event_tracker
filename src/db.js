const mongoose = require("mongoose");

module.exports = async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB_URIS, {});
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", error);
  }
};
