const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();

  return object;
});

const User = model("users", UserSchema);

module.exports = User;
