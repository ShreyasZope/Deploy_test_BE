import mongoose from "mongoose";
import dbConnection from "./db.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 18,
    max: 99
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);


export default User;
