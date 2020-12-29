const mongoose = require("mongoose");

module.exports = async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB_URIS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
      console.log("MongoDb connected successfully");
    });

    if (process.env.NODE_ENV !== "test") {
      mongoose.connection.on("error", (err) => {
        console.error(err);
      });

      mongoose.connection.on("disconnected", (data) => {
        console.error(data);
      });
    }
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", error);
  }
};
