const User = require("../models/user");
const hashPassword = require("../helpers/hashPassword");

//TODO add validation
const userService = {
  async createUser({ name, email, password }) {
    const emailExists = await User.findOne({ email }).exec();

    if (emailExists) {
      throw new Error("Email exists");
    }

    const hashedPassword = await hashPassword(password);

    return new User({ email, name, password: hashedPassword }).save();
  },
};

module.exports = { userService };
