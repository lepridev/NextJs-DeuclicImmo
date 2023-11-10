import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = models.users || model("users", userSchema);

export default Users;
